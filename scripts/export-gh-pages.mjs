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
function adaptHtmlContent(html, isSubdir = false, lang = 'pt') {
  const prefix = isSubdir ? '../..' : '.'
  const canonicalUrl =
    lang === 'en'
      ? 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/'
      : 'https://arthur-nasa.github.io/Squammata-PayloadCMS/'

  let adapted = html

  // 1. Remover scripts de desenvolvimento e bundles pesados do Next.js
  adapted = adapted
    .replace(/<link\s+rel="preload"\s+as="script"[^>]*\/?>/gi, '')
    .replace(/<script\s+src="[^"]*\/_next\/static\/chunks\/[^"]*"[^>]*><\/script>/gi, '')
    .replace(/<script\s+src="[^"]*polyfills\.js"[^>]*><\/script>/gi, '')
    .replace(/<script>\(self\.__next_s=[\s\S]*?<\/script>/gi, '')
    .replace(/<script>\s*self\.__next_f[\s\S]*?<\/script>/gi, '')
    .replace(/<script>\s*\(self\.__next_f[\s\S]*?<\/script>/gi, '')
    .replace(/<div hidden="">[\s\S]*?<\/div>/gi, '')
    .replace(/<div class="admin-bar[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi, '')
    .replace(/<div class="mil-cursor-follower"><\/div>/gi, '')
    .replace(/<div class="mil-progress-track"><div class="mil-progress"><\/div><\/div>/gi, '')
    .replace(/<div class="mil-preloader-frame"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '')

  // 2. Otimizar CSS: remover layout.css (306KB de bundles e ícones não usados) e manter page.css
  adapted = adapted.replace(
    /<link\s+rel="stylesheet"\s+href="[^"]*layout\.css[^"]*"[^>]*\/?>/gi,
    '<style>html{scroll-behavior:smooth;}body{margin:0;padding:0;background-color:#0B0F0E;color:#F1F5F9;overflow-x:hidden;}</style>',
  )

  // 3. Garantir caminho correto de page.css
  adapted = adapted.replace(
    /href="[^"]*\/_next\/static\/css\/app\/\(frontend\)\/arthur\/page\.css[^"]*"/gi,
    `href="${prefix}/_next/static/css/app/(frontend)/arthur/page.css"`,
  )

  // 4. Adaptar caminhos estáticos
  adapted = adapted
    .replaceAll('href="/_next/', `href="${prefix}/_next/`)
    .replaceAll('src="/_next/', `src="${prefix}/_next/`)
    .replaceAll('url(/_next/', `url(${prefix}/_next/`)
    .replaceAll('url("/_next/', `url("${prefix}/_next/`)
    .replaceAll("url('/_next/", `url('${prefix}/_next/`)
    // Imagens
    .replaceAll('http://localhost:3000/arthur-saggioratto.jpg', `${prefix}/arthur-saggioratto.jpg`)
    .replaceAll('src="/arthur-saggioratto.jpg"', `src="${prefix}/arthur-saggioratto.jpg"`)
    .replaceAll('src="./arthur-saggioratto.jpg"', `src="${prefix}/arthur-saggioratto.jpg"`)
    .replaceAll('srcSet="/arthur-saggioratto.webp"', `srcSet="${prefix}/arthur-saggioratto.webp"`)
    .replaceAll('srcSet="./arthur-saggioratto.webp"', `srcSet="${prefix}/arthur-saggioratto.webp"`)
    .replaceAll('href="/arthur-saggioratto.jpg"', `href="${prefix}/arthur-saggioratto.jpg"`)
    .replaceAll('src="/images/', `src="${prefix}/images/`)
    .replaceAll('href="/images/', `href="${prefix}/images/`)
    // Favicons
    .replaceAll('href="/favicon.ico"', `href="${prefix}/favicon.ico"`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}/favicon.svg"`)
    // PDFs
    .replaceAll('href="/curriculo_ecommerce_arthursaggioratto.pdf"', `href="${prefix}/curriculo_ecommerce_arthursaggioratto.pdf"`)
    .replaceAll('href="./curriculo_ecommerce_arthursaggioratto.pdf"', `href="${prefix}/curriculo_ecommerce_arthursaggioratto.pdf"`)
    .replaceAll('href="/resume_ecommerce_arthursaggioratto.pdf"', `href="${prefix}/resume_ecommerce_arthursaggioratto.pdf"`)
    .replaceAll('href="./resume_ecommerce_arthursaggioratto.pdf"', `href="${prefix}/resume_ecommerce_arthursaggioratto.pdf"`)

  // 5. Links internos de navegação
  adapted = adapted
    .replaceAll('href="/arthur"', 'href="/Squammata-PayloadCMS/"')
    .replaceAll('href="/portfolio"', 'href="/Squammata-PayloadCMS/portfolio.html"')
    .replaceAll('href="/en/arthur"', 'href="/Squammata-PayloadCMS/en/arthur/"')
    .replaceAll('href="./en/arthur/index.html"', 'href="/Squammata-PayloadCMS/en/arthur/"')
    .replaceAll('href="../../index.html"', 'href="/Squammata-PayloadCMS/"')

  // 6. Preload de alta prioridade da imagem de autor no formato WebP e fontes
  const fontLinks = '<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />'
  const imagePreload = `<link rel="preload" as="image" href="${prefix}/arthur-saggioratto.webp" type="image/webp" fetchpriority="high" />`

  // Remover preloads e fontes antigos se existirem
  adapted = adapted.replace(/<link\s+rel="preload"\s+as="image"[^>]*\/?>/gi, '')
  adapted = adapted.replace(/<link\s+rel="preconnect"[^>]*\/?>/gi, '')
  adapted = adapted.replace(/<link\s+href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*\/?>/gi, '')

  adapted = adapted.replace(
    '<head>',
    `<head>${imagePreload}${fontLinks}`,
  )

  // 7. Canonical e hreflang
  adapted = adapted.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  )
  adapted = adapted.replace(
    /<link\s+rel="alternate"\s+hreflang="pt-BR"\s+href="[^"]*"\s*\/?>/gi,
    '<link rel="alternate" hreflang="pt-BR" href="https://arthur-nasa.github.io/Squammata-PayloadCMS/" />',
  )
  adapted = adapted.replace(
    /<link\s+rel="alternate"\s+hreflang="en-US"\s+href="[^"]*"\s*\/?>/gi,
    '<link rel="alternate" hreflang="en-US" href="https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/" />',
  )
  if (!adapted.includes('hreflang="x-default"')) {
    adapted = adapted.replace(
      '<link rel="alternate" hreflang="pt-BR"',
      '<link rel="alternate" hreflang="x-default" href="https://arthur-nasa.github.io/Squammata-PayloadCMS/" /><link rel="alternate" hreflang="pt-BR"',
    )
  }

  // 7.1 Atributo de idioma do documento HTML
  if (lang === 'en') {
    adapted = adapted.replace(/<html([^>]*)lang="pt-BR"/i, '<html$1lang="en-US"')
  }

  // 8. OpenGraph e Twitter tags
  adapted = adapted
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/gi, '<meta property="og:image" content="https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg" />')
    .replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/gi, '<meta name="twitter:image" content="https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg" />')

  // 9. Substituir id e classes de presets dinâmicos legados
  adapted = adapted
    .replaceAll('id="squammata-theme-dynamic"', 'id="portfolio-theme-dynamic"')
    .replaceAll('Squammata Dynamic Theme Active Preset', 'Executive Dynamic Theme Active Preset')

  // 10. Injetar script vanilla ultraleve para suporte a scroll suave e eventos
  const helperScript = `
<script>
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();
</script>
`
  adapted = adapted.replace('</body>', `${helperScript}</body>`)

  return adapted
}

console.log('🔧 Adaptando caminhos de assets e links para versão PT e EN...')
const adaptedPtHtml = adaptHtmlContent(ptHtml, false, 'pt')
const adaptedEnHtml = adaptHtmlContent(enHtml, true, 'en')
const adaptedEnHtmlFlat = adaptHtmlContent(enHtml, false, 'en') // Para en/arthur.html em profundidade de 1 pasta

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

// 5.1 Criar diretório ghSubdir antecipadamente para redundâncias
const ghSubdir = path.join(DIST_DIR, 'Squammata-PayloadCMS')
fs.mkdirSync(ghSubdir, { recursive: true })

// 6. Copiar arquivos públicos (fotos, favicons, robots.txt, sitemap.xml)
console.log('📁 Copiando assets estáticos da pasta public/ (incluindo robots.txt, sitemap.xml e currículos em PDF)...')
const publicDir = path.join(ROOT_DIR, 'public')
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, DIST_DIR, { recursive: true })
}

// 6.1 Garantir redundância de imagens e PDFs em subpastas EN e na subpasta Squammata-PayloadCMS
fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(enDir, 'arthur-saggioratto.jpg'))
fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(enArthurDir, 'arthur-saggioratto.jpg'))
fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(ghSubdir, 'arthur-saggioratto.jpg'))

if (fs.existsSync(path.join(publicDir, 'arthur-saggioratto.webp'))) {
  fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.webp'), path.join(enDir, 'arthur-saggioratto.webp'))
  fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.webp'), path.join(enArthurDir, 'arthur-saggioratto.webp'))
  fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.webp'), path.join(ghSubdir, 'arthur-saggioratto.webp'))
}

const pdfFiles = [
  'curriculo_ecommerce_arthursaggioratto.pdf',
  'resume_ecommerce_arthursaggioratto.pdf',
  'curriculo-arthur-saggioratto.pdf',
  'resume-arthur-saggioratto.pdf',
]

for (const pdf of pdfFiles) {
  const srcPdf = path.join(publicDir, pdf)
  if (fs.existsSync(srcPdf)) {
    fs.copyFileSync(srcPdf, path.join(DIST_DIR, pdf))
    fs.copyFileSync(srcPdf, path.join(enDir, pdf))
    fs.copyFileSync(srcPdf, path.join(enArthurDir, pdf))
    fs.copyFileSync(srcPdf, path.join(ghSubdir, pdf))
  }
}
console.log('✅ Currículos e Resumes em PDF copiados com redundância multidirecional.')

// 7. Copiar folhas de estilo compiladas de .next/static/css para _next/static/css
console.log('📁 Copiando folhas de estilo compiladas de .next/static/css para _next/static/css...')
const nextCssDir = path.join(ROOT_DIR, '.next', 'static', 'css')
const targetCssDir = path.join(DIST_DIR, '_next', 'static', 'css')

if (fs.existsSync(nextCssDir)) {
  fs.mkdirSync(targetCssDir, { recursive: true })
  fs.cpSync(nextCssDir, targetCssDir, { recursive: true })
  console.log('✅ Folhas de estilo CSS copiadas para gh-pages-dist/_next/static/css.')

  // Cópia redundante para rotas /en/ e /en/arthur/ e Squammata-PayloadCMS/
  fs.mkdirSync(path.join(enDir, '_next', 'static', 'css'), { recursive: true })
  fs.cpSync(nextCssDir, path.join(enDir, '_next', 'static', 'css'), { recursive: true })
  fs.mkdirSync(path.join(enArthurDir, '_next', 'static', 'css'), { recursive: true })
  fs.cpSync(nextCssDir, path.join(enArthurDir, '_next', 'static', 'css'), { recursive: true })
  fs.mkdirSync(path.join(ghSubdir, '_next', 'static', 'css'), { recursive: true })
  fs.cpSync(nextCssDir, path.join(ghSubdir, '_next', 'static', 'css'), { recursive: true })
} else {
  console.warn('⚠️ Diretório .next/static/css não encontrado.')
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
