#!/usr/bin/env node

/**
 * Script de Exportação Estática e Publicação no GitHub Pages
 * Exporta o portfólio executivo de Arthur Saggioratto como site estático autônomo
 * e publica na branch 'gh-pages' do repositório remoto.
 */

import fs from 'node:fs'
import path from 'node:path'
import net from 'node:net'
import { spawn, execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.join(ROOT_DIR, 'gh-pages-dist')

// Limpeza de variáveis de proxy para garantir requisições locais limpas
delete process.env.http_proxy
delete process.env.HTTP_PROXY
delete process.env.https_proxy
delete process.env.HTTPS_PROXY
delete process.env.all_proxy
delete process.env.ALL_PROXY
process.env.NO_PROXY = '*'

console.log('🚀 Iniciando processo de exportação estática para GitHub Pages...')

/**
 * Função auxiliar para aguardar milissegundos
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Função para encontrar uma porta TCP livre dinamicamente
 */
function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer()
    srv.listen(0, '127.0.0.1', () => {
      const port = srv.address().port
      srv.close(() => resolve(port))
    })
    srv.on('error', reject)
  })
}

/**
 * Função para obter o HTML renderizado do portfólio
 */
async function fetchPortfolioHtml() {
  // 1. Tentar ler de servidores que possam estar ativos
  const probePorts = [3000, 3721, 3005]
  for (const port of probePorts) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/arthur`)
      if (res.ok) {
        console.log(`✅ Servidor ativo detectado em http://127.0.0.1:${port}/arthur`)
        return await res.text()
      }
    } catch {
      // Ignora e continua
    }
  }

  // 2. Se nenhum servidor estiver ativo, iniciar temporariamente next dev
  const targetPort = 3829
  console.log(`⚙️ Iniciando servidor local Next.js na porta ${targetPort} para renderização estática...`)
  const nextBin = path.join(ROOT_DIR, 'node_modules', '.bin', 'next')
  const devProc = spawn(nextBin, ['dev', '-p', String(targetPort), '-H', '127.0.0.1'], {
    cwd: ROOT_DIR,
    env: { ...process.env, PORT: String(targetPort), LD_PRELOAD: '' },
    stdio: 'pipe',
  })

  devProc.on('error', (err) => {
    console.error('❌ Erro no processo Next.js:', err)
  })

  devProc.stdout.on('data', (d) => {
    const s = d.toString()
    if (s.includes('Ready') || s.includes('GET /arthur') || s.includes('compiled')) {
      console.log(`[Next.js] ${s.trim()}`)
    }
  })

  devProc.stderr.on('data', (d) => {
    const s = d.toString()
    if (!s.includes('libchromaleon') && !s.includes('silently truncated')) {
      console.error(`[Next.js stderr] ${s.trim()}`)
    }
  })

  let htmlResult = ''
  try {
    const targetUrl = `http://127.0.0.1:${targetPort}/arthur`
    const maxWaitSeconds = 45
    console.log(`⏳ Aguardando compilação de ${targetUrl} (máximo ${maxWaitSeconds}s)...`)

    for (let i = 0; i < maxWaitSeconds; i++) {
      await sleep(1000)
      try {
        const res = await fetch(targetUrl)
        if (res.ok) {
          htmlResult = await res.text()
          console.log(`✅ Página renderizada com sucesso (${htmlResult.length} bytes)!`)
          break
        }
      } catch {
        // Aguarda próxima iteração
      }
    }

    if (!htmlResult) {
      throw new Error('Tempo limite esgotado ao aguardar renderização da página.')
    }
  } finally {
    console.log('🛑 Encerrando servidor temporário de renderização...')
    devProc.kill('SIGTERM')
  }

  return htmlResult
}

// Execução do fluxo de exportação
const htmlContent = await fetchPortfolioHtml()

// Limpar e recriar o diretório de destino gh-pages-dist
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true })
}
fs.mkdirSync(DIST_DIR, { recursive: true })

// 3. Ajustar URLs no HTML para serem relativas (compatibilidade total com subdiretórios no GitHub Pages)
console.log('🔧 Adaptando caminhos de assets e links para caminhos relativos...')
let adaptedHtml = htmlContent
  // Caminhos de Next.js static
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/')
  .replaceAll('url(/_next/', 'url(./_next/')
  .replaceAll('url("/_next/', 'url("./_next/')
  .replaceAll("url('/_next/", "url('./_next/")
  // Imagem e mídias de Arthur Saggioratto
  .replaceAll('http://localhost:3000/arthur-saggioratto.jpg', './arthur-saggioratto.jpg')
  .replaceAll('src="/arthur-saggioratto.jpg"', 'src="./arthur-saggioratto.jpg"')
  .replaceAll('href="/arthur-saggioratto.jpg"', 'href="./arthur-saggioratto.jpg"')
  .replaceAll('src="/images/', 'src="./images/')
  .replaceAll('href="/images/', 'href="./images/')
  // Favicons
  .replaceAll('href="/favicon.ico"', 'href="./favicon.ico"')
  .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  // Links internos
  .replaceAll('href="/arthur"', 'href="./index.html"')
  .replaceAll('href="/portfolio"', 'href="./portfolio.html"')

// Remover qualquer Schema corporativo legado da Squammata no cabeçalho
adaptedHtml = adaptedHtml.replace(
  /<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"ProfessionalService","name":"Squammata[^<]+<\/script>/g,
  '',
)
// Remover preloads legados da Squammata
adaptedHtml = adaptedHtml.replace(
  /<link rel="preload" as="image" href="\/logo\/squammata\/[^"]+"\/>/g,
  '',
)

// Substituir menções e logotipos residuais da Squammata para garantir autonomia 100% standalone
adaptedHtml = adaptedHtml
  .replaceAll('Squammata Consultoria e Gestão de Projetos Ltda.', 'Arthur Saggioratto Consultoria & Advisory')
  .replaceAll('Squammata', 'Arthur Saggioratto')
  .replaceAll('/logo/squammata/squammata-lockup-horizontal-white.svg', './arthur-saggioratto.jpg')
  .replaceAll('id="squammata-theme-dynamic"', 'id="portfolio-theme-dynamic"')
  .replaceAll('Squammata Dynamic Theme Active Preset', 'Executive Dynamic Theme Active Preset')

// 4. Gravar os arquivos HTML principais
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), adaptedHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'arthur.html'), adaptedHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'portfolio.html'), adaptedHtml, 'utf-8')
// 404.html no GitHub Pages redireciona para carregar o portfólio em qualquer subrota
fs.writeFileSync(path.join(DIST_DIR, '404.html'), adaptedHtml, 'utf-8')
console.log('✅ Arquivos index.html, arthur.html, portfolio.html e 404.html gerados.')

// 5. Criar arquivo .nojekyll (obrigatório para que o GitHub Pages sirva diretórios iniciados por _)
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf-8')
console.log('✅ Arquivo .nojekyll criado (desativa processamento Jekyll no GitHub Pages).')

// 6. Copiar arquivos públicos (fotos, favicons, etc.)
console.log('📁 Copiando assets estáticos da pasta public/...')
const publicDir = path.join(ROOT_DIR, 'public')
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, DIST_DIR, { recursive: true })
}

// 7. Copiar chunks, css e fontes compiladas de .next/static para dist/_next/static
console.log('📁 Copiando assets compilados de .next/static para _next/static...')
const nextStaticDir = path.join(ROOT_DIR, '.next', 'static')
const targetStaticDir = path.join(DIST_DIR, '_next', 'static')
if (fs.existsSync(nextStaticDir)) {
  fs.mkdirSync(path.join(DIST_DIR, '_next'), { recursive: true })
  fs.cpSync(nextStaticDir, targetStaticDir, { recursive: true })
  console.log('✅ Chunks e assets estáticos copiados para gh-pages-dist/_next/static.')

  // 7.1 Sanitizar bundles JS para garantir caminhos de imagem corretos no GitHub Pages
  function walkDir(dir) {
    let results = []
    const list = fs.readdirSync(dir)
    for (const file of list) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)
      if (stat && stat.isDirectory()) {
        results = results.concat(walkDir(fullPath))
      } else if (fullPath.endsWith('.js')) {
        results.push(fullPath)
      }
    }
    return results
  }

  const jsFiles = walkDir(targetStaticDir)
  for (const jsFile of jsFiles) {
    let content = fs.readFileSync(jsFile, 'utf-8')
    let changed = false
    if (content.includes('"/arthur-saggioratto.jpg"')) {
      content = content.replaceAll('"/arthur-saggioratto.jpg"', '"/Squammata-PayloadCMS/arthur-saggioratto.jpg"')
      changed = true
    }
    if (content.includes("'/arthur-saggioratto.jpg'")) {
      content = content.replaceAll("'/arthur-saggioratto.jpg'", "'/Squammata-PayloadCMS/arthur-saggioratto.jpg'")
      changed = true
    }
    if (changed) {
      fs.writeFileSync(jsFile, content, 'utf-8')
    }
  }
  console.log('✅ Bundles JS sanitizados com suporte ao subcaminho do repositório.')
} else {
  console.warn('⚠️ Diretório .next/static não encontrado. Chunks podem estar ausentes.')
}

// 7.2 Criar cópia redundante na subpasta do repositório para tolerar qualquer resolução relativa do navegador
const ghSubdir = path.join(DIST_DIR, 'Squammata-PayloadCMS')
fs.mkdirSync(ghSubdir, { recursive: true })
if (fs.existsSync(path.join(publicDir, 'arthur-saggioratto.jpg'))) {
  fs.copyFileSync(
    path.join(publicDir, 'arthur-saggioratto.jpg'),
    path.join(ghSubdir, 'arthur-saggioratto.jpg'),
  )
}

console.log('✨ Exportação estática concluída com sucesso em gh-pages-dist!')

// 8. Se solicitado o deploy (--deploy), publicar na branch gh-pages
const shouldDeploy = process.argv.includes('--deploy')
if (shouldDeploy) {
  console.log('\n🚀 Publicando arquivos estáticos na branch gh-pages do GitHub...')
  try {
    const gitRemoteUrl = execSync('git config --get remote.origin.url', { cwd: ROOT_DIR })
      .toString()
      .trim()

    execSync('git init', { cwd: DIST_DIR, stdio: 'ignore' })
    execSync('git config user.name "Arthur Saggioratto"', { cwd: DIST_DIR, stdio: 'ignore' })
    execSync('git config user.email "arthur.saggioratto@gmail.com"', { cwd: DIST_DIR, stdio: 'ignore' })
    execSync('git checkout -B gh-pages', { cwd: DIST_DIR, stdio: 'ignore' })
    execSync('git add -A', { cwd: DIST_DIR, stdio: 'ignore' })
    execSync('git commit -m "deploy: publicar portfolio executivo de Arthur Saggioratto no GitHub Pages"', {
      cwd: DIST_DIR,
      stdio: 'ignore',
    })
    console.log(`📤 Enviando para ${gitRemoteUrl} (branch gh-pages)...`)
    execSync(`git push -f ${gitRemoteUrl} gh-pages`, { cwd: DIST_DIR, stdio: 'inherit' })
    console.log('\n🎉 Deploy no GitHub Pages concluído com sucesso!')
    console.log('🔗 Configure no GitHub: Repositório -> Settings -> Pages -> Build and deployment -> Source: Deploy from a branch -> Branch: gh-pages / (root)')
  } catch (deployErr) {
    console.error('❌ Falha ao enviar para o GitHub Pages:', deployErr.message)
    process.exit(1)
  }
} else {
  console.log('\n💡 Para publicar diretamente no GitHub Pages, execute:')
  console.log('   pnpm pages:deploy')
}
