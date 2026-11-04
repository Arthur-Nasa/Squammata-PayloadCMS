#!/usr/bin/env node

/**
 * Script de Exportação Estática e Publicação no GitHub Pages
 * Exporta o portfólio executivo de Arthur Saggioratto (PT e EN) como site estático autônomo
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

console.log('🚀 Iniciando processo de exportação estática (PT + EN) para GitHub Pages...')

// Limpeza prévia de caches do Next.js para garantir build 100% atualizado
const nextCacheDir = path.join(ROOT_DIR, '.next', 'cache')
if (fs.existsSync(nextCacheDir)) {
  try {
    fs.rmSync(nextCacheDir, { recursive: true, force: true })
    console.log('🧹 Cache interno do Next.js limpo (.next/cache).')
  } catch {}
}

/**
 * Função auxiliar para aguardar milissegundos
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Função para obter o HTML renderizado das rotas do portfólio (/arthur e /en/arthur)
 */
async function fetchPortfolioPages() {
  const routes = ['/arthur', '/en/arthur']
  const results = {}

  // 1. Tentar ler de servidores que possam estar ativos
  const probePorts = [3000, 3721, 3005]
  let activePort = null
  for (const port of probePorts) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/arthur`)
      if (res.ok) {
        console.log(`✅ Servidor ativo detectado em http://127.0.0.1:${port}`)
        activePort = port
        break
      }
    } catch {}
  }

  let devProc = null
  if (!activePort) {
    activePort = 3829
    console.log(`⚙️ Iniciando servidor local Next.js na porta ${activePort} para renderização estática...`)
    const nextBin = path.join(ROOT_DIR, 'node_modules', '.bin', 'next')
    devProc = spawn(nextBin, ['dev', '-p', String(activePort), '-H', '127.0.0.1'], {
      cwd: ROOT_DIR,
      env: { ...process.env, PORT: String(activePort), LD_PRELOAD: '' },
      stdio: 'pipe',
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
  }

  try {
    for (const route of routes) {
      const targetUrl = `http://127.0.0.1:${activePort}${route}`
      const maxWaitSeconds = 60
      console.log(`⏳ Aguardando compilação de ${targetUrl} (máximo ${maxWaitSeconds}s)...`)
      let pageHtml = ''
      for (let i = 0; i < maxWaitSeconds; i++) {
        await sleep(1000)
        try {
          const res = await fetch(targetUrl)
          if (res.ok) {
            pageHtml = await res.text()
            console.log(`✅ Rota ${route} renderizada com sucesso (${pageHtml.length} bytes)!`)
            break
          }
        } catch {}
      }
      if (!pageHtml) {
        throw new Error(`Tempo limite esgotado ao aguardar renderização da rota ${route}`)
      }
      results[route] = pageHtml
    }
  } finally {
    if (devProc) {
      console.log('🛑 Encerrando servidor temporário de renderização...')
      devProc.kill('SIGTERM')
    }
  }

  return results
}

// Execução do fluxo de exportação
const pagesHtml = await fetchPortfolioPages()
const ptHtml = pagesHtml['/arthur']
const enHtml = pagesHtml['/en/arthur']

// Limpar e recriar o diretório de destino gh-pages-dist
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true })
}
fs.mkdirSync(DIST_DIR, { recursive: true })

// Função de adaptação e sanitização de HTML
function adaptHtmlContent(html, isSubdir = false) {
  const prefix = isSubdir ? '../..' : '.'
  let adapted = html
    // Caminhos de Next.js static
    .replaceAll('href="/_next/', `href="${prefix}/_next/`)
    .replaceAll('src="/_next/', `src="${prefix}/_next/`)
    .replaceAll('url(/_next/', `url(${prefix}/_next/`)
    .replaceAll('url("/_next/', `url("${prefix}/_next/`)
    .replaceAll("url('/_next/", `url('${prefix}/_next/`)
    // Imagem e mídias de Arthur Saggioratto
    .replaceAll('http://localhost:3000/arthur-saggioratto.jpg', `${prefix}/arthur-saggioratto.jpg`)
    .replaceAll('src="/arthur-saggioratto.jpg"', `src="${prefix}/arthur-saggioratto.jpg"`)
    .replaceAll('href="/arthur-saggioratto.jpg"', `href="${prefix}/arthur-saggioratto.jpg"`)
    .replaceAll('src="/images/', `src="${prefix}/images/`)
    .replaceAll('href="/images/', `href="${prefix}/images/`)
    // Favicons
    .replaceAll('href="/favicon.ico"', `href="${prefix}/favicon.ico"`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}/favicon.svg"`)

  // Links internos de navegação entre idiomas e páginas (compatibilidade com subdiretório do GitHub Pages)
  adapted = adapted
    .replaceAll('href="/arthur"', 'href="/Squammata-PayloadCMS/"')
    .replaceAll('href="/portfolio"', 'href="/Squammata-PayloadCMS/portfolio.html"')
    .replaceAll('href="/en/arthur"', 'href="/Squammata-PayloadCMS/en/arthur/"')
    .replaceAll('href="./en/arthur/index.html"', 'href="/Squammata-PayloadCMS/en/arthur/"')
    .replaceAll('href="../../index.html"', 'href="/Squammata-PayloadCMS/"')

  // Remover preloads residuais da Squammata corporativa antiga se houver
  adapted = adapted.replace(
    /<link rel="preload" as="image" href="\/logo\/squammata\/[^"]+"\/>/g,
    '',
  )

  // Remover completamente qualquer componente residual de preloader ou contador com porcentagem
  adapted = adapted.replace(
    /<div class="mil-preloader-frame"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g,
    '',
  )

  // Substituir id e classes de presets dinâmicos legados
  adapted = adapted
    .replaceAll('id="squammata-theme-dynamic"', 'id="portfolio-theme-dynamic"')
    .replaceAll('Squammata Dynamic Theme Active Preset', 'Executive Dynamic Theme Active Preset')

  // Garantir preload de alta prioridade da imagem de autor no <head> para maximizar FCP e LCP
  if (!adapted.includes('rel="preload" as="image"') && !adapted.includes('arthur-saggioratto.jpg')) {
    adapted = adapted.replace(
      '<head>',
      `<head><link rel="preload" as="image" href="${prefix}/arthur-saggioratto.jpg" fetchpriority="high"/>`,
    )
  }

  return adapted
}

console.log('🔧 Adaptando caminhos de assets e links para versão PT e EN...')
const adaptedPtHtml = adaptHtmlContent(ptHtml, false)
const adaptedEnHtml = adaptHtmlContent(enHtml, true)
const adaptedEnHtmlFlat = adaptHtmlContent(enHtml, false) // Para en/arthur.html em profundidade de 1 pasta

// 4. Gravar os arquivos HTML principais da raiz (PT)
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), adaptedPtHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'arthur.html'), adaptedPtHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'portfolio.html'), adaptedPtHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, '404.html'), adaptedPtHtml, 'utf-8')
console.log('✅ Arquivos index.html, arthur.html, portfolio.html e 404.html gerados.')

// 4.1 Gravar os arquivos HTML da rota em inglês (EN)
const enDir = path.join(DIST_DIR, 'en')
const enArthurDir = path.join(enDir, 'arthur')
fs.mkdirSync(enArthurDir, { recursive: true })

fs.writeFileSync(path.join(enArthurDir, 'index.html'), adaptedEnHtml, 'utf-8')
fs.writeFileSync(path.join(enDir, 'arthur.html'), adaptedEnHtmlFlat.replaceAll('href="../../', 'href="../').replaceAll('src="../../', 'src="../'), 'utf-8')
fs.writeFileSync(path.join(enDir, 'portfolio.html'), adaptedEnHtmlFlat.replaceAll('href="../../', 'href="../').replaceAll('src="../../', 'src="../'), 'utf-8')
console.log('✅ Arquivos en/arthur/index.html, en/arthur.html e en/portfolio.html gerados.')

// 5. Criar arquivo .nojekyll (obrigatório para que o GitHub Pages sirva diretórios iniciados por _)
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf-8')
console.log('✅ Arquivo .nojekyll criado (desativa processamento Jekyll no GitHub Pages).')

// 6. Copiar arquivos públicos (fotos, favicons, robots.txt, sitemap.xml)
console.log('📁 Copiando assets estáticos da pasta public/ (incluindo robots.txt e sitemap.xml)...')
const publicDir = path.join(ROOT_DIR, 'public')
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, DIST_DIR, { recursive: true })
}

// 6.1 Garantir redundância de imagens em subpastas EN
fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(enDir, 'arthur-saggioratto.jpg'))
fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(enArthurDir, 'arthur-saggioratto.jpg'))

// 7. Copiar chunks, css e fontes compiladas de .next/static para dist/_next/static e subdiretórios
console.log('📁 Copiando assets compilados de .next/static para _next/static...')
const nextStaticDir = path.join(ROOT_DIR, '.next', 'static')
const targetStaticDir = path.join(DIST_DIR, '_next', 'static')

if (fs.existsSync(nextStaticDir)) {
  fs.mkdirSync(path.join(DIST_DIR, '_next'), { recursive: true })
  fs.cpSync(nextStaticDir, targetStaticDir, { recursive: true })
  console.log('✅ Chunks e assets estáticos copiados para gh-pages-dist/_next/static.')

  // Cópia redundante para rotas /en/ e /en/arthur/
  fs.mkdirSync(path.join(enDir, '_next'), { recursive: true })
  fs.cpSync(nextStaticDir, path.join(enDir, '_next', 'static'), { recursive: true })
  fs.mkdirSync(path.join(enArthurDir, '_next'), { recursive: true })
  fs.cpSync(nextStaticDir, path.join(enArthurDir, '_next', 'static'), { recursive: true })

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
    if (content.includes('"/en/arthur"')) {
      content = content.replaceAll('"/en/arthur"', '"/Squammata-PayloadCMS/en/arthur/"')
      changed = true
    }
    if (content.includes("'/en/arthur'")) {
      content = content.replaceAll("'/en/arthur'", "'/Squammata-PayloadCMS/en/arthur/'")
      changed = true
    }
    if (content.includes('"/arthur"')) {
      content = content.replaceAll('"/arthur"', '"/Squammata-PayloadCMS/"')
      changed = true
    }
    if (content.includes("'/arthur'")) {
      content = content.replaceAll("'/arthur'", "'/Squammata-PayloadCMS/'")
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
    execSync('git commit -m "deploy: publicar portfolio executivo de Arthur Saggioratto (PT + EN) no GitHub Pages"', {
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
