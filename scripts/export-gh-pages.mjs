#!/usr/bin/env node

/**
 * Script de Exportação Estática e Publicação no GitHub Pages / Domínio Canônico
 * Exporta o portfólio executivo de Arthur Saggioratto (Hub-and-Spoke em PT e EN)
 * com as 4 sub-URLs dedicadas (/casos/* e /governanca/*), dados Schema.org e CNAME.
 */

import fs from 'node:fs'
import path from 'node:path'
import { spawn, execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.join(ROOT_DIR, 'gh-pages-dist')
const CANONICAL_DOMAIN = 'https://arthursaggioratto.com.br'

// Limpeza de variáveis de proxy para garantir requisições locais limpas
delete process.env.http_proxy
delete process.env.HTTP_PROXY
delete process.env.https_proxy
delete process.env.HTTPS_PROXY
delete process.env.all_proxy
delete process.env.ALL_PROXY
process.env.NO_PROXY = '*'

console.log('🚀 Iniciando processo de exportação estática Hub-and-Spoke para arthursaggioratto.com.br...')

// Limpeza prévia de caches do Next.js
const nextCacheDir = path.join(ROOT_DIR, '.next', 'cache')
if (fs.existsSync(nextCacheDir)) {
  try {
    fs.rmSync(nextCacheDir, { recursive: true, force: true })
    console.log('🧹 Cache interno do Next.js limpo (.next/cache).')
  } catch {}
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Função para obter o HTML renderizado das rotas do portfólio (Hub e Spokes)
 */
async function fetchPortfolioPages() {
  const routes = [
    '/arthur',
    '/en/arthur',
    '/casos/marketplace-specialty-coffee',
    '/casos/seo-catalogo-maquinas-cafe',
    '/casos/retencao-ux-saas-sheetgo',
    '/governanca/poas-dre-ecommerce',
  ]
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
      if (s.includes('Ready') || s.includes('GET /') || s.includes('compiled')) {
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

// Limpar e recriar o diretório de destino gh-pages-dist
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true })
}
fs.mkdirSync(DIST_DIR, { recursive: true })

/**
 * Função de adaptação e sanitização de HTML para publicação estática
 */
function adaptHtmlContent(html, depth = 0, lang = 'pt', routePath = '/') {
  const prefix = depth === 0 ? '.' : depth === 1 ? '..' : '../..'
  const canonicalUrl =
    lang === 'en'
      ? `${CANONICAL_DOMAIN}/en/arthur/`
      : routePath === '/' || routePath === '/arthur'
      ? `${CANONICAL_DOMAIN}/`
      : `${CANONICAL_DOMAIN}${routePath}/`

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

  // 2. Otimizar CSS: remover layout.css e manter base limpa
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

  // 5. Links internos de navegação (limpos para o domínio próprio)
  adapted = adapted
    .replaceAll('href="/arthur"', 'href="/"')
    .replaceAll('href="/portfolio"', 'href="/"')
    .replaceAll('href="/en/arthur"', 'href="/en/arthur/"')
    .replaceAll('https://arthur-nasa.github.io/Squammata-PayloadCMS/', `${CANONICAL_DOMAIN}/`)

  // 6. Preload de alta prioridade da imagem de autor no formato WebP e fontes
  const fontLinks =
    '<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />'
  const imagePreload = `<link rel="preload" as="image" href="${prefix}/arthur-saggioratto.webp" type="image/webp" fetchpriority="high" />`

  adapted = adapted.replace(/<link\s+rel="preload"\s+as="image"[^>]*\/?>/gi, '')
  adapted = adapted.replace(/<link\s+rel="preconnect"[^>]*\/?>/gi, '')
  adapted = adapted.replace(/<link\s+href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*\/?>/gi, '')

  adapted = adapted.replace('<head>', `<head>${imagePreload}${fontLinks}`)

  // 7. Canonical e hreflang
  adapted = adapted.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  )

  // 7.1 Atributo de idioma do documento HTML
  if (lang === 'en') {
    adapted = adapted.replace(/<html([^>]*)lang="pt-BR"/i, '<html$1lang="en-US"')
  }

  // 8. OpenGraph e Twitter tags
  adapted = adapted
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:image" content="${CANONICAL_DOMAIN}/arthur-saggioratto.jpg" />`)
    .replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/gi, `<meta name="twitter:image" content="${CANONICAL_DOMAIN}/arthur-saggioratto.jpg" />`)

  // 9. Script vanilla para suporte a scroll suave e eventos
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

console.log('🔧 Adaptando caminhos de assets e links para Hub e Spokes...')

// 1. Renderizar Hub (PT)
const ptHtml = pagesHtml['/arthur']
const adaptedPtHtml = adaptHtmlContent(ptHtml, 0, 'pt', '/')
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), adaptedPtHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'arthur.html'), adaptedPtHtml, 'utf-8')
fs.writeFileSync(path.join(DIST_DIR, 'portfolio.html'), adaptedPtHtml, 'utf-8')

// 404 inteligente com captura de URLs legadas do GitHub Pages
const legacyRedirectScript = `
<script>
(function() {
  var p = window.location.pathname;
  if (p.indexOf('/Squammata-PayloadCMS') !== -1) {
    var clean = p.replace('/Squammata-PayloadCMS', '') || '/';
    window.location.replace('${CANONICAL_DOMAIN}' + clean);
  }
})();
</script>
`
const adapted404Html = adaptedPtHtml.replace('<head>', `<head>${legacyRedirectScript}`)
fs.writeFileSync(path.join(DIST_DIR, '404.html'), adapted404Html, 'utf-8')
console.log('✅ Arquivos da raiz (index.html, arthur.html, portfolio.html, 404.html) gerados.')

// 2. Renderizar Hub (EN)
const enHtml = pagesHtml['/en/arthur']
const enDir = path.join(DIST_DIR, 'en')
const enArthurDir = path.join(enDir, 'arthur')
fs.mkdirSync(enArthurDir, { recursive: true })
const adaptedEnHtml = adaptHtmlContent(enHtml, 2, 'en', '/en/arthur')
const adaptedEnHtmlFlat = adaptHtmlContent(enHtml, 1, 'en', '/en/arthur')
fs.writeFileSync(path.join(enArthurDir, 'index.html'), adaptedEnHtml, 'utf-8')
fs.writeFileSync(path.join(enDir, 'arthur.html'), adaptedEnHtmlFlat, 'utf-8')
fs.writeFileSync(path.join(enDir, 'portfolio.html'), adaptedEnHtmlFlat, 'utf-8')
console.log('✅ Arquivos en/arthur gerados.')

// 3. Renderizar Spoke 01: /casos/marketplace-specialty-coffee/
const spoke01Html = pagesHtml['/casos/marketplace-specialty-coffee']
const spoke01Dir = path.join(DIST_DIR, 'casos', 'marketplace-specialty-coffee')
fs.mkdirSync(spoke01Dir, { recursive: true })
const adaptedSpoke01Html = adaptHtmlContent(spoke01Html, 2, 'pt', '/casos/marketplace-specialty-coffee')
fs.writeFileSync(path.join(spoke01Dir, 'index.html'), adaptedSpoke01Html, 'utf-8')
console.log('✅ Spoke 01 (/casos/marketplace-specialty-coffee/) gerado com sucesso.')

// 4. Renderizar Spoke 02: /casos/seo-catalogo-maquinas-cafe/
const spoke02Html = pagesHtml['/casos/seo-catalogo-maquinas-cafe']
const spoke02Dir = path.join(DIST_DIR, 'casos', 'seo-catalogo-maquinas-cafe')
fs.mkdirSync(spoke02Dir, { recursive: true })
const adaptedSpoke02Html = adaptHtmlContent(spoke02Html, 2, 'pt', '/casos/seo-catalogo-maquinas-cafe')
fs.writeFileSync(path.join(spoke02Dir, 'index.html'), adaptedSpoke02Html, 'utf-8')
console.log('✅ Spoke 02 (/casos/seo-catalogo-maquinas-cafe/) gerado com sucesso.')

// 5. Renderizar Spoke 03: /casos/retencao-ux-saas-sheetgo/
const spoke03Html = pagesHtml['/casos/retencao-ux-saas-sheetgo']
const spoke03Dir = path.join(DIST_DIR, 'casos', 'retencao-ux-saas-sheetgo')
fs.mkdirSync(spoke03Dir, { recursive: true })
const adaptedSpoke03Html = adaptHtmlContent(spoke03Html, 2, 'pt', '/casos/retencao-ux-saas-sheetgo')
fs.writeFileSync(path.join(spoke03Dir, 'index.html'), adaptedSpoke03Html, 'utf-8')
console.log('✅ Spoke 03 (/casos/retencao-ux-saas-sheetgo/) gerado com sucesso.')

// 6. Renderizar Spoke 04: /governanca/poas-dre-ecommerce/
const spoke04Html = pagesHtml['/governanca/poas-dre-ecommerce']
const spoke04Dir = path.join(DIST_DIR, 'governanca', 'poas-dre-ecommerce')
fs.mkdirSync(spoke04Dir, { recursive: true })
const adaptedSpoke04Html = adaptHtmlContent(spoke04Html, 2, 'pt', '/governanca/poas-dre-ecommerce')
fs.writeFileSync(path.join(spoke04Dir, 'index.html'), adaptedSpoke04Html, 'utf-8')
console.log('✅ Spoke 04 (/governanca/poas-dre-ecommerce/) gerado com sucesso.')

// 7. Criar CNAME para domínio próprio soberano
fs.writeFileSync(path.join(DIST_DIR, 'CNAME'), 'arthursaggioratto.com.br\n', 'utf-8')
console.log('✅ Arquivo CNAME configurado com arthursaggioratto.com.br.')

// 8. Criar .nojekyll
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf-8')
console.log('✅ Arquivo .nojekyll criado.')

// 9. Criar diretório legador ghSubdir para compatibilidade com redirecionador
const ghSubdir = path.join(DIST_DIR, 'Squammata-PayloadCMS')
fs.mkdirSync(ghSubdir, { recursive: true })
fs.writeFileSync(path.join(ghSubdir, 'index.html'), adapted404Html, 'utf-8')

// 10. Copiar assets estáticos da pasta public/
console.log('📁 Copiando assets estáticos da pasta public/...')
const publicDir = path.join(ROOT_DIR, 'public')
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, DIST_DIR, { recursive: true })
}

// 10.1 Garantir redundância de imagens e PDFs em subpastas dos Spokes e EN
const spokeDirs = [enDir, enArthurDir, ghSubdir, spoke01Dir, spoke02Dir, spoke03Dir, spoke04Dir]
for (const sDir of spokeDirs) {
  if (fs.existsSync(path.join(publicDir, 'arthur-saggioratto.jpg'))) {
    fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.jpg'), path.join(sDir, 'arthur-saggioratto.jpg'))
  }
  if (fs.existsSync(path.join(publicDir, 'arthur-saggioratto.webp'))) {
    fs.copyFileSync(path.join(publicDir, 'arthur-saggioratto.webp'), path.join(sDir, 'arthur-saggioratto.webp'))
  }
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
    for (const sDir of spokeDirs) {
      fs.copyFileSync(srcPdf, path.join(sDir, pdf))
    }
  }
}
console.log('✅ Imagens e PDFs copiados para a raiz e para todos os Spokes.')

// 11. Copiar folhas de estilo compiladas de .next/static/css para _next/static/css
console.log('📁 Copiando folhas de estilo compiladas de .next/static/css para _next/static/css...')
const nextCssDir = path.join(ROOT_DIR, '.next', 'static', 'css')
const targetCssDir = path.join(DIST_DIR, '_next', 'static', 'css')

if (fs.existsSync(nextCssDir)) {
  fs.mkdirSync(targetCssDir, { recursive: true })
  fs.cpSync(nextCssDir, targetCssDir, { recursive: true })

  for (const sDir of spokeDirs) {
    fs.mkdirSync(path.join(sDir, '_next', 'static', 'css'), { recursive: true })
    fs.cpSync(nextCssDir, path.join(sDir, '_next', 'static', 'css'), { recursive: true })
  }
  console.log('✅ Folhas de estilo CSS copiadas para a raiz e para todos os Spokes.')
} else {
  console.warn('⚠️ Diretório .next/static/css não encontrado.')
}

console.log('✨ Exportação estática completa (Hub + 4 Spokes) concluída com sucesso em gh-pages-dist!')

// 12. Se solicitado o deploy (--deploy), publicar na branch gh-pages
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
    execSync('git commit -m "deploy: ecossistema Hub-and-Spoke com 4 spokes e CNAME arthursaggioratto.com.br"', {
      cwd: DIST_DIR,
      stdio: 'ignore',
    })
    console.log(`📤 Enviando para ${gitRemoteUrl} (branch gh-pages)...`)
    execSync(`git push -f ${gitRemoteUrl} gh-pages`, { cwd: DIST_DIR, stdio: 'inherit' })
    console.log('\n🎉 Deploy no GitHub Pages concluído com sucesso!')
    console.log('🔗 Domínio Canônico: https://arthursaggioratto.com.br/')
  } catch (deployErr) {
    console.error('❌ Falha ao enviar para o GitHub Pages:', deployErr.message)
    process.exit(1)
  }
} else {
  console.log('\n💡 Para publicar diretamente no GitHub Pages, execute:')
  console.log('   pnpm pages:deploy')
}
