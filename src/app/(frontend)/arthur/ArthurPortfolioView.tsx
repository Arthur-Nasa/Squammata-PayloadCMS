'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './arthur.module.scss'

const DEFAULT_CURRICULO_PATH = './curriculo_ecommerce_arthursaggioratto.pdf'

const defaultIndicatorCards = [
  {
    value: '+66% MoM em GMV',
    label: 'CRESCIMENTO DE RECEITA • RUA DO CAFÉ',
    scope: 'Rua do Café (Fase de tração e consolidação do marketplace)',
    methodology: 'Média mensal ponderada de faturamento transacionado, impulsionada pela entrada de parceiros e campanhas calibradas pelo lucro real (POAS).',
    description:
      'Crescimento contínuo no faturamento transacionado da Rua do Café. O avanço veio da integração ágil de novos lojistas e de campanhas focadas nos produtos com melhor margem de contribuição.',
  },
  {
    value: '45% na Black Friday',
    label: 'VENDAS ORGÂNICAS • MÁQUINAS & CAFÉ',
    scope: 'Máquinas & Café (Pico de vendas em novembro)',
    methodology: 'Faturamento originado exclusivamente em busca orgânica no Google, sem custo com anúncios pagos no período mais concorrido do ano.',
    description:
      'Quase metade do faturamento no pico sazonal da Black Friday veio de busca orgânica gratuita no Google, protegendo o caixa da empresa contra leilões inflacionados de anúncios.',
  },
  {
    value: '10 Anos (+20% ao ano)',
    label: 'CRESCIMENTO CONTÍNUO • MÁQUINAS & CAFÉ',
    scope: 'Máquinas & Café (Série histórica de 2014 a 2024)',
    methodology: 'Crescimento contínuo de faturamento ano a ano na venda de máquinas, insumos e peças de reposição com fluxo de caixa saudável.',
    description:
      'Uma década com expansão média de 20% ao ano na Máquinas & Café (2014 a 2024), consolidando a operação como referência nacional no segmento sem depender de endividamento.',
  },
  {
    value: '+50% Tráfego / +30% Conversão',
    label: 'EFICIÊNCIA DE FUNIL • VISITAS & FECHAMENTO',
    scope: 'Otimização de páginas e jornada de compra',
    methodology: 'Atração de público qualificado combinada à eliminação de atritos no checkout e navegação móvel.',
    description:
      'Aumento expressivo no volume de visitantes qualificados com ganho simultâneo na taxa de pedidos concluídos, simplificando o processo de compra e reduzindo desistências.',
  },
  {
    value: '+20% no Tempo de Sessão',
    label: 'ENGAJAMENTO DE USUÁRIOS • SHEETGO',
    scope: 'Sheetgo (Operação global de software SaaS em inglês)',
    methodology: 'Aumento no tempo de navegação e uso das ferramentas medido no GA4 após testes comparativos e reformulação das páginas de entrada.',
    description:
      'Maior engajamento dos novos usuários corporativos na plataforma Sheetgo. Ajustes na jornada inicial e páginas mais rápidas facilitaram o entendimento do produto e reduziram abandonos.',
  },
  {
    value: '+100 Lojistas Conectados',
    label: 'PARCERIAS & MARKETPLACE • SHOPIFY & OMNIK',
    scope: 'Marketplace com Seller Center Omnik',
    methodology: 'Catálogo unificado com divisão automática de recebíveis (split payment) e estoque sincronizado aos ERPs dos lojistas.',
    description:
      'Estruturação técnica e comercial do ecossistema de marketplace em Shopify Plus com Seller Center Omnik, conectando mais de uma centena de parceiros com estoque e pedidos integrados ao ERP.',
  },
]

const defaultFaqItems = [
  {
    badge: 'ESTAGNAÇÃO & CRESCIMENTO',
    question: 'Como a consultoria ajuda uma loja virtual que parou de crescer a destravar as vendas?',
    answer:
      'Toda estagnação tem causas concretas que muitas vezes passam despercebidas na rotina: anúncios que ficaram caros demais e consomem o lucro, páginas lentas que fazem o cliente desistir no celular, produtos que esgotam no ERP mas continuam ativos na loja, ou simplesmente a perda de posições no Google para concorrentes. Meu trabalho começa com um raio-x detalhado nos números reais e na rotina da loja. Olhamos onde o dinheiro está vazando, corrigimos as falhas técnicas que atrapalham a compra e montamos um plano prático para voltar a crescer com margem saudável e previsibilidade.',
  },
  {
    badge: 'FINANÇAS & DRE',
    question: 'O que significa gerenciar o e-commerce com base na margem de contribuição (POAS)?',
    answer:
      'Muitas lojas comemoram relatórios bonitos de faturamento enquanto a conta bancária sofre no final do mês. Gerenciar pela margem de contribuição significa avaliar cada campanha e cada produto pelo lucro que ele de fato deixa no caixa, após abater o custo da mercadoria (CMV), taxas de gateway, frete e impostos da nota fiscal. O indicador POAS (Profit on Ad Spend) ajuda a responder uma pergunta simples: para cada real colocado em anúncios, quanto lucro líquido real sobrou para a empresa? Isso evita a armadilha de vender muito e não lucrar quase nada.',
  },
  {
    badge: 'BUSCA GENERATIVA & IA',
    question: 'Como preparar uma loja virtual para as novas buscas com inteligência artificial?',
    answer:
      'Ferramentas como ChatGPT, Perplexity e o Google com resumos de IA não leem páginas procurando apenas palavras soltas: elas buscam respostas confiáveis e entendem o contexto completo de uma marca e seus produtos. Estruturamos os dados do seu e-commerce com marcações técnicas universais (Schema.org em JSON-LD) e produzimos conteúdos aprofundados que demonstram autoridade e experiência real. Assim, quando um potencial comprador faz perguntas detalhadas em um assistente de IA, sua loja é citada como fonte e referência de compra.',
  },
  {
    badge: 'ATENDIMENTO REGIONAL',
    question: 'Arthur atende presencialmente na região de Campinas, Piracicaba e São Paulo?',
    answer:
      'Sim. Tenho base no polo regional entre Campinas, Piracicaba, Americana e Santa Bárbara d\'Oeste, com presença frequente na capital paulista. Realizo reuniões presenciais de alinhamento com diretorias, imersões de diagnóstico na sede da empresa e acompanhamento próximo dos times locais, combinando o contato presencial direto com uma rotina remota ágil e organizada.',
  },
  {
    badge: 'SOCIOLOGIA & NEGÓCIOS',
    question: 'Por que a formação em Sociologia na UNICAMP faz diferença na gestão de e-commerce?',
    answer:
      'Vender online não é apenas configurar ferramentas e apertar botões de anúncios: é entender pessoas, hábitos de consumo e relações de confiança. O olhar sociológico da UNICAMP (conclusão prevista para 2027) oferece uma base sólida para analisar o comportamento digital sem recorrer àquelas fórmulas apelativas que até geram vendas pontuais, mas desgastam a reputação da marca e afastam o cliente no dia seguinte. Essa visão se traduz em jornadas de compra mais transparentes, clientes mais fiéis e um custo de aquisição muito mais equilibrado ao longo do tempo.',
  },
]

export interface ArthurPortfolioViewProps {
  initialData?: any
}

export const ArthurPortfolioView: React.FC<ArthurPortfolioViewProps> = ({ initialData }) => {
  const [avatarSrc, setAvatarSrc] = useState('./arthur-saggioratto.jpg')
  const [enUrl, setEnUrl] = useState('/Squammata-PayloadCMS/en/arthur/')
  const [curriculoUrl, setCurriculoUrl] = useState('./curriculo_ecommerce_arthursaggioratto.pdf')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [newsletterErrorMsg, setNewsletterErrorMsg] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterStatus('error')
      setNewsletterErrorMsg('Por favor, informe um endereço de e-mail corporativo válido.')
      return
    }
    setNewsletterStatus('success')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isGhPages = window.location.pathname.includes('Squammata-PayloadCMS')
      if (isGhPages) {
        setAvatarSrc('/Squammata-PayloadCMS/arthur-saggioratto.jpg')
        setEnUrl('/Squammata-PayloadCMS/en/arthur/')
        setCurriculoUrl('/Squammata-PayloadCMS/curriculo_ecommerce_arthursaggioratto.pdf')
      } else {
        setAvatarSrc('./arthur-saggioratto.jpg')
        setEnUrl('/en/arthur')
        setCurriculoUrl('/curriculo_ecommerce_arthursaggioratto.pdf')
      }
    }
  }, [])

  const handleNavigateEn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      if (window.location.pathname.includes('Squammata-PayloadCMS')) {
        window.location.href = '/Squammata-PayloadCMS/en/arthur/'
      } else {
        window.location.href = '/en/arthur'
      }
    }
  }

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    if (!target.dataset.fallbackTried) {
      target.dataset.fallbackTried = 'true'
      if (typeof window !== 'undefined' && window.location.pathname.includes('Squammata-PayloadCMS')) {
        target.src = '/Squammata-PayloadCMS/arthur-saggioratto.jpg'
      } else {
        target.src = './arthur-saggioratto.jpg'
      }
    }
  }

  const heroEyebrow =
    initialData?.hero?.eyebrow || '15 ANOS DE EXPERIÊNCIA • CONSULTORIA PRÁTICA E GOVERNANÇA DE E-COMMERCE • SÃO PAULO E POLO DE CAMPINAS'
  const heroTitle =
    initialData?.hero?.title || 'Consultoria em E-commerce, Estruturação e Rentabilidade Real'
  const heroLead =
    initialData?.hero?.lead ||
    'Ajudo marcas e lojas virtuais a resolver os nós operacionais que travam as vendas e corroem o lucro. Em 15 anos de estrada no comércio eletrônico, aprendi que escala saudável não depende de promessas mágicas, mas de três fundamentos alinhados: loja rápida e confiável, tráfego que traz compradores reais e olhar atento na margem de cada produto no caixa.'
  const whatsappUrl = initialData?.hero?.whatsappNumber
    ? `https://wa.me/${initialData.hero.whatsappNumber}`
    : 'https://wa.me/5519993497819'
  const linkedinUrl = initialData?.hero?.linkedinUrl || 'https://linkedin.com/in/arthurnasa'
  const emailAddress = initialData?.hero?.email || 'arthur.saggioratto@gmail.com'

  const specPj =
    initialData?.hero?.specs?.pj || '31.384.814 ARTHUR SAGGIORATTO NETO ME (Squammata Consultoria)'
  const specFormacao =
    initialData?.hero?.specs?.formacao || 'Ciências Sociais e Sociologia (UNICAMP, previsão 2027) & Marketing e Gestão de Vendas (FAAL, 2015)'
  const specFluencia =
    initialData?.hero?.specs?.fluencia || 'Português (Nativo) | Inglês fluente (C2 Proficient para reuniões e times globais)'
  const specCoreStack =
    initialData?.hero?.specs?.coreStack || 'Shopify Plus, Magento, VTEX, Bling e Tiny ERP, GA4, Search Console, Semrush, Google Ads'

  const indicatorCards =
    initialData?.indicatorsSection?.cards && initialData.indicatorsSection.cards.length > 0
      ? initialData.indicatorsSection.cards
      : defaultIndicatorCards

  const faqEyebrow = initialData?.faqSection?.eyebrow || 'PERGUNTAS FREQUENTES'
  const faqTitle = initialData?.faqSection?.title || 'Dúvidas Comuns Sobre Meu Trabalho e Método'
  const faqSubtext =
    initialData?.faqSection?.subtext ||
    'Respostas diretas sobre como destravar operações, gestão de margem de lucro e formato de atendimento no interior paulista e São Paulo.'
  const faqItems =
    initialData?.faqSection?.items && initialData.faqSection.items.length > 0
      ? initialData.faqSection.items
      : defaultFaqItems

  const footerCallout =
    initialData?.footer?.callout ||
    'Disponível para consultorias de diagnóstico e destrave, liderança executiva dedicada ou fracionada e conselhos consultivos.'
  const footerMetaLine1 =
    initialData?.footer?.metaLine1 || "Arthur Saggioratto Neto • Base em Campinas, Piracicaba e Santa Bárbara d'Oeste, com presença executiva em São Paulo (SP) • Atuação presencial, híbrida e remota"
  const footerMetaLine2 =
    initialData?.footer?.metaLine2 || 'CNPJ: 31.384.814/0001-09 (Squammata Consultoria e Gestão de Projetos Ltda)'

  return (
    <div className={styles.portfolioPage} data-portfolio-editorial="true">
      {/* 1. HEADER FIXO MINIMALISTA */}
      <header className={styles.editorialHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerBrand}>
            <a href="#inicio" className={styles.brandTitle}>
              ARTHUR SAGGIORATTO
            </a>
            <span className={`${styles.brandTag} ${styles.monoFont}`}>
              CONSULTORIA &amp; RENTABILIDADE DIGITAL
            </span>
          </div>

          <nav className={styles.headerNav} aria-label="Navegação Editorial">
            <a href="#impacto" className={styles.navLink}>Impacto</a>
            <a href="#matriz" className={styles.navLink}>Especialidades</a>
            <a href="#casos" className={styles.navLink}>Casos</a>
            <a href="#cronologia" className={styles.navLink}>Trajetória</a>
            <a href="#blog" className={styles.navLink}>Blog &amp; Ensaios</a>
            <a href="#contratacao" className={styles.navLink}>Contratação</a>
            <a href="#faq" className={styles.navLink}>FAQ</a>
          </nav>

          <div className={styles.headerActions}>
            {/* Seletor de Idioma Executivo */}
            <div className={styles.langSwitcher}>
              <span className={`${styles.langLink} ${styles.langActive}`}>PT</span>
              <a href={enUrl} onClick={handleNavigateEn} className={styles.langLink} title="English Portfolio (C2 Executive)">
                EN
              </a>
            </div>

            <a
              href={curriculoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSecondary} ${styles.headerCurriculoBtn} ${styles.monoFont}`}
            >
              <span>Currículo (PDF) ↗</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnPrimary} ${styles.headerWhatsappBtn}`}
            >
              <span>WhatsApp ↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* SEÇÃO 1: HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.editorialContainer}>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeftCol}>
                <div className={`${styles.heroEyebrow} ${styles.monoFont}`}>
                  {heroEyebrow}
                </div>

                <h1 className={`${styles.heroH1} ${styles.headingFont}`}>
                  {heroTitle}
                </h1>

                <p className={`${styles.heroLead} ${styles.bodyFont}`}>
                  {heroLead}
                </p>

                {/* BLOCO DE RESUMO INICIAL */}
                <div className={styles.heroAnswerBlock}>
                  <div className={`${styles.heroAnswerBlockLabel} ${styles.monoFont}`}>
                    VISÃO GERAL
                  </div>
                  <p className={`${styles.heroAnswerBlockText} ${styles.bodyFont}`}>
                    Minha atuação une a estratégia do negócio à execução técnica do dia a dia. Cuido desde a infraestrutura da loja e integração com ERP até a gestão de anúncios orientada pelo lucro líquido real (POAS), garantindo que cada real investido traga retorno concreto e sustentável para a empresa.
                  </p>
                </div>

                <div className={styles.heroActions}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroSolid}
                  >
                    <span>Conversar no WhatsApp ↗</span>
                  </a>

                  <a
                    href={curriculoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroEditorial}
                  >
                    <span>Imprimir Currículo (PDF) ↗</span>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroEditorial}
                  >
                    <span>LinkedIn Oficial (/in/arthurnasa) ↗</span>
                  </a>

                  <a
                    href={`mailto:${emailAddress}`}
                    className={`${styles.heroEmailLink} ${styles.monoFont}`}
                  >
                    {emailAddress}
                  </a>
                </div>

                {/* BARRA DE ACESSO RÁPIDO AOS 4 DOSSIÊS VERTICAIS */}
                <div className={styles.dossierQuickNav}>
                  <span className={`${styles.dossierQuickLabel} ${styles.monoFont}`}>
                    Estudos de caso e materiais detalhados:
                  </span>
                  <div className={styles.dossierQuickLinks}>
                    <Link href="/casos/marketplace-specialty-coffee/" className={styles.dossierQuickPill}>
                      <span>Marketplace e Divisão de Pagamentos ↗</span>
                    </Link>
                    <Link href="/casos/seo-catalogo-maquinas-cafe/" className={styles.dossierQuickPill}>
                      <span>SEO de Catálogo e Vendas na Black Friday ↗</span>
                    </Link>
                    <Link href="/casos/retencao-ux-saas-sheetgo/" className={styles.dossierQuickPill}>
                      <span>Retenção e Experiência em SaaS B2B ↗</span>
                    </Link>
                    <Link href="/governanca/poas-dre-ecommerce/" className={styles.dossierQuickPill}>
                      <span>Gestão de Margem e Lucro Real (POAS) ↗</span>
                    </Link>
                  </div>
                </div>
              </div>

              <aside className={styles.heroRightCol}>
                <div className={styles.portraitWrapper}>
                  <picture>
                    <source srcSet={avatarSrc.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    <img
                      src={avatarSrc}
                      alt="Arthur Saggioratto: Consultor de Crescimento e Rentabilidade para E-commerce"
                      width={360}
                      height={360}
                      className={styles.editorialPortrait}
                      onError={handleImageFallback}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                  <div className={`${styles.portraitCaption} ${styles.monoFont}`}>
                    ARTHUR SAGGIORATTO • POLO RMC & SÃO PAULO
                  </div>
                </div>

                <div className={styles.dossierSpecs}>
                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Entidade / PJ:</span>
                    <span className={styles.specValue}>
                      {specPj}
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Formação Dupla:</span>
                    <span className={styles.specValue}>
                      {specFormacao}
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Fluência Operacional:</span>
                    <span className={styles.specValue}>
                      {specFluencia}
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Core Stack:</span>
                    <span className={`${styles.specValue} ${styles.monoFont}`}>
                      {specCoreStack}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: LOGO STRIP */}
        <section className={styles.logoStripSection}>
          <div className={styles.editorialContainer}>
            <div className={styles.logoStripInner}>
              <div className={`${styles.logoStripTitle} ${styles.monoFont}`}>
                OPERAÇÕES E PROJETOS EM QUE ATUEI:
              </div>

              <div className={styles.logoStripItems}>
                <a
                  href="https://ruadocafe.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>RUA DO CAFÉ</span>
                </a>

                <a
                  href="https://www.sheetgo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>SHEETGO (GLOBAL SAAS)</span>
                </a>

                <a
                  href="https://www.maquinasecafe.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>MÁQUINAS &amp; CAFÉ</span>
                </a>

                <a
                  href="https://www.lojas360.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>LOJAS 360 EPI</span>
                </a>

                <a
                  href="https://www.unicamp.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>UNICAMP</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: INDICADORES AUDITADOS DE NEGÓCIO */}
        <section className={styles.bigNumbersSection} id="impacto">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>RESULTADOS CONCRETOS</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Impacto Real em Faturamento, Margem e Eficiência
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Métricas reais de negócio: crescimento de receita, lucro protegido e melhor aproveitamento do tráfego.
              </p>
            </div>

            <div className={styles.answerBlockWrap} style={{ marginBottom: '2rem' }}>
              <p className={`${styles.bodyFont}`} style={{ fontSize: '1rem', lineHeight: '1.6', color: '#c5a880', borderLeft: '3px solid #c5a880', paddingLeft: '1rem', margin: '0' }}>
                Não meço sucesso apenas por visitas ou volume bruto de vendas. Toda decisão de mídia, SEO ou tecnologia precisa se pagar e colocar dinheiro no caixa. Estes são alguns dos resultados construídos em parceria direta com as equipes das empresas.
              </p>
            </div>

            <div className={styles.tabularGrid}>
              {indicatorCards.map((card: any, idx: number) => (
                <div key={card.id || idx} className={styles.tabularCell}>
                  <div className={styles.tabularValue}>
                    {card.value}
                  </div>
                  <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                    {card.label}
                  </div>
                  {card.scope && (
                    <div className={`${styles.monoFont}`} style={{ fontSize: '0.75rem', color: '#a0aab8', marginTop: '0.4rem', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '0.4rem' }}>
                      <strong>Amostragem:</strong> {card.scope}
                    </div>
                  )}
                  {card.methodology && (
                    <div className={`${styles.monoFont}`} style={{ fontSize: '0.72rem', color: '#8592a3', marginTop: '0.25rem' }}>
                      <strong>Cálculo:</strong> {card.methodology}
                    </div>
                  )}
                  <p className={`${styles.tabularDesc} ${styles.bodyFont}`} style={{ marginTop: '0.75rem' }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: MATRIZ DE COMPETÊNCIAS */}
        <section className={styles.matrixSection} id="matriz">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>ÁREAS DE ATUAÇÃO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  O Que Faço e Onde Posso Ajudar Sua Operação
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Quatro frentes de trabalho para colocar a operação nos trilhos: visibilidade orgânica duradoura, melhoria na taxa de conversão, integração sem falhas entre sistemas e tráfego pago focado em lucro líquido.
              </p>
            </div>

            <div className={styles.matrixIndex}>
              {/* Pilar 01 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>01</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    SEO Técnico de Catálogo e Visibilidade nas Buscas e IA
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      COMO FUNCIONA NA PRÁTICA
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Organização de Catálogo e Indexação:</strong> Estruturação clara das categorias e páginas de produto para que o Google encontre, compreenda e indexe sua loja sem URLs duplicadas ou páginas lentas.
                      </li>
                      <li>
                        <strong>Autoridade Real e Conteúdo Especializado:</strong> Desenvolvimento de páginas e guias que respondem às dúvidas reais do comprador, utilizando dados estruturados (Schema.org em JSON-LD) para destacar seus produtos nas buscas.
                      </li>
                      <li>
                        <strong>Presença nas Buscas com Inteligência Artificial:</strong> Preparação técnica das informações da marca para que ela seja citada e recomendada em ferramentas como Google AI Overviews, Perplexity e ChatGPT.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      FERRAMENTAS &amp; ENTREGAS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Semrush</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Ahrefs</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Search Console</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Core Web Vitals</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>JSON-LD Schema</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Pilar 02 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>02</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    Facilidade de Compra e Otimização de Conversão (CRO)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      COMO FUNCIONA NA PRÁTICA
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Mapeamento de Dificuldades do Usuário:</strong> Análise detalhada de comportamento, gravações de navegação e funis no GA4 para entender exatamente onde os clientes encontram barreiras ou desistem da compra.
                      </li>
                      <li>
                        <strong>Checkout Rápido e Foco no Celular:</strong> Ajustes no fluxo de compra para garantir carregamento instantâneo no celular, clareza nas opções de frete e pagamento sem etapas desnecessárias.
                      </li>
                      <li>
                        <strong>Melhorias Validadas com Dados:</strong> Testes práticos para comparar versões e implementar apenas as mudanças que trazem aumento real na receita por visitante.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      FERRAMENTAS &amp; ENTREGAS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Analytics 4</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Hotjar</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Clarity</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Testes A/B</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Figma</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Pilar 03 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>03</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    Plataformas de E-commerce, Integração com ERP e Marketplaces
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      COMO FUNCIONA NA PRÁTICA
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Integração Sem Falhas entre Loja e Retaguarda:</strong> Configuração e migração de plataformas (Shopify Plus, VTEX, Magento), garantindo que catálogo, estoque, pedidos e notas fiscais conversem perfeitamente com seu ERP (Bling, Tiny, Totvs).
                      </li>
                      <li>
                        <strong>Marketplaces e Repasse Financeiro Automático:</strong> Estruturação técnica para operações com múltiplos lojistas parceiros, com controle centralizado de estoque e divisão automática de pagamentos (split payment).
                      </li>
                      <li>
                        <strong>Canais Integrados e Atendimento Consultivo:</strong> Conexão das vendas do site aos principais marketplaces e canais diretos como WhatsApp, ideal para produtos de tíquete mais alto ou negociações B2B.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      FERRAMENTAS &amp; ENTREGAS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Shopify Plus</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Seller Center Omnik</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Split Payment</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Magento</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>VTEX</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Bling &amp; Tiny ERP</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Pilar 04 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>04</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    Tráfego Pago, Gestão de Anúncios e Lucro no Caixa (POAS)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      COMO FUNCIONA NA PRÁTICA
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Anúncios Focados no Lucro Real:</strong> Gestão de campanhas orientada pela saúde financeira da empresa. Em vez de olhar apenas para o faturamento bruto nos painéis, acompanhamos o lucro real após descontar produtos, taxas de cartão, frete e impostos.
                      </li>
                      <li>
                        <strong>Corte de Desperdício em Campanhas:</strong> Otimização contínua em Google Ads (Search, Shopping, PMax) e Meta Ads, retirando termos que gastam verba sem converter e concentrando o orçamento nos produtos mais rentáveis.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      FERRAMENTAS &amp; ENTREGAS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Ads</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Meta Ads</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Mercado Ads</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Shopee Ads</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Looker Studio</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: ANATOMIA DE RESULTADOS: ENGENHARIA, AQUISIÇÃO E DRE */}
        <section className={styles.casesSection} id="casos">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>HISTÓRICO PRÁTICO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Casos Reais e Resultados de Negócio
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Exemplos práticos de desafios enfrentados e superados em diferentes modelos de comércio eletrônico, com números abertos e processos transparentes.
              </p>
            </div>

            <div className={styles.casesDossier}>
              {/* Case 01: Rua do Café */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Maio 2026
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Rua do Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Diretor de Operações e E-commerce
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <a
                      href="https://ruadocafe.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Website Oficial (ruadocafe.com.br) ↗
                    </a>
                    <a
                      href="https://blog.ruadocafe.com.br/author/arthur/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Repositório de Artigos &amp; Autoridade Semântica ↗
                    </a>
                    <Link
                      href="/casos/marketplace-specialty-coffee/"
                      className={styles.spokeNavBtn}
                    >
                      <span>Ver Estudo Completo: Marketplace Shopify Plus &amp; Omnik ↗</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    O DESAFIO E A SOLUÇÃO NA PRÁTICA
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. O Cenário Inicial
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Marketplace em expansão no setor de cafés especiais, com o objetivo de reunir dezenas de produtores rurais e marcas artesanais de vários estados do país em uma única loja sob Shopify Plus integrada ao Seller Center Omnik.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. O Principal Gargalo
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Estoques espalhados por todo o Brasil, atrito no cálculo de fretes múltiplos para um mesmo pedido, complexidade para fazer o repasse financeiro automático a cada produtor e o perigo de gastar muito em anúncios sem garantia de retorno no caixa.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. O Que Foi Feito
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Implantação do Seller Center Omnik conectado diretamente aos ERPs dos parceiros (Bling e Tiny), estruturação de divisão automática de recebíveis (split payment) em Shopify, organização de conteúdos regionais sobre cafés de origem com marcação de dados estruturados e alocação de anúncios no Google Ads focada em produtos de alta margem (POAS).
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Resultado Concreto no Negócio
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Crescimento contínuo de <strong>+66% ao mês (MoM) em GMV</strong>, integração de <strong>mais de 100 lojistas parceiros</strong> com catálogo sincronizado e consolidação da marca como referência nas buscas sobre café especial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PRINCIPAIS RESULTADOS
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>+66% MoM</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Crescimento de GMV</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>+100</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Lojistas Omnik &amp; ERP</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>Split Payment</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Arquitetura Shopify</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Shopify Plus</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Seller Center Omnik</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Split Payment</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Google Ads</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>JSON-LD Schema</span>
                  </div>
                  <div className={styles.spokeTeaserBox}>
                    <div className={`${styles.spokeTeaserTitle} ${styles.monoFont}`}>
                      DETALHAMENTO NO ESTUDO COMPLETO
                    </div>
                    <ul className={`${styles.spokeTeaserList} ${styles.bodyFont}`}>
                      <li>Fluxo de divisão de recebíveis (split payment) e conexão com ERPs</li>
                      <li>Comparativo de desempenho antes e após a nova esteira de catálogo</li>
                      <li>Estrutura de sistemas integrada entre Shopify Plus e Omnik</li>
                    </ul>
                  </div>
                  <Link
                    href="/casos/marketplace-specialty-coffee/"
                    className={styles.spokeCardBtn}
                  >
                    Ver Estudo Completo ↗
                  </Link>
                </div>
              </article>

              {/* Case 02: Sheetgo */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Outubro 2024
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Sheetgo
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Technical SEO &amp; Growth Lead (Operação Global 100% em Inglês)
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <a
                      href="https://www.sheetgo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Website Oficial (sheetgo.com) ↗
                    </a>
                    <Link
                      href="/casos/retencao-ux-saas-sheetgo/"
                      className={styles.spokeNavBtn}
                    >
                      <span>Ver Estudo Completo: Retenção e Experiência em SaaS B2B ↗</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    O DESAFIO E A SOLUÇÃO NA PRÁTICA
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. O Cenário Inicial
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Plataforma global de software como serviço (SaaS) voltada para automação de fluxos de trabalho e planilhas, operando 100% em língua inglesa para clientes corporativos nos Estados Unidos e Europa.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. O Principal Gargalo
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Páginas de entrada com velocidade instável no celular e no computador, sobreposição de palavras-chave entre artigos técnicos e dificuldades no início do uso da ferramenta, fazendo com que usuários desistissem antes de experimentar os recursos.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. O Que Foi Feito
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Auditorias técnicas detalhadas para sanar problemas de velocidade e carregamento visual (Core Web Vitals), reorganização da biblioteca de conteúdos em temas claros de automação e reformulação das telas iniciais com base em testes práticos e gravações de navegação.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Resultado Concreto no Negócio
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Aumento de <strong>+20% no tempo médio de permanência</strong> dos novos usuários corporativos, recuperação de posições importantes nas buscas internacionais e redução expressiva no abandono durante os primeiros passos na ferramenta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PRINCIPAIS RESULTADOS
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>+20%</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Tempo de Sessão</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>100% EN</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Global B2B SaaS</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>Core Vitals</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>LCP, INP e CLS</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Semrush</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Ahrefs</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Hotjar</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Testes A/B</span>
                  </div>
                  <div className={styles.spokeTeaserBox}>
                    <div className={`${styles.spokeTeaserTitle} ${styles.monoFont}`}>
                      DETALHAMENTO NO ESTUDO COMPLETO
                    </div>
                    <ul className={`${styles.spokeTeaserList} ${styles.bodyFont}`}>
                      <li>Mapeamento do comportamento de usuários no GA4 e funil de ativação</li>
                      <li>Simplificação da experiência inicial e redução de etapas no cadastro</li>
                      <li>Otimizações de velocidade e estabilidade técnica de páginas</li>
                    </ul>
                  </div>
                  <Link
                    href="/casos/retencao-ux-saas-sheetgo/"
                    className={styles.spokeCardBtn}
                  >
                    Ver Estudo Completo ↗
                  </Link>
                </div>
              </article>

              {/* Case 03: Máquinas & Café */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2014 a Janeiro 2024 (10 Anos)
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Máquinas &amp; Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Head de E-commerce &amp; Performance
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <a
                      href="https://www.maquinasecafe.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Website Oficial (maquinasecafe.com.br) ↗
                    </a>
                    <a
                      href="https://bridgeseo.com.br/consultoria-de-seo-para-e-commerce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Depoimento de Case na Bridge SEO ↗
                    </a>
                    <Link
                      href="/casos/seo-catalogo-maquinas-cafe/"
                      className={styles.spokeNavBtn}
                    >
                      <span>Ver Estudo Completo: SEO de Catálogo e Vendas na Black Friday ↗</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    O DESAFIO E A SOLUÇÃO NA PRÁTICA
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. O Cenário Inicial
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Empresa pioneira no comércio de máquinas de café espresso profissionais e residenciais, peças e assistência técnica, com demanda fortemente sazonal nos meses finais de cada ano.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. O Principal Gargalo
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Dependência pesada de anúncios no Google Shopping em períodos promocionais como a Black Friday, momento em que o custo por clique dispara e consome a margem de lucro em produtos de tíquete elevado.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. O Que Foi Feito
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Construção de uma biblioteca sólida de artigos técnicos, guias de compra e manutenção de equipamentos em Magento, catálogo otimizado para o vocabulário real do comprador, integração de estoque e preços no Bling ERP e canal consultivo no WhatsApp para vendas de maior complexidade.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Resultado Concreto no Negócio
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Crescimento anual consistente de <strong>+20% ao ano durante 10 anos consecutivos</strong>, <strong>45% do faturamento da Black Friday</strong> conquistado exclusivamente via busca orgânica gratuita (sem custo de anúncio), <strong>+50% em tráfego qualificado</strong> e <strong>+30% na conversão geral</strong>.
                      </p>
                    </div>
                  </div>

                  <blockquote className={`${styles.caseQuote} ${styles.bodyFont}`}>
                    &ldquo;A estratégia de SEO combinada à produção de conteúdos de qualidade impulsionou não só o tráfego orgânico, mas o crescimento da loja como um todo, reduzindo nossa dependência de anúncios pagos.&rdquo;
                    <footer className={styles.monoFont}>DEPOIMENTO REGISTRADO DE MERCADO • BRIDGE SEO</footer>
                  </blockquote>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PRINCIPAIS RESULTADOS
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>10 Anos</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>+20% YoY Linear</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>45% BF</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Receita via Orgânico</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>+30%</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Taxa de Conversão</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Magento</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>SEO Técnico</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Bling ERP</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Google Ads</span>
                  </div>
                  <div className={styles.spokeTeaserBox}>
                    <div className={`${styles.spokeTeaserTitle} ${styles.monoFont}`}>
                      DETALHAMENTO NO ESTUDO COMPLETO
                    </div>
                    <ul className={`${styles.spokeTeaserList} ${styles.bodyFont}`}>
                      <li>Organização de filtros técnicos no catálogo de máquinas</li>
                      <li>Histórico de 10 anos de crescimento em tráfego orgânico</li>
                      <li>Estratégia para preservar a margem de lucro durante a Black Friday</li>
                    </ul>
                  </div>
                  <Link
                    href="/casos/seo-catalogo-maquinas-cafe/"
                    className={styles.spokeCardBtn}
                  >
                    Ver Estudo Completo ↗
                  </Link>
                </div>
              </article>

              {/* Case 04: Framework POAS & Governança no DRE */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Metodologia Proprietária
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Framework POAS
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Metodologia de Gestão de Lucro Real e Tráfego Pago
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <Link
                      href="/governanca/poas-dre-ecommerce/"
                      className={styles.spokeNavBtn}
                    >
                      <span>Ver Estudo Completo: Framework POAS sobre o DRE ↗</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    O DESAFIO E A SOLUÇÃO NA PRÁTICA
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. O Cenário Inicial
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Lojas virtuais que faturam entre R$ 800 mil e R$ 3 milhões ao mês e precisam continuar acelerando vendas, mas enfrentam anúncios cada vez mais caros no Google e Meta Ads.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. O Principal Gargalo
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Comemorar números altos de ROAS nos relatórios de marketing enquanto a conta bancária da empresa não fecha. O ROAS considera apenas a receita bruta, ignorando o custo da mercadoria (CMV), impostos da nota, taxas de cartão e frete.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. O Que Foi Feito
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Aplicação do indicador POAS (lucro gerado sobre o investimento em anúncios). Cruzamento dos custos reais do ERP (Tiny, Bling, Totvs) diretamente com as campanhas de tráfego, separando os produtos que geram lucro real daqueles que causam prejuízo disfarçado.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h4 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Resultado Concreto no Negócio
                      </h4>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Eliminação de <strong>até 40% de verba gasta em campanhas ineficientes</strong>, proteção do fluxo de caixa e concentração dos investimentos nos produtos que realmente fortalecem a saúde financeira da empresa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PRINCIPAIS RESULTADOS
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>Lucro Real</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Foco no Caixa</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>-40%</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Vazamento Mídia</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>100% DRE</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Rigor Contábil</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Unit Economics</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>POAS</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>DRE Gerencial</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>CMV &amp; Margem</span>
                  </div>
                  <div className={styles.spokeTeaserBox}>
                    <div className={`${styles.spokeTeaserTitle} ${styles.monoFont}`}>
                      DETALHAMENTO NO ESTUDO COMPLETO
                    </div>
                    <ul className={`${styles.spokeTeaserList} ${styles.bodyFont}`}>
                      <li>Comparativo visual entre ilusão de ROAS e lucro real no bolso</li>
                      <li>Tabela prática de metas de margem por categoria de produto</li>
                      <li>Modelo de planilha para conciliar anúncios com os custos do ERP</li>
                    </ul>
                  </div>
                  <Link
                    href="/governanca/poas-dre-ecommerce/"
                    className={styles.spokeCardBtn}
                  >
                    Ver Estudo de POAS ↗
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: LINHA DO TEMPO CRONOLÓGICA */}
        <section className={styles.casesSection} id="cronologia">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>EXPERIÊNCIA E CARREIRA</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  15 Anos Construindo e Liderando Operações Digitais
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Uma visão clara das empresas onde atuei, dos papéis que desempenhei e das entregas realizadas em cada fase.
              </p>
            </div>

            <div className={styles.answerBlockWrap} style={{ marginBottom: '2rem' }}>
              <p className={`${styles.bodyFont}`} style={{ fontSize: '1rem', lineHeight: '1.6', color: '#c5a880', borderLeft: '3px solid #c5a880', paddingLeft: '1rem', margin: '0' }}>
                Minha carreira foi construída na prática do dia a dia, combinando períodos de liderança executiva dentro de empresas com projetos de consultoria estratégica para negócios em momentos de transição e escala.
              </p>
            </div>

            <div className={styles.ledgerGrid}>
              {/* Marco 01: Squammata */}
              <div className={styles.ledgerRow}>
                <div className={`${styles.ledgerPeriod} ${styles.monoFont}`}>
                  2024 a Presente
                </div>
                <div className={styles.ledgerEntity}>
                  <div className={`${styles.ledgerCompany} ${styles.headingFont}`}>Squammata</div>
                  <div className={styles.ledgerRole}>Fundador &amp; Diretor de Estratégia</div>
                  <span className={`${styles.ledgerModalityBadge} ${styles.monoFont}`}>Advisory &amp; PJ</span>
                </div>
                <p className={`${styles.ledgerDesc} ${styles.bodyFont}`}>
                  Estrutura pela qual presto consultoria para médias e grandes empresas de e-commerce. Diagnóstico de gargalos, planejamento de plataformas (Shopify Plus, VTEX), revisão da governança de margem (DRE) e alinhamento estratégico com diretorias.
                </p>
                <div className={styles.ledgerActionCol}>
                  <a
                    href="https://empresas.serasaexperian.com.br/consulta-gratis/31384814-ARTHUR-SAGGIORATTO-NETO-ME-31384814000109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ledgerLinkBtn}
                  >
                    CNPJ Oficial ↗
                  </a>
                </div>
              </div>

              {/* Marco 02: Rua do Café */}
              <div className={styles.ledgerRow}>
                <div className={`${styles.ledgerPeriod} ${styles.monoFont}`}>
                  2024 a 2026
                </div>
                <div className={styles.ledgerEntity}>
                  <div className={`${styles.ledgerCompany} ${styles.headingFont}`}>Rua do Café</div>
                  <div className={styles.ledgerRole}>Head of Marketing &amp; E-commerce</div>
                  <span className={`${styles.ledgerModalityBadge} ${styles.monoFont}`}>Dedicação Executiva</span>
                </div>
                <p className={`${styles.ledgerDesc} ${styles.bodyFont}`}>
                  Liderança da operação do marketplace em Shopify Plus com Seller Center Omnik. Integração de mais de 100 parceiros, implantação de split de pagamentos e escala de vendas alcançando <strong>+66% ao mês em GMV</strong>.
                </p>
                <div className={styles.ledgerActionCol}>
                  <Link href="/casos/marketplace-specialty-coffee/" className={styles.ledgerLinkBtn}>
                    Ver Estudo ↗
                  </Link>
                </div>
              </div>

              {/* Marco 03: Sheetgo */}
              <div className={styles.ledgerRow}>
                <div className={`${styles.ledgerPeriod} ${styles.monoFont}`}>
                  2024
                </div>
                <div className={styles.ledgerEntity}>
                  <div className={`${styles.ledgerCompany} ${styles.headingFont}`}>Sheetgo</div>
                  <div className={styles.ledgerRole}>Technical SEO &amp; Growth Lead</div>
                  <span className={`${styles.ledgerModalityBadge} ${styles.monoFont}`}>Global C2 (Inglês)</span>
                </div>
                <p className={`${styles.ledgerDesc} ${styles.bodyFont}`}>
                  Atuação direta em inglês com o time internacional de produto. Foco em otimização de velocidade do site (Core Web Vitals), reestruturação de conteúdo e aumento de <strong>+20% no tempo de permanência</strong> dos novos usuários corporativos.
                </p>
                <div className={styles.ledgerActionCol}>
                  <Link href="/casos/retencao-ux-saas-sheetgo/" className={styles.ledgerLinkBtn}>
                    Ver Estudo ↗
                  </Link>
                </div>
              </div>

              {/* Marco 04: Máquinas & Café */}
              <div className={styles.ledgerRow}>
                <div className={`${styles.ledgerPeriod} ${styles.monoFont}`}>
                  2014 a 2024 (10 Anos)
                </div>
                <div className={styles.ledgerEntity}>
                  <div className={`${styles.ledgerCompany} ${styles.headingFont}`}>Máquinas &amp; Café</div>
                  <div className={styles.ledgerRole}>Diretor Operacional &amp; E-commerce</div>
                  <span className={`${styles.ledgerModalityBadge} ${styles.monoFont}`}>Gestão Integral</span>
                </div>
                <p className={`${styles.ledgerDesc} ${styles.bodyFont}`}>
                  Uma década à frente da estratégia digital, vendas e retaguarda em Magento e Bling ERP. Crescimento anual de <strong>20% ao ano</strong> e estruturação de uma operação onde <strong>45% das vendas de Black Friday</strong> aconteciam por busca orgânica gratuita.
                </p>
                <div className={styles.ledgerActionCol}>
                  <Link href="/casos/seo-catalogo-maquinas-cafe/" className={styles.ledgerLinkBtn}>
                    Ver Estudo ↗
                  </Link>
                </div>
              </div>

              {/* Marco 05: Cope Calçados */}
              <div className={styles.ledgerRow}>
                <div className={`${styles.ledgerPeriod} ${styles.monoFont}`}>
                  2020 a 2023
                </div>
                <div className={styles.ledgerEntity}>
                  <div className={`${styles.ledgerCompany} ${styles.headingFont}`}>Cope Calçados</div>
                  <div className={styles.ledgerRole}>Consultor de E-commerce &amp; Mídia</div>
                  <span className={`${styles.ledgerModalityBadge} ${styles.monoFont}`}>Consultoria Técnica</span>
                </div>
                <p className={`${styles.ledgerDesc} ${styles.bodyFont}`}>
                  Reestruturação das campanhas de Google Shopping e Google Ads, direcionando os orçamentos de mídia para as categorias de produtos com melhor margem de contribuição.
                </p>
                <div className={styles.ledgerActionCol}>
                  <span className={`${styles.monoFont}`} style={{ fontSize: '0.75rem', color: '#8592A3' }}>
                    Consultoria Concluída
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: FUNDAMENTAÇÃO ACADÊMICA & SOCIOLOGIA DA TÉCNICA */}
        <section className={styles.academicSection} id="formacao">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>FORMAÇÃO E VISÃO DE MUNDO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Fundamentação Sólida para Decisões Mais Inteligentes
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Como a união entre ciências humanas e gestão de negócios ajuda a criar experiências de compra que respeitam o cliente e constroem valor duradouro.
              </p>
            </div>

            <div className={styles.academicGrid}>
              <div className={styles.academicLeftBlock}>
                <h3 className={`${styles.blockHeading} ${styles.headingFont}`}>
                  Formação Acadêmica &amp; Visão Crítica
                </h3>

                <div className={styles.institutionItem}>
                  <div className={`${styles.institutionMeta} ${styles.monoFont}`}>
                    UNICAMP • UNIVERSIDADE ESTADUAL DE CAMPINAS (Previsão 2027)
                  </div>
                  <h4 className={`${styles.degreeTitle} ${styles.headingFont}`}>
                    Bacharelado em Ciências Sociais (Sociologia)
                  </h4>
                  <p className={`${styles.degreeDesc} ${styles.bodyFont}`}>
                    O estudo da sociologia me dá uma lente única para analisar plataformas, consumo e comportamento digital. Em vez de olhar para os compradores apenas como números em um gráfico ou buscar atalhos apelativos que desgastam a reputação da marca, essa formação ajuda a estruturar relações de confiança e construir marcas que permanecem relevantes no longo prazo.
                  </p>
                </div>

                <div className={styles.institutionItem}>
                  <div className={`${styles.institutionMeta} ${styles.monoFont}`}>
                    FAAL • FACULDADE DE ADMINISTRAÇÃO E ARTES DE LIMEIRA (2015)
                  </div>
                  <h4 className={`${styles.degreeTitle} ${styles.headingFont}`}>
                    Bacharelado em Marketing e Gestão de Vendas
                  </h4>
                  <p className={`${styles.degreeDesc} ${styles.bodyFont}`}>
                    Formação prática em gestão comercial, canais de distribuição, formação de preços e estratégias de aquisição e relacionamento com clientes.
                  </p>
                </div>
              </div>

              <div className={styles.academicRightBlock}>
                <h3 className={`${styles.blockHeading} ${styles.headingFont}`}>
                  Artigos e Publicações Técnicas
                </h3>

                <div className={styles.editorialArticlesList}>
                  <article className={styles.editorialArticleCard}>
                    <div className={`${styles.articleNumber} ${styles.monoFont}`}>01</div>
                    <div className={styles.articleBody}>
                      <h4 className={`${styles.articleTitle} ${styles.headingFont}`}>
                        Estudos sobre o Mercado de Café Especial
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Artigos práticos conectando origem produtiva, métodos de torra, extração e hábitos de consumo no ecossistema cafeeiro nacional.
                      </p>
                      <a
                        href="https://blog.ruadocafe.com.br/author/arthur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.articleLink}
                      >
                        Acessar Artigos no Blog da Rua do Café ↗
                      </a>
                    </div>
                  </article>

                  <article className={styles.editorialArticleCard}>
                    <div className={`${styles.articleNumber} ${styles.monoFont}`}>02</div>
                    <div className={styles.articleBody}>
                      <h4 className={`${styles.articleTitle} ${styles.headingFont}`}>
                        Mapeamento Regional: Terroir e Cafeicultura Familiar
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Estruturação de conteúdo técnico regional e relevância geográfica para busca orgânica com dados de origem no Sudoeste de Minas.
                      </p>
                      <a
                        href="https://blog.ruadocafe.com.br/tag/sudoeste-de-minas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.articleLink}
                      >
                        Ver Estudo Regional de Muzambinho ↗
                      </a>
                    </div>
                  </article>

                  <article className={styles.editorialArticleCard}>
                    <div className={`${styles.articleNumber} ${styles.monoFont}`}>03</div>
                    <div className={styles.articleBody}>
                      <h4 className={`${styles.articleTitle} ${styles.headingFont}`}>
                        Indicações Geográficas e Rastreabilidade
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Conteúdo aprofundado sobre certificações de origem e procedência para valorização de produtos e marcas artesanais.
                      </p>
                      <a
                        href="https://blog.ruadocafe.com.br/tag/sao-paulo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.articleLink}
                      >
                        Acessar Mapeamento de Indicações Geográficas ↗
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: CADERNO EDITORIAL & BLOG (ESPAÇO RESERVADO & PUBLICAÇÕES) */}
        <section className={styles.blogSection} id="blog">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>ARTIGOS E REFLEXÕES</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Textos e Análises Sobre E-commerce e Negócios
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Artigos práticos sobre gestão de margem, escolhas técnicas de plataformas e o que realmente faz diferença no dia a dia do comércio eletrônico.
              </p>
            </div>

            <div className={styles.blogGrid}>
              {/* Artigo 01: Terroir e Indicações Geográficas */}
              <article className={styles.blogCard}>
                <div className={styles.blogCardTop}>
                  <div className={styles.blogCardMetaRow}>
                    <span className={`${styles.blogCardBadge} ${styles.monoFont}`}>E-E-A-T &amp; Terroir</span>
                    <span className={`${styles.blogCardDate} ${styles.monoFont}`}>Março 2024</span>
                  </div>
                  <h3 className={`${styles.blogCardTitle} ${styles.headingFont}`}>
                    Origem, Terroir e Construção de Marca no E-commerce Cafeeiro
                  </h3>
                  <p className={`${styles.blogCardExcerpt} ${styles.bodyFont}`}>
                    Como contar a história de origem dos produtos e organizar as informações da loja atrai um público mais qualificado e fiel, diminuindo a dependência de anúncios caros.
                  </p>
                </div>
                <div className={styles.blogCardFooter}>
                  <a
                    href="https://blog.ruadocafe.com.br/author/arthur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.blogCardLink}
                  >
                    Ler Artigo no Blog da Rua do Café ↗
                  </a>
                </div>
              </article>

              {/* Artigo 02: A Ilusão do ROAS Bruto */}
              <article className={styles.blogCard}>
                <div className={styles.blogCardTop}>
                  <div className={styles.blogCardMetaRow}>
                    <span className={`${styles.blogCardBadge} ${styles.monoFont}`}>Controladoria &amp; POAS</span>
                    <span className={`${styles.blogCardDate} ${styles.monoFont}`}>Tese Metodológica</span>
                  </div>
                  <h3 className={`${styles.blogCardTitle} ${styles.headingFont}`}>
                    A Armadilha do ROAS: Por Que Vender Muito Nem Sempre Significa Lucro
                  </h3>
                  <p className={`${styles.blogCardExcerpt} ${styles.bodyFont}`}>
                    Um olhar honesto sobre como os custos de frete, devoluções, taxas de cartão e impostos podem transformar campanhas aparentemente vencedoras em prejuízo real no caixa.
                  </p>
                </div>
                <div className={styles.blogCardFooter}>
                  <Link href="/governanca/poas-dre-ecommerce/" className={styles.blogCardLink}>
                    Ver Estudo de POAS ↗
                  </Link>
                </div>
              </article>

              {/* Artigo 03: Espaço Reservado / Próximo Ensaio */}
              <article className={`${styles.blogCard} ${styles.blogCardPlaceholder}`}>
                <div className={styles.blogCardTop}>
                  <div className={styles.blogCardMetaRow}>
                    <span className={`${styles.blogCardBadge} ${styles.blogCardBadgeReserved} ${styles.monoFont}`}>Em Preparação</span>
                    <span className={`${styles.blogCardDate} ${styles.monoFont}`}>Próximo Ensaio</span>
                  </div>
                  <h3 className={`${styles.blogCardTitle} ${styles.headingFont}`}>
                    O Futuro das Buscas: Como Lojas Virtuais Devem se Preparar para a IA
                  </h3>
                  <p className={`${styles.blogCardExcerpt} ${styles.bodyFont}`}>
                    O que muda com a chegada de ferramentas como ChatGPT e Google AI Overviews na hora de pesquisar produtos, e como manter sua loja visível nesse novo cenário.
                  </p>
                </div>
                <div className={styles.blogCardFooter}>
                  <span className={`${styles.blogReservedNotice} ${styles.monoFont}`}>
                    Espaço reservado • Publicação prevista para a próxima edição
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEÇÃO 9: BOLETIM EXECUTIVO & FORM NEWSLETTER */}
        <section className={styles.newsletterSection} id="newsletter">
          <div className={styles.editorialContainer}>
            <div className={styles.newsletterBox}>
              <div className={styles.newsletterHeader}>
                <span className={`${styles.newsletterBadge} ${styles.monoFont}`}>
                  NEWSLETTER QUINZENAL
                </span>
                <h2 className={`${styles.newsletterTitle} ${styles.headingFont}`}>
                  Ideias e Práticas de E-commerce Direto ao Ponto
                </h2>
                <p className={`${styles.newsletterDesc} ${styles.bodyFont}`}>
                  Compartilho quinzenalmente o que aprendo na rotina com lojas virtuais: análises de margem, decisões técnicas que valem a pena e estratégias para vender mais com consistência. Sem enrolação e sem fórmulas milagrosas.
                </p>
              </div>

              {newsletterStatus === 'success' ? (
                <div className={styles.newsletterSuccess}>
                  <div className={`${styles.newsletterSuccessTitle} ${styles.monoFont}`}>
                    Inscrição Confirmada
                  </div>
                  <p className={`${styles.newsletterSuccessText} ${styles.bodyFont}`}>
                    Obrigado pelo interesse. O endereço <strong>{newsletterEmail}</strong> foi cadastrado com sucesso. Em breve você receberá as próximas edições diretamente na sua caixa de entrada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm} noValidate>
                  <div className={styles.newsletterInputGroup}>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value)
                        if (newsletterStatus === 'error') setNewsletterStatus('idle')
                      }}
                      placeholder="seu.email@empresa.com.br"
                      className={styles.newsletterInput}
                      required
                      aria-label="Endereço de e-mail corporativo para assinatura do boletim executivo"
                    />
                    <button type="submit" className={styles.newsletterSubmit}>
                      <span>Receber Artigos ↗</span>
                    </button>
                  </div>
                  {newsletterStatus === 'error' && (
                    <div className={`${styles.newsletterErrorText} ${styles.monoFont}`}>
                      {newsletterErrorMsg}
                    </div>
                  )}
                  <p className={`${styles.newsletterPrivacy} ${styles.monoFont}`}>
                    Respeito seu tempo e sua caixa de entrada: zero mensagens indesejadas, seus dados protegidos e cancelamento fácil com um clique.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10: CONTRATAÇÃO & MODELOS DE ATUAÇÃO */}
        <section className={styles.engagementSection} id="contratacao">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>MODELOS DE ATUAÇÃO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Formatos de Trabalho e Contratação
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Atuação flexível de acordo com a necessidade da sua empresa: consultoria focada em diagnóstico e destrave de vendas para operações em platô, ou liderança executiva contínua (Head de E-commerce, Diretor ou Fractional).
              </p>
            </div>

            <div className={styles.engagementGrid}>
              {/* Modelo A */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>FORMATO 1</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Consultoria de Diagnóstico e Destrave de Vendas
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Ideal para empresas que chegaram a um teto de faturamento ou sentem que a operação estagnou. Entro na operação para mapear exatamente o que está travando o crescimento: problemas de indexação no Google, lentidão na loja, falhas de sincronização com o ERP (Bling, Tiny) ou dinheiro queimado em anúncios caros. Desenhamos juntos as prioridades, corrigimos as falhas críticas e colocamos a loja em um caminho claro de crescimento com lucro.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  DIAGNÓSTICO INICIAL (3 A 4 SEMANAS) OU ACOMPANHAMENTO DE DESTRAVE (3 A 6 MESES) • ATENDIMENTO PRESENCIAL (CAMPINAS, PIRACICABA E SÃO PAULO) OU REMOTO
                </div>
              </div>

              {/* Modelo B */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>FORMATO 2</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Liderança Executiva (Head de E-commerce, Diretor ou Fractional)
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Para empresas que precisam de uma liderança experiente para comandar a área digital, estruturar novos canais ou coordenar migrações complexas de plataforma (Shopify Plus, VTEX, Magento). Atuação dedicada ou fracionada, com foco em gestão de equipes, acompanhamento do DRE, relacionamento com fornecedores e prestação de contas direta para a diretoria.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  CONTRATAÇÃO EXECUTIVA (PJ OU CLT), FRACTIONAL HEAD OU CONSELHO CONSULTIVO • PRESENÇA HÍBRIDA (SÃO PAULO E POLO DE CAMPINAS) OU REMOTA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 9: PERGUNTAS FREQUENTES */}
        <section className={styles.faqSection} id="faq">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>{faqEyebrow}</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  {faqTitle}
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                {faqSubtext}
              </p>
            </div>

            <div className={styles.faqGrid}>
              {faqItems.map((faq: any, idx: number) => (
                <div key={faq.id || idx} className={styles.faqCard}>
                  <span className={`${styles.faqBadge} ${styles.monoFont}`}>{faq.badge || 'MÉTODO'}</span>
                  <h3 className={`${styles.faqQuestion} ${styles.headingFont}`}>
                    {faq.question}
                  </h3>
                  <p className={`${styles.faqAnswer} ${styles.bodyFont}`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER EXECUTIVO SÓBRIO */}
      <footer className={styles.editorialFooter}>
        <div className={styles.editorialContainer}>
          <div className={styles.footerMainBlock}>
            <div className={styles.footerTextCol}>
              <h2 className={`${styles.footerCallout} ${styles.headingFont}`}>
                {footerCallout}
              </h2>
              <div className={`${styles.footerMetaList} ${styles.monoFont}`}>
                <div><strong>{footerMetaLine1.split('•')[0]?.trim() || 'Arthur Saggioratto Neto'}</strong> • {footerMetaLine1.split('•')[1]?.trim() || "Santa Bárbara d'Oeste / Campinas, SP"}</div>
                <div>{footerMetaLine2}</div>
                <div>
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                  {' '}•{' '}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+55 (19) 99349-7819</a>
                </div>
                <div className={styles.footerSignature}>
                  Resultados sustentáveis / Consultoria de e-commerce e rentabilidade digital
                </div>
              </div>
            </div>

            <div className={styles.footerActionsCol}>
              {/* Seletor de Idioma no Rodapé */}
              <div className={styles.langSwitcher} style={{ marginBottom: '0.5rem' }}>
                <span className={`${styles.langLink} ${styles.langActive}`}>Versão em Português</span>
                <a href={enUrl} onClick={handleNavigateEn} className={styles.langLink}>
                  English Version (C2)
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <span>Conversar no WhatsApp ↗</span>
              </a>

              <a
                href={curriculoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <span>Imprimir Currículo em PDF ↗</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <span>LinkedIn Oficial (/in/arthurnasa) ↗</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBottomBar}>
            <div className={`${styles.copyrightText} ${styles.monoFont}`}>
              &copy; {new Date().getFullYear()} Arthur Saggioratto Neto. Squammata Consultoria e Gestão de Projetos Ltda.
            </div>
            <div className={`${styles.footerTechNote} ${styles.monoFont}`}>
              PÁGINA RÁPIDA • SEM RASTREADORES INVASIVOS • SCHEMA.ORG JSON-LD
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArthurPortfolioView
