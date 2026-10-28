'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface ScreenshotItem {
  id: string
  step: string
  title: string
  description: string
  url: string
  tags: string[]
  details: string[]
}

const screenshotsList: ScreenshotItem[] = [
  {
    id: '01_admin_login',
    step: 'Passo 1',
    title: 'Autenticação e Acesso ao Painel (/admin/login)',
    description: 'Interface de login corporativo com validação JWT, segurança CSRF e alternância automática entre temas claro e escuro.',
    url: '/docs/screenshots/01_admin_login.png',
    tags: ['Segurança', 'JWT', 'Tema Escuro/Claro', 'WCAG AAA'],
    details: [
      'Acesse pelo navegador em http://localhost:3000/admin (ou IP da rede corporativa).',
      'Credenciais padrão: contato@squammata.com.br / squammata-admin-2026.',
      'Suporte a recuperação de senha e sessão persistente de longa duração.',
    ],
  },
  {
    id: '02_admin_dashboard',
    step: 'Passo 2',
    title: 'Visão Geral do Dashboard e Coleções (/admin)',
    description: 'Painel de controle unificado organizado em Coleções de Dados e Configurações Globais.',
    url: '/docs/screenshots/02_admin_dashboard.png',
    tags: ['Dashboard', 'Coleções', 'Globais', 'PostgreSQL'],
    details: [
      'Coleções: Pages, Reusable Contents, Artigos/Publicações, Estudos de Caso e Media.',
      'Globais: Header (cabeçalho/menu), Footer (rodapé) e Configurações de SEO.',
      'Acesso direto aos contadores de documentos e histórico recente.',
    ],
  },
  {
    id: '03_admin_pages_list',
    step: 'Passo 3.1',
    title: 'Lista de Páginas Publicadas (Pages)',
    description: 'Visão tabular de todas as rotas ativas do site, com status de publicação e datas de alteração.',
    url: '/docs/screenshots/03_admin_pages_list.png',
    tags: ['Pages', 'Rotas', 'Publicação', 'Next.js 15'],
    details: [
      'Exibe Home, Home 2, Prices, Contact, FAQ, etc.',
      'Permite criar novas páginas ou duplicar layouts existentes.',
      'Busca rápida e filtragem por título ou slug da rota.',
    ],
  },
  {
    id: '04_admin_page_layout_blocks',
    step: 'Passo 3.2',
    title: 'Editor de Páginas e Layout de Blocos Modulares',
    description: 'Composição de páginas por blocos ordenáveis via drag-and-drop e injeção de Reusable Content.',
    url: '/docs/screenshots/04_admin_page_layout_blocks.png',
    tags: ['Blocos', 'Layout', 'Drag-and-Drop', 'Modular'],
    details: [
      'Adicione novos blocos pelo botão "Add Layout".',
      'Arraste a alça lateral para reordenar seções na página.',
      'Vincule blocos de Reusable Content para manter consistência global.',
    ],
  },
  {
    id: '05_admin_reusable_content_list',
    step: 'Passo 4',
    title: 'Biblioteca de Conteúdo Reutilizável (Reusable Content)',
    description: 'Centralização de blocos mestres: edite uma única vez e propague para todas as páginas vinculadas.',
    url: '/docs/screenshots/05_admin_reusable_content_list.png',
    tags: ['Reusable Content', 'Módulos Globais', 'Single Source of Truth'],
    details: [
      'Contém Hero One, Features, Prices, Call to Action 2, etc.',
      'Evita duplicação de dados e inconsistências visuais.',
      'Cada bloco mantém histórico próprio de revisões.',
    ],
  },
  {
    id: '06_admin_hero_customization',
    step: 'Passo 5.1',
    title: 'Customização de Botões no Bloco Hero One',
    description: 'Controles completos de 8 cores, 6 raios de curvatura, chanfro diagonal .mil-angle e setas decorativas.',
    url: '/docs/screenshots/06_admin_hero_customization.png',
    tags: ['Hero One', 'Botões', 'mil-angle', 'Design Tokens'],
    details: [
      'Seletor de Cores: Terracota, Café, Floresta, Âmbar, Rio, Argila, Niemeyer, Outline.',
      'Raio de Borda: 8px (Padrão), 4px (Sharp), 8px (Small), 16px (Medium), 24px (Large), 100px (Pill).',
      'Checkbox "mil-angle" para aplicar o triângulo chanfrado característico da Squammata.',
      'Toggle para exibir/ocultar a seta interna angular rotacionada.',
    ],
  },
  {
    id: '07_admin_features_customization',
    step: 'Passo 5.2',
    title: 'Customização de Diferenciais e Cards (Features)',
    description: 'Controles independentes para os botões do cabeçalho e superfícies individuais de cada card.',
    url: '/docs/screenshots/07_admin_features_customization.png',
    tags: ['Features', 'Cards', 'Diferenciais', 'Superfície'],
    details: [
      'Botões de Ação 1 e 2 com seleção completa de cores e cantos.',
      'Cada card da lista possui seletor próprio de cor (Mineral, Argila, Terracota, Floresta, Café, Outline).',
      'Checkbox individual de canto chanfrado .mil-angle para cada diferencial.',
      'Upload de ícone vetorial SVG ou imagem de apoio para cada card.',
    ],
  },
  {
    id: '08_admin_prices_customization',
    step: 'Passo 5.3',
    title: 'Tabela de Investimentos e Planos (PricesBlock)',
    description: 'Configuração de preços, itens inclusos/desabilitados, superfícies de cards e CTAs de contratação.',
    url: '/docs/screenshots/08_admin_prices_customization.png',
    tags: ['Prices', 'Investimentos', 'DRE', 'Planos'],
    details: [
      'Edição de Título, Preço, Moeda e Sufixo temporal (ex: / mês, / auditoria).',
      'Array de recursos com flag "Disabled" para riscar itens não inclusos (.mil-empty).',
      'Customização do botão de compra individual por plano.',
      'Estilo de superfície e chanfro .mil-angle configuráveis por cartão.',
    ],
  },
  {
    id: '09_admin_cta_customization',
    step: 'Passo 5.4',
    title: 'Blocos de Chamada para Ação (Call to Action)',
    description: 'Textos com ênfase visual de opacidade e arranjos bicolores contrastantes de botões.',
    url: '/docs/screenshots/09_admin_cta_customization.png',
    tags: ['Call to Action', 'Conversão', 'Tipografia', 'Contraste'],
    details: [
      'Suporte a spans com .mil-opacity-text para criar ritmo visual no título.',
      'Combinação recomendada: Botão 1 em Floresta Biofilia + Botão 2 em Café Basalto.',
      'Opção de fundo com textura biomimética ou superfície sólida.',
    ],
  },
  {
    id: '10_admin_global_header',
    step: 'Passo 6.1',
    title: 'Configuração Global do Cabeçalho (Header)',
    description: 'Links do menu de navegação, botão de ação superior e logotipo Squammata.',
    url: '/docs/screenshots/10_admin_global_header.png',
    tags: ['Header', 'Navegação', 'Menu', 'Global'],
    details: [
      'Adicione, reordene e remova itens da barra de navegação.',
      'Edite o botão de contato rápido com suporte a âncoras e URLs.',
      'Menu mobile responsivo e suporte ao modo translúcido com blur.',
    ],
  },
  {
    id: '11_admin_global_footer',
    step: 'Passo 6.2',
    title: 'Configuração Global do Rodapé (Footer)',
    description: 'Colunas de governança, termos legais, dados do polo de Campinas/SP e mídias sociais.',
    url: '/docs/screenshots/11_admin_global_footer.png',
    tags: ['Footer', 'Rodapé', 'Governança', 'Compliance'],
    details: [
      'Gestão de colunas de navegação institucional e serviços.',
      'Informações de contato: Campinas/SP, e-mail e canais diretos.',
      'Direitos reservados e links de conformidade com LGPD.',
    ],
  },
  {
    id: '12_frontend_hero_rendered',
    step: 'Passo 7.1',
    title: 'Hero Renderizado no Frontend com Botões Personalizados',
    description: 'Visualização real dos botões Floresta e Basalto com chanfro .mil-angle e seta interna.',
    url: '/docs/screenshots/12_frontend_hero_rendered.png',
    tags: ['Frontend', 'Hero', 'Renderização', 'Next.js'],
    details: [
      'Renderização SSR ultrarrápida compilada pelo Next.js 15.',
      'Física de hover com elevação orgânica ($ease-landing).',
      'Contraste de texto validado com WCAG AAA.',
    ],
  },
  {
    id: '13_frontend_features_rendered',
    step: 'Passo 7.2',
    title: 'Grid de Cards Features com Superfícies Personalizadas',
    description: 'Diferenciais renderizados com alinhamento refinado, ícones biofílicos e botões no cabeçalho.',
    url: '/docs/screenshots/13_frontend_features_rendered.png',
    tags: ['Frontend', 'Features', 'Grid', 'Cards'],
    details: [
      'Espaçamento harmonioso e grids fluidos.',
      'Cards interativos com feedback tátil de foco e hover.',
      'Suporte a múltiplas colunas responsivas em mobile, tablet e desktop.',
    ],
  },
  {
    id: '14_frontend_prices_rendered',
    step: 'Passo 7.3',
    title: 'Tabela de Investimentos Renderizada no Frontend',
    description: 'Cards de planos com chanfro superior direito .mil-angle, destaques de valor e CTAs contrastantes.',
    url: '/docs/screenshots/14_frontend_prices_rendered.png',
    tags: ['Frontend', 'Prices', 'Investimentos', 'DRE'],
    details: [
      'Destaque do plano principal com borda acentuada.',
      'Itens desabilitados exibidos em cinza neutro com texto riscado (.mil-empty).',
      'Design claro e objetivo para rápida tomada de decisão pelo cliente.',
    ],
  },
  {
    id: '15_api_design_tokens',
    step: 'Passo 8',
    title: 'Endpoint JSON de Design Tokens para IA (/api/design-tokens)',
    description: 'Vocabulário estruturado consumível por agentes de IA para geração e edição automatizada de blocos.',
    url: '/docs/screenshots/15_api_design_tokens.png',
    tags: ['API', 'JSON', 'IA Integrada', 'Design Tokens'],
    details: [
      'Endpoint GET público em http://localhost:3000/api/design-tokens.',
      'Retorna tokens de cores, raios, opções de chanfro e instruções semânticas.',
      'Compatível com chamadas REST, MCP tools e prompts de engenharia reversa.',
    ],
  },
]

export const AdminManualSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [modalImage, setModalImage] = useState<ScreenshotItem | null>(null)

  // Estados do Simulador Interativo de Botão / Card
  const [simBtnText, setSimBtnText] = useState('Solicitar Diagnóstico DRE')
  const [simBtnColor, setSimBtnColor] = useState('terracota')
  const [simBtnRadius, setSimBtnRadius] = useState('default')
  const [simBtnAngle, setSimBtnAngle] = useState(true)
  const [simBtnIcon, setSimBtnIcon] = useState(true)

  const [simCardStyle, setSimCardStyle] = useState('default')
  const [simCardRadius, setSimCardRadius] = useState('md')
  const [simCardAngle, setSimCardAngle] = useState(true)

  // Estado da API Live Explorer
  const [apiResponse, setApiResponse] = useState<string | null>(null)
  const [apiLoading, setApiLoading] = useState(false)
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopySuccess(label)
      setTimeout(() => setCopySuccess(null), 2500)
    }
  }

  const testLiveApi = async () => {
    setApiLoading(true)
    try {
      const res = await fetch('/api/design-tokens')
      const data = await res.json()
      setApiResponse(JSON.stringify(data, null, 2))
    } catch {
      setApiResponse(
        JSON.stringify(
          {
            system: 'Squammata Biofilia Paulista Design Tokens',
            version: '1.0.0',
            status: 'online',
            sample: 'Execute GET /api/design-tokens diretamente.',
          },
          null,
          2,
        ),
      )
    } finally {
      setApiLoading(false)
    }
  }

  // Resolução dinâmica de classes do botão simulado
  const getSimulatedBtnClass = () => {
    const classes = ['mil-btn']
    if (simBtnColor === 'terracota') classes.push('mil-btn-terracota')
    else if (simBtnColor === 'cafe') classes.push('mil-btn-cafe')
    else if (simBtnColor === 'floresta') classes.push('mil-btn-floresta')
    else if (simBtnColor === 'ambar') classes.push('mil-btn-ambar')
    else if (simBtnColor === 'rio') classes.push('mil-btn-rio')
    else if (simBtnColor === 'argila') classes.push('mil-btn-argila')
    else if (simBtnColor === 'niemeyer') classes.push('mil-btn-niemeyer')
    else if (simBtnColor === 'outline') classes.push('mil-btn-outline')

    if (simBtnRadius === 'sharp') classes.push('mil-radius-sharp')
    else if (simBtnRadius === 'sm') classes.push('mil-radius-sm')
    else if (simBtnRadius === 'md') classes.push('mil-radius-md')
    else if (simBtnRadius === 'lg') classes.push('mil-radius-lg')
    else if (simBtnRadius === 'pill') classes.push('mil-radius-pill')

    if (simBtnAngle) classes.push('mil-angle')

    return classes.join(' ')
  }

  // Resolução dinâmica de classes do card simulado
  const getSimulatedCardClass = () => {
    const classes = ['mil-card']
    if (simCardStyle === 'argila') classes.push('mil-card-argila')
    else if (simCardStyle === 'terracota') classes.push('mil-card-terracota')
    else if (simCardStyle === 'floresta') classes.push('mil-card-floresta')
    else if (simCardStyle === 'cafe') classes.push('mil-card-cafe')
    else if (simCardStyle === 'dark') classes.push('mil-card-dark')
    else if (simCardStyle === 'outline') classes.push('mil-card-outline')

    if (simCardRadius === 'sharp') classes.push('mil-radius-sharp')
    else if (simCardRadius === 'sm') classes.push('mil-radius-sm')
    else if (simCardRadius === 'md') classes.push('mil-radius-md')
    else if (simCardRadius === 'lg') classes.push('mil-radius-lg')
    else if (simCardRadius === 'pill') classes.push('mil-radius-pill')

    if (simCardAngle) classes.push('mil-angle')

    return classes.join(' ')
  }

  const currentItem = screenshotsList[activeStep]

  return (
    <section id="manual-admin" className="mil-section mil-p-10-8" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="row mil-aie mil-mb-8">
          <div className="col-12 col-lg-8">
            <div className="mil-badge mil-mb-4" style={{ backgroundColor: 'var(--bio-forest)', color: '#FAF9F6' }}>
              GUIA OFICIAL DO OPERADOR & CMS
            </div>
            <h2 className="mil-c-m-1" style={{ fontSize: '3.2rem', lineHeight: '1.2' }}>
              Manual do Painel Admin & <br />
              <span className="mil-opacity-text">Personalização Visual dos Elementos</span>
            </h2>
            <p className="mil-c-m-2 mil-t-16 mil-mt-4" style={{ maxWidth: '720px' }}>
              Aprenda a operar o painel administrativo da <strong>Squammata</strong> (Next.js 15 + Payload CMS 3.0 + PostgreSQL). 
              Personalize cores de botões, cantos orgânicos, triângulos decorativos (<code>.mil-angle</code>), cards e blocos modulares, 
              ou explore os endpoints de tokens integrados para agentes de Inteligência Artificial.
            </p>
          </div>
          <div className="col-12 col-lg-4 mil-md-mt-6">
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--marrom-borda-suave)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-soft)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <i className="fas fa-shield-alt mil-c-a-1" style={{ fontSize: '1.8rem' }}></i>
                <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)' }}>Autonomia Total</strong>
              </div>
              <p className="mil-t-14 mil-c-m-2" style={{ margin: 0, lineHeight: '1.5' }}>
                15 Telas documentadas | 8 Passos práticos | 8 Cores e 6 Raios de curvatura | Suporte nativo à IA
              </p>
            </div>
          </div>
        </div>

        {/* Barra de Passos Interativos (Stepper Horizontal) */}
        <div className="mil-mb-6" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.8rem', minWidth: '920px' }}>
            {screenshotsList.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 1.6rem',
                  borderRadius: '100px',
                  border: activeStep === idx ? '2px solid var(--acento-terracota)' : '1px solid var(--marrom-borda-suave)',
                  background: activeStep === idx ? 'var(--acento-terracota)' : '#FFFFFF',
                  color: activeStep === idx ? '#FAF9F6' : 'var(--carvao-tecnico)',
                  fontWeight: activeStep === idx ? 700 : 500,
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: activeStep === idx ? '0 4px 14px rgba(193, 92, 61, 0.35)' : 'none',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: activeStep === idx ? '#FFFFFF' : 'rgba(0,0,0,0.08)',
                    color: activeStep === idx ? 'var(--acento-terracota)' : 'var(--carvao-tecnico)',
                    fontSize: '1.1rem',
                    lineHeight: '20px',
                    textAlign: 'center',
                    fontWeight: 700,
                  }}
                >
                  {idx + 1}
                </span>
                <span>{item.step}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visor Principal do Passo Ativo */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid var(--marrom-borda-suave)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '5rem',
          }}
        >
          <div className="row g-0">
            {/* Coluna da Imagem com Lightbox / Zoom */}
            <div className="col-12 col-xl-7" style={{ background: '#1A1A1A', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '440px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentItem.url}
                alt={currentItem.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '540px',
                  objectFit: 'contain',
                  cursor: 'zoom-in',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => setModalImage(currentItem)}
              />
              <button
                type="button"
                onClick={() => setModalImage(currentItem)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(26, 26, 26, 0.85)',
                  color: '#FAF9F6',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '0.6rem 1.2rem',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <i className="far fa-expand-arrows-alt"></i>
                <span>Ampliar Tela</span>
              </button>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(26, 26, 26, 0.85)',
                  color: '#FAF9F6',
                  padding: '0.4rem 1rem',
                  borderRadius: '6px',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                }}
              >
                {currentItem.id}.png
              </div>
            </div>

            {/* Coluna de Instruções e Detalhes */}
            <div className="col-12 col-xl-5" style={{ padding: '3.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span className="mil-badge mil-badge-terracotta">{currentItem.step}</span>
                {currentItem.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '1.1rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px',
                      background: 'rgba(36, 71, 53, 0.1)',
                      color: 'var(--bio-forest)',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.2rem', lineHeight: '1.3' }}>
                {currentItem.title}
              </h3>
              <p className="mil-c-m-2 mil-t-16 mil-mb-4" style={{ lineHeight: '1.6' }}>
                {currentItem.description}
              </p>

              <div style={{ borderTop: '1px solid var(--marrom-borda-suave)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)', display: 'block', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle mil-c-a-1" style={{ marginRight: '0.6rem' }}></i>
                  Instruções do Operador:
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.8rem', color: 'var(--carvao-tecnico)', fontSize: '1.4rem', lineHeight: '1.8' }}>
                  {currentItem.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ marginBottom: '0.6rem' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botões de Navegação Anterior / Próximo */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  className="mil-btn mil-sm mil-dark"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  style={{ opacity: activeStep === 0 ? 0.4 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
                >
                  <i className="far fa-arrow-left"></i>
                  <span>Passo Anterior</span>
                </button>
                <button
                  type="button"
                  className="mil-btn mil-sm mil-accent"
                  disabled={activeStep === screenshotsList.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(screenshotsList.length - 1, prev + 1))}
                  style={{
                    opacity: activeStep === screenshotsList.length - 1 ? 0.4 : 1,
                    cursor: activeStep === screenshotsList.length - 1 ? 'not-allowed' : 'pointer',
                  }}
                >
                  <span>Próximo Passo</span>
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO INTERATIVA 1: SIMULADOR DE ELEMENTOS DO PAINEL ADMIN */}
        <div className="mil-mb-8" id="simulador-admin">
          <div className="row mil-aie mil-mb-6">
            <div className="col-12 col-lg-8">
              <div className="mil-badge mil-mb-3" style={{ backgroundColor: 'var(--acento-terracota)', color: '#FAF9F6' }}>
                EXPERIÊNCIA LIVE & SANDBOX
              </div>
              <h3 className="mil-c-m-1" style={{ fontSize: '2.6rem' }}>
                Simulador Dinâmico de Customização do Painel
              </h3>
              <p className="mil-c-m-2 mil-t-15" style={{ margin: 0 }}>
                Teste em tempo real as mesmas propriedades configuráveis no Payload CMS. Veja como o Next.js resolve
                as classes canônicas, as tonalidades de cor e o chanfro triangular <code>.mil-angle</code>.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Coluna de Controles (Configurações do CMS) */}
            <div className="col-12 col-lg-6">
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '3rem',
                  borderRadius: '16px',
                  border: '1px solid var(--marrom-borda-suave)',
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                  <i className="fas fa-sliders-h mil-c-a-1" style={{ fontSize: '1.8rem' }}></i>
                  <h4 className="mil-c-m-1" style={{ margin: 0, fontSize: '1.8rem' }}>
                    Parâmetros do CMS
                  </h4>
                </div>

                {/* Texto do Botão */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--carvao-tecnico)' }}>
                    Texto do Botão (button_text):
                  </label>
                  <input
                    type="text"
                    value={simBtnText}
                    onChange={(e) => setSimBtnText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '1rem 1.4rem',
                      borderRadius: '8px',
                      border: '1px solid var(--marrom-borda-suave)',
                      fontSize: '1.4rem',
                      fontFamily: 'inherit',
                      background: '#FAF9F6',
                    }}
                  />
                </div>

                {/* Esquema de Cor do Botão */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--carvao-tecnico)' }}>
                    Esquema de Cor do Botão (button_color):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
                    {[
                      { id: 'terracota', label: 'Terracota', hex: '#C15C3D' },
                      { id: 'cafe', label: 'Café', hex: '#3A2313' },
                      { id: 'floresta', label: 'Floresta', hex: '#244735' },
                      { id: 'ambar', label: 'Âmbar', hex: '#B87514' },
                      { id: 'rio', label: 'Rio', hex: '#244558' },
                      { id: 'argila', label: 'Argila', hex: '#F3EFE6', darkText: true },
                      { id: 'niemeyer', label: 'Niemeyer', hex: '#FAF9F6', darkText: true },
                      { id: 'outline', label: 'Outline', hex: 'transparent', outline: true },
                    ].map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSimBtnColor(c.id)}
                        style={{
                          padding: '0.8rem 0.4rem',
                          borderRadius: '8px',
                          border: simBtnColor === c.id ? '2px solid var(--acento-terracota)' : '1px solid var(--marrom-borda-suave)',
                          background: c.hex,
                          color: c.darkText || c.outline ? '#1A1A1A' : '#FAF9F6',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textAlign: 'center',
                          boxShadow: simBtnColor === c.id ? '0 2px 8px rgba(0,0,0,0.18)' : 'none',
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Raio de Borda do Botão */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--carvao-tecnico)' }}>
                    Cantos / Raio de Borda (button_radius):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                    {[
                      { id: 'default', label: 'Padrão (8px)' },
                      { id: 'sharp', label: 'Sharp (4px)' },
                      { id: 'sm', label: 'Small (8px)' },
                      { id: 'md', label: 'Medium (16px)' },
                      { id: 'lg', label: 'Large (24px)' },
                      { id: 'pill', label: 'Pill (100px)' },
                    ].map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setSimBtnRadius(r.id)}
                        style={{
                          padding: '0.8rem 0.6rem',
                          borderRadius: '8px',
                          border: simBtnRadius === r.id ? '2px solid var(--acento-terracota)' : '1px solid var(--marrom-borda-suave)',
                          background: simBtnRadius === r.id ? 'var(--acento-terracota)' : '#FAF9F6',
                          color: simBtnRadius === r.id ? '#FAF9F6' : 'var(--carvao-tecnico)',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggles de Chanfro e Seta */}
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1.3rem', color: 'var(--carvao-tecnico)' }}>
                    <input
                      type="checkbox"
                      checked={simBtnAngle}
                      onChange={(e) => setSimBtnAngle(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--acento-terracota)' }}
                    />
                    <span>Ativar Canto Chanfrado (.mil-angle)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1.3rem', color: 'var(--carvao-tecnico)' }}>
                    <input
                      type="checkbox"
                      checked={simBtnIcon}
                      onChange={(e) => setSimBtnIcon(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--acento-terracota)' }}
                    />
                    <span>Exibir Ícone de Seta</span>
                  </label>
                </div>

                {/* Configurações do Card de Fundo */}
                <div style={{ borderTop: '1px solid var(--marrom-borda-suave)', paddingTop: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--carvao-tecnico)' }}>
                    Estilo de Fundo do Card (card_style):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
                    {[
                      { id: 'default', label: 'Mineral Limpo' },
                      { id: 'argila', label: 'Argila Suave' },
                      { id: 'terracota', label: 'Terracota Sutil' },
                      { id: 'floresta', label: 'Floresta Sutil' },
                      { id: 'cafe', label: 'Café Basalto' },
                      { id: 'dark', label: 'Carvão Escuro' },
                    ].map((cs) => (
                      <button
                        key={cs.id}
                        type="button"
                        onClick={() => setSimCardStyle(cs.id)}
                        style={{
                          padding: '0.6rem',
                          borderRadius: '6px',
                          border: simCardStyle === cs.id ? '2px solid var(--acento-terracota)' : '1px solid var(--marrom-borda-suave)',
                          background: simCardStyle === cs.id ? 'var(--acento-terracota)' : '#FAF9F6',
                          color: simCardStyle === cs.id ? '#FAF9F6' : 'var(--carvao-tecnico)',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {cs.label}
                      </button>
                    ))}
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1.3rem', color: 'var(--carvao-tecnico)' }}>
                    <input
                      type="checkbox"
                      checked={simCardAngle}
                      onChange={(e) => setSimCardAngle(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--acento-terracota)' }}
                    />
                    <span>Chanfro Decorativo no Card (.mil-angle)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Coluna da Prévia Live & Código Gerado */}
            <div className="col-12 col-lg-6">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  height: '100%',
                }}
              >
                {/* Visualização Renderizada */}
                <div
                  className={getSimulatedCardClass()}
                  style={{
                    padding: '4rem 3rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div className="mil-badge mil-mb-3">PRÉVIA RENDERIZADA EM TEMPO REAL</div>
                  <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.4rem' }}>
                    Diagnóstico Estrutural de DRE
                  </h4>
                  <p className="mil-c-m-2 mil-t-15 mil-mb-4" style={{ maxWidth: '480px' }}>
                    Recuperação de vazamentos fiscais e otimização de margem de contribuição com arquitetura moderna.
                  </p>
                  <div>
                    <button type="button" className={getSimulatedBtnClass()}>
                      <span>{simBtnText || 'Clique Aqui'}</span>
                      {simBtnIcon && <i className="far fa-arrow-right"></i>}
                    </button>
                  </div>
                </div>

                {/* Código de Integração Gerado */}
                <div
                  style={{
                    background: '#1A1A1A',
                    color: '#FAF9F6',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.2rem',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <span style={{ color: 'var(--acento-terracota)', fontWeight: 700 }}>
                      <i className="fas fa-code" style={{ marginRight: '0.6rem' }}></i>
                      Payload CMS Payload & Classes Geradas
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          JSON.stringify(
                            {
                              button_text: simBtnText,
                              button_color: simBtnColor,
                              button_radius: simBtnRadius,
                              button_has_triangle: simBtnAngle,
                              button_show_icon: simBtnIcon,
                              card_style: simCardStyle,
                              card_radius: simCardRadius,
                              card_has_triangle: simCardAngle,
                              computed_button_class: getSimulatedBtnClass(),
                              computed_card_class: getSimulatedCardClass(),
                            },
                            null,
                            2,
                          ),
                          'simulator-code',
                        )
                      }
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#FAF9F6',
                        padding: '0.4rem 1rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                      }}
                    >
                      {copySuccess === 'simulator-code' ? '✓ Copiado!' : 'Copiar JSON'}
                    </button>
                  </div>
                  <pre style={{ margin: 0, overflowX: 'auto', lineHeight: '1.5' }}>
{`// Payload CMS Field Values:
{
  "button_text": "${simBtnText}",
  "button_color": "${simBtnColor}",
  "button_radius": "${simBtnRadius}",
  "button_has_triangle": ${simBtnAngle},
  "button_show_icon": ${simBtnIcon},
  "card_style": "${simCardStyle}",
  "card_has_triangle": ${simCardAngle}
}

// Resulting CSS Classes:
Button: "${getSimulatedBtnClass()}"
Card:   "${getSimulatedCardClass()}"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO INTERATIVA 2: EXPLORER DA API DE DESIGN TOKENS PARA IA */}
        <div className="mil-mb-8" id="api-tokens">
          <div className="row mil-aie mil-mb-6">
            <div className="col-12 col-lg-8">
              <div className="mil-badge mil-mb-3" style={{ backgroundColor: 'var(--bio-river)', color: '#FAF9F6' }}>
                ARQUITETURA HEADLESS & IA INTEGRADA
              </div>
              <h3 className="mil-c-m-1" style={{ fontSize: '2.6rem' }}>
                API de Design Tokens (/api/design-tokens)
              </h3>
              <p className="mil-c-m-2 mil-t-15" style={{ margin: 0 }}>
                Disponibilizamos um endpoint público em JSON que expõe a gramática completa de design da Squammata. 
                Agentes autônomos, assistentes de engenharia e integrações de CMS utilizam este vocabulário para criar, 
                modificar ou validar blocos sem risco de quebra de layout ou violação de marca.
              </p>
            </div>
            <div className="col-12 col-lg-4 mil-md-mt-4" style={{ textAlign: 'right' }}>
              <button
                type="button"
                onClick={testLiveApi}
                className="mil-btn mil-sm mil-accent"
                disabled={apiLoading}
              >
                <span>{apiLoading ? 'Carregando Tokens...' : 'Testar Endpoint Live'}</span>
                <i className="far fa-bolt"></i>
              </button>
            </div>
          </div>

          <div className="row g-4">
            {/* Explicação da API e Exemplo cURL */}
            <div className="col-12 col-lg-5">
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '3rem',
                  borderRadius: '16px',
                  border: '1px solid var(--marrom-borda-suave)',
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                }}
              >
                <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '1.8rem' }}>
                  Como Consumir
                </h4>
                <p className="mil-c-m-2 mil-t-14 mil-mb-3">
                  Requisição HTTP simples sem necessidade de autenticação (pública para leitura):
                </p>

                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                  <pre
                    style={{
                      background: '#1A1A1A',
                      color: '#FAF9F6',
                      padding: '1.6rem',
                      borderRadius: '10px',
                      fontSize: '1.2rem',
                      fontFamily: 'var(--font-mono)',
                      overflowX: 'auto',
                      margin: 0,
                    }}
                  >
{`curl -X GET http://localhost:3000/api/design-tokens`}
                  </pre>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('curl -X GET http://localhost:3000/api/design-tokens', 'curl')}
                    style={{
                      position: 'absolute',
                      top: '0.8rem',
                      right: '0.8rem',
                      background: 'rgba(255,255,255,0.15)',
                      color: '#FAF9F6',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '0.3rem 0.8rem',
                      fontSize: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    {copySuccess === 'curl' ? '✓' : 'Copiar'}
                  </button>
                </div>

                <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.6rem' }}>
                  Casos de Uso com IA:
                </h4>
                <ul style={{ paddingLeft: '1.8rem', color: 'var(--carvao-tecnico)', fontSize: '1.3rem', lineHeight: '1.7', margin: 0 }}>
                  <li><strong>Prompt Injection:</strong> Alimente a IA com os tokens para que ela sugira combinações harmônicas de blocos.</li>
                  <li><strong>Payload Autônomo:</strong> Scripts criam páginas usando as chaves canônicas (ex: <code>button_color: &quot;floresta&quot;</code>).</li>
                  <li><strong>Auditoria Automática:</strong> Validadores checam se novas páginas respeitam os contrastes WCAG AAA.</li>
                </ul>
              </div>
            </div>

            {/* Visor de Resposta JSON da API */}
            <div className="col-12 col-lg-7">
              <div
                style={{
                  background: '#1A1A1A',
                  color: '#FAF9F6',
                  padding: '3rem',
                  borderRadius: '16px',
                  fontFamily: 'var(--font-mono)',
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4CAF50' }}></span>
                    <strong style={{ fontSize: '1.3rem', color: '#FAF9F6' }}>Resposta JSON da API</strong>
                    <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>(Cache-Control: public, 1h)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        apiResponse ||
                          JSON.stringify(
                            {
                              system: 'Squammata Biofilia Paulista Design Tokens',
                              version: '1.0.0',
                              description: 'Tokens canônicos e vocabulário semântico...',
                            },
                            null,
                            2,
                          ),
                        'json-response',
                      )
                    }
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FAF9F6',
                      padding: '0.4rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                    }}
                  >
                    {copySuccess === 'json-response' ? '✓ Copiado!' : 'Copiar JSON'}
                  </button>
                </div>

                <pre
                  style={{
                    background: '#111111',
                    padding: '2rem',
                    borderRadius: '10px',
                    fontSize: '1.2rem',
                    lineHeight: '1.5',
                    overflowY: 'auto',
                    maxHeight: '360px',
                    margin: 0,
                    color: '#A8FFB2',
                  }}
                >
                  {apiResponse ||
`{
  "system": "Squammata Biofilia Paulista Design Tokens",
  "version": "1.0.0",
  "description": "Tokens canônicos e vocabulário semântico para manipulação de blocos, botões, cards e elementos visuais via IA e APIs integradas.",
  "tokens": {
    "buttons": {
      "colors": [
        { "label": "Terracota (Principal Squammata · #C15C3D)", "value": "terracota" },
        { "label": "Café / Mineral Basalto (#3A2313)", "value": "cafe" },
        { "label": "Floresta Biofilia (#244735)", "value": "floresta" },
        { "label": "Âmbar DRE (#B87514)", "value": "ambar" },
        { "label": "Rio Tietê (#244558)", "value": "rio" },
        { "label": "Argila Suave (#F3EFE6)", "value": "argila" },
        { "label": "Branco Mineral Niemeyer (#FAF9F6)", "value": "niemeyer" },
        { "label": "Contorno / Delicado Outline", "value": "outline" }
      ],
      "radii": [
        { "label": "Padrão do Sistema (8px)", "value": "default" },
        { "label": "Cantos Retos / Sharp (4px)", "value": "sharp" },
        { "label": "Suave / Small (8px)", "value": "sm" },
        { "label": "Orgânico / Medium (16px)", "value": "md" },
        { "label": "Amplo / Large (24px)", "value": "lg" },
        { "label": "Cápsula / Pill (100px)", "value": "pill" }
      ],
      "triangles": [
        { "label": "Nenhum (Cantos Normais)", "value": "none" },
        { "label": "Triângulo Canônico (.mil-angle)", "value": "triangle" }
      ]
    },
    "cards": {
      "styles": [
        { "label": "Padrão Mineral (#FFFFFF / #FAF9F6)", "value": "default" },
        { "label": "Argila Suave (#F3EFE6)", "value": "argila" },
        { "label": "Terracota Sutil", "value": "terracota" },
        { "label": "Floresta Biofilia Sutil", "value": "floresta" },
        { "label": "Café / Mineral Basalto Noturno (#3A2313)", "value": "cafe" },
        { "label": "Carvão Técnico Noturno (#1A1A1A)", "value": "dark" },
        { "label": "Contorno Delicado", "value": "outline" }
      ]
    }
  },
  "instructionsForAI": {
    "buttonCustomization": "Para configurar botões em qualquer bloco, use {prefix}_color, {prefix}_radius, {prefix}_has_triangle e {prefix}_show_icon.",
    "cardCustomization": "Para configurar cards ou itens em listas, use {prefix}_style, {prefix}_radius e {prefix}_triangle.",
    "triangleDecoration": "O valor 'triangle' ativa o chanfro diagonal canônico .mil-angle no canto superior direito do elemento."
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* TABELA DE REFERÊNCIA RÁPIDA: CHEAT SHEET DE CAMPOS E CLASSES */}
        <div className="mil-mb-8">
          <div className="row mil-aie mil-mb-4">
            <div className="col-12 col-lg-8">
              <div className="mil-badge mil-mb-3">TABELA CANÔNICA</div>
              <h3 className="mil-c-m-1" style={{ fontSize: '2.4rem' }}>
                Mapeamento Rápido de Campos CMS vs Classes CSS
              </h3>
            </div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--marrom-borda-suave)',
              overflowX: 'auto',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.3rem' }}>
              <thead>
                <tr style={{ background: '#FAF9F6', borderBottom: '2px solid var(--marrom-borda-suave)' }}>
                  <th style={{ padding: '1.6rem 2rem', fontWeight: 700, color: 'var(--carvao-tecnico)' }}>Elemento</th>
                  <th style={{ padding: '1.6rem 2rem', fontWeight: 700, color: 'var(--carvao-tecnico)' }}>Campo Payload CMS</th>
                  <th style={{ padding: '1.6rem 2rem', fontWeight: 700, color: 'var(--carvao-tecnico)' }}>Valores Possíveis</th>
                  <th style={{ padding: '1.6rem 2rem', fontWeight: 700, color: 'var(--carvao-tecnico)' }}>Classe CSS Gerada</th>
                  <th style={{ padding: '1.6rem 2rem', fontWeight: 700, color: 'var(--carvao-tecnico)' }}>Efeito Visual</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Cor do Botão</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>buttonX_color</td>
                  <td style={{ padding: '1.4rem 2rem' }}>terracota, cafe, floresta, ambar, rio, argila, niemeyer, outline</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>.mil-btn-{'{cor}'}</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Fundo temático e contraste automático do texto</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Cantos do Botão</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>buttonX_radius</td>
                  <td style={{ padding: '1.4rem 2rem' }}>default, sharp, sm, md, lg, pill</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>.mil-radius-{'{raio}'}</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Curvatura de 4px até 100px (pílula)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Chanfro Triangular</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>buttonX_has_triangle</td>
                  <td style={{ padding: '1.4rem 2rem' }}>true / false</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>.mil-angle</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Chanfro diagonal clássico no canto superior direito</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Seta Interna</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>buttonX_show_icon</td>
                  <td style={{ padding: '1.4rem 2rem' }}>true / false</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>&lt;i class=&quot;far fa-arrow-right&quot;&gt;</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Círculo com seta rotacionada e física de hover</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Superfície do Card</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>card_style / item_style</td>
                  <td style={{ padding: '1.4rem 2rem' }}>default, argila, terracota, floresta, cafe, dark, outline</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>.mil-card-{'{estilo}'}</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Fundo mineral e sombras calibradas</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.4rem 2rem', fontWeight: 600 }}>Chanfro no Card</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)' }}>card_has_triangle</td>
                  <td style={{ padding: '1.4rem 2rem' }}>true / false</td>
                  <td style={{ padding: '1.4rem 2rem', fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>.mil-angle</td>
                  <td style={{ padding: '1.4rem 2rem' }}>Corte angular no cartão de feature ou plano</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ TÉCNICO E RESOLUÇÃO DE PROBLEMAS */}
        <div style={{ background: '#FFFFFF', padding: '3.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', boxShadow: 'var(--shadow-soft)' }}>
          <div className="mil-badge mil-mb-3">SUPORTE E OPERAÇÃO</div>
          <h4 className="mil-c-m-1 mil-mb-4" style={{ fontSize: '2rem' }}>
            Perguntas Frequentes & Resolução de Problemas no Painel
          </h4>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)', display: 'block', marginBottom: '0.6rem' }}>
                1. O que fazer se o login não funcionar ou retornar ao login?
              </strong>
              <p className="mil-c-m-2 mil-t-14" style={{ margin: 0, lineHeight: '1.6' }}>
                Verifique se os cookies de sessão estão habilitados no navegador. Ao acessar via IP de rede local (ex: <code>192.168.15.10:3000</code>), 
                o cookie de autenticação JWT precisa de <code>SameSite: Lax</code> e transporte HTTP compatível. Você pode redefinir o usuário executando 
                o script administrativo no terminal.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)', display: 'block', marginBottom: '0.6rem' }}>
                2. Como garantir que uma alteração reflita em todas as páginas?
              </strong>
              <p className="mil-c-m-2 mil-t-14" style={{ margin: 0, lineHeight: '1.6' }}>
                Sempre edite o bloco na coleção <strong>Reusable Contents</strong>. Como as páginas utilizam blocos do tipo 
                <code>Reusable Content</code> apontando para o mesmo ID, salvar a alteração atualiza imediatamente todas as páginas vinculadas.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)', display: 'block', marginBottom: '0.6rem' }}>
                3. Por que os nomes de enums no banco não excedem 63 caracteres?
              </strong>
              <p className="mil-c-m-2 mil-t-14" style={{ margin: 0, lineHeight: '1.6' }}>
                O PostgreSQL impõe um limite estrito de 63 bytes para identificadores. Nossa arquitetura define <code>enumName</code> 
                curtos e canônicos (ex: <code>enum_btn_color</code> e <code>enum_btn_radius</code>) para garantir estabilidade e evitar erros de migração.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)', display: 'block', marginBottom: '0.6rem' }}>
                4. Como conectar um agente de IA para criar páginas completas?
              </strong>
              <p className="mil-c-m-2 mil-t-14" style={{ margin: 0, lineHeight: '1.6' }}>
                O agente deve primeiro fazer um GET em <code>/api/design-tokens</code> para carregar as opções disponíveis. Em seguida, 
                utiliza a API REST do Payload (<code>POST /api/pages</code> ou <code>PATCH /api/pages/:id</code>) passando os blocos e campos definidos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL / LIGHTBOX DE IMAGEM AMPLIADA */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(10, 10, 10, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setModalImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              background: '#1A1A1A',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra Superior do Modal */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 2.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FAF9F6',
              }}
            >
              <div>
                <span className="mil-badge mil-badge-terracotta" style={{ marginRight: '1rem' }}>
                  {modalImage.step}
                </span>
                <strong style={{ fontSize: '1.6rem' }}>{modalImage.title}</strong>
              </div>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FAF9F6',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '0.4rem 1rem',
                }}
              >
                ✕
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div style={{ padding: '2rem', textAlign: 'center', maxHeight: '78vh', overflowY: 'auto' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalImage.url}
                alt={modalImage.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                }}
              />
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: 0 }}>
                {modalImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
