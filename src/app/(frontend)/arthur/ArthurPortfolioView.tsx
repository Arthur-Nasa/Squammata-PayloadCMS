'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './arthur.module.scss'

const DEFAULT_CURRICULO_PATH = './curriculo_ecommerce_arthursaggioratto.pdf'

const defaultIndicatorCards = [
  {
    value: '+66% MoM em GMV',
    label: 'ESCALA DE RECEITA • RUA DO CAFÉ',
    scope: 'Rua do Café (Fase de tração inicial do marketplace)',
    methodology: 'Média mensal ponderada de faturamento transacionado, impulsionada por onboarding de catálogo parceiro e campanhas orientadas por POAS (Profit on Ad Spend).',
    description:
      'Crescimento mensal sustentado no faturamento transacionado da Rua do Café. O resultado decorreu da governança de mídia paga orientada à margem de contribuição por produto e esteiras ágeis de conversão.',
  },
  {
    value: '45% na Black Friday via Orgânico',
    label: 'PROTEÇÃO DE MARGEM • SEO TÉCNICO',
    scope: 'Máquinas & Café (Pico sazonal de novembro)',
    methodology: 'Faturamento atribuído por modelo First-Click e Last-Non-Direct Click originado exclusivamente de busca orgânica, blindando o caixa da inflação de leilão.',
    description:
      'Fatia do faturamento gerada por busca orgânica no pico sazonal de vendas. A maturidade semântica do catálogo protegeu a margem contra a disparada do custo por clique (CPC) nos leilões de anúncios.',
  },
  {
    value: '10 Anos (+20% YoY)',
    label: 'ESCALA LINEAR • MÁQUINAS & CAFÉ',
    scope: 'Máquinas & Café (Série histórica de 2014 a 2024)',
    methodology: 'Crescimento auditado de faturamento anual contínuo na venda de maquinário e insumos com preservação de liquidez.',
    description:
      'Uma década de crescimento contínuo de 20% ao ano na Máquinas & Café (2014 a 2024), consolidando a operação no mercado nacional de equipamentos para residências e empresas.',
  },
  {
    value: '+50% Tráfego / +30% Conversão',
    label: 'EFICIÊNCIA DE FUNIL • AQUISIÇÃO & CRO',
    scope: 'Funil Multicanal e Otimização Transacional',
    methodology: 'Automação de canais de aquisição qualificada e eliminação de fricções no fluxo de fechamento.',
    description:
      'Expansão de volume com ganho proporcional de taxa de fechamento. O tráfego cresceu 50% enquanto as otimizações no checkout aumentaram a conversão em 30%.',
  },
  {
    value: '+20% em Tempo de Sessão',
    label: 'RETENÇÃO B2B SAAS • SHEETGO (GLOBAL)',
    scope: 'Sheetgo (Global SaaS, amostragem semestral)',
    methodology: 'Incremento na retenção e navegação de produto aferido via GA4 após testes A/B e redesenho de páginas de destino.',
    description:
      'Aumento na retenção e navegação qualificada da plataforma global de automação Sheetgo. A reformulação da jornada do usuário facilitou a ativação e reduziu desistências.',
  },
  {
    value: '+100 Lojistas Integrados',
    label: 'ECOSSISTEMA MARKETPLACE • SHOPIFY & OMNIK',
    scope: 'Marketplace Enterprise com Seller Center',
    methodology: 'Catálogo unificado com split payment nativo e sincronização de estoque e pedidos ao ERP de cada lojista.',
    description:
      'Estruturação técnica e comercial do ecossistema de marketplace em Shopify Plus com Seller Center Omnik, conectando mais de uma centena de parceiros com estoque e pedidos integrados ao ERP.',
  },
]

const defaultFaqItems = [
  {
    badge: 'ESTAGNAÇÃO & CRESCIMENTO',
    question: 'Como a consultoria ajuda uma operação de e-commerce que estagnou a destravar o crescimento?',
    answer:
      'Toda estagnação tem causas concretas que muitas vezes passam despercebidas na rotina: leilões de anúncios caros que consomem o lucro, páginas lentas que derrubam a conversão no celular, erros de sincronização entre loja e ERP (Bling, Tiny) ou perda de tráfego orgânico para concorrentes. O trabalho começa com um diagnóstico cirúrgico de ponta a ponta na operação e no DRE para isolar os verdadeiros gargalos. Em seguida, implementamos correções técnicas imediatas e um plano de destrave focado em aumentar a margem de contribuição, diversificar os canais de venda e retomar o crescimento sustentável sem queimar caixa.',
  },
  {
    badge: 'FINANÇAS & DRE',
    question: 'O que significa subordinar o e-commerce ao DRE e à margem de contribuição?',
    answer:
      'Muitas empresas comemoram um ROAS elevado nos painéis de anúncios enquanto a conta bancária sofre no final do mês. Subordinar a operação ao Demonstrativo de Resultados (DRE) significa gerenciar os canais com base no lucro líquido real, após abater o custo das mercadorias vendidas (CMV), taxas de gateway, fretes e impostos. Trabalhamos com métricas como o POAS (Profit on Ad Spend), garantindo que cada real alocado em tráfego gere margem de contribuição positiva para a empresa.',
  },
  {
    badge: 'BUSCA GENERATIVA & IA',
    question: 'Como funciona a preparação para busca em Inteligência Artificial (GEO e AEO)?',
    answer:
      'Motores como ChatGPT, Perplexity e Google AI Overviews não leem páginas como um visitante comum: eles identificam entidades, autoridades e relações conceituais. Estruturamos os dados do seu e-commerce com marcações semânticas avançadas em Schema.org (JSON-LD) e produzimos conteúdos com autoridade técnica comprovada (E-E-A-T). Com isso, quando um potencial comprador faz perguntas técnicas ou busca recomendações na IA, a sua marca é citada como fonte de referência.',
  },
  {
    badge: 'ATENDIMENTO REGIONAL',
    question: 'Arthur atende presencialmente empresas de Campinas, Piracicaba e região?',
    answer:
      'Sim. Residindo no polo regional entre Campinas, Piracicaba, Americana e Santa Bárbara d\'Oeste, com presença frequente na capital paulista, realizo reuniões presenciais de alinhamento com diretorias, imersões de diagnóstico na sede da empresa e acompanhamento próximo dos times locais, combinando a agilidade do trabalho presencial com rotinas remotas eficientes.',
  },
  {
    badge: 'SOCIOLOGIA & NEGÓCIOS',
    question: 'Por que a formação em Sociologia pela UNICAMP é um diferencial na gestão de e-commerce?',
    answer:
      'A formação em Ciências Sociais pela UNICAMP (conclusão prevista para 2027) oferece instrumentos analíticos rigorosos para compreender plataformas digitais e marketplaces como ecossistemas sociotécnicos complexos. Em vez de perseguir atalhos passageiros que cansam o público e depreciam a marca, essa fundamentação permite desenhar jornadas de compra transparentes e duradouras, reduzindo o custo de aquisição (CAC) e fortalecendo o valor de vida do cliente (LTV).',
  },
]

export interface ArthurPortfolioViewProps {
  initialData?: any
}

export const ArthurPortfolioView: React.FC<ArthurPortfolioViewProps> = ({ initialData }) => {
  const [avatarSrc, setAvatarSrc] = useState('./arthur-saggioratto.jpg')
  const [enUrl, setEnUrl] = useState('/Squammata-PayloadCMS/en/arthur/')
  const [curriculoUrl, setCurriculoUrl] = useState('./curriculo_ecommerce_arthursaggioratto.pdf')

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
    initialData?.hero?.eyebrow || '15 ANOS DE OPERAÇÃO • GOVERNANÇA DE MARGEM, ARQUITETURA & AQUISIÇÃO • CAMPINAS, PIRACICABA & SÃO PAULO'
  const heroTitle =
    initialData?.hero?.title || 'Consultor de Crescimento e Rentabilidade para E-commerce'
  const heroLead =
    initialData?.hero?.lead ||
    'Atuo na identificação e eliminação de gargalos operacionais, arquiteturais e de aquisição que travam o crescimento de lojas virtuais e canais digitais. Ao longo de 15 anos transformo operações estagnadas em negócios lucrativos e previsíveis, alinhando SEO técnico, visibilidade em inteligência artificial (GEO), otimização de conversão (CRO), plataformas escaláveis e mídia de performance orientada ao lucro líquido no DRE. Atendimento consultivo e liderança operacional para empresas no interior paulista (Campinas, Piracicaba, Americana, Santa Bárbara d\'Oeste e região) e projetos nacionais.'
  const whatsappUrl = initialData?.hero?.whatsappNumber
    ? `https://wa.me/${initialData.hero.whatsappNumber}`
    : 'https://wa.me/5519993497819'
  const linkedinUrl = initialData?.hero?.linkedinUrl || 'https://linkedin.com/in/arthurnasa'
  const emailAddress = initialData?.hero?.email || 'arthur.saggioratto@gmail.com'

  const specPj =
    initialData?.hero?.specs?.pj || '31.384.814 ARTHUR SAGGIORATTO NETO ME (Consultoria Squammata)'
  const specFormacao =
    initialData?.hero?.specs?.formacao || 'Ciências Sociais com ênfase em Sociologia (UNICAMP, previsão 2027) & Marketing e Gestão de Vendas (FAAL, 2015)'
  const specFluencia =
    initialData?.hero?.specs?.fluencia || 'Português (Nativo) | Inglês (C2 Proficient para liderança e times globais)'
  const specCoreStack =
    initialData?.hero?.specs?.coreStack || 'Shopify Plus, Magento, VTEX, Tiny & Bling ERP, GA4, GSC, Semrush, Schema JSON-LD'

  const indicatorCards =
    initialData?.indicatorsSection?.cards && initialData.indicatorsSection.cards.length > 0
      ? initialData.indicatorsSection.cards
      : defaultIndicatorCards

  const faqEyebrow = initialData?.faqSection?.eyebrow || 'TRANSPARÊNCIA & MÉTODO'
  const faqTitle = initialData?.faqSection?.title || 'Perguntas Frequentes & Fundamentos da Operação'
  const faqSubtext =
    initialData?.faqSection?.subtext ||
    'Respostas diretas sobre superação de estagnação, destrave de gargalos, governança de margem e presença regional no interior paulista.'
  const faqItems =
    initialData?.faqSection?.items && initialData.faqSection.items.length > 0
      ? initialData.faqSection.items
      : defaultFaqItems

  const footerCallout =
    initialData?.footer?.callout ||
    'Aberto a conversas para consultoria de destrave e rompimento de platô, liderança executiva (Head ou Diretoria) e conselhos consultivos.'
  const footerMetaLine1 =
    initialData?.footer?.metaLine1 || "Arthur Saggioratto Neto • Base em Campinas, Piracicaba e Santa Bárbara d'Oeste, presença executiva em São Paulo (SP) • Atuação presencial, híbrida e remota"
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
            <a href="#impacto" className={styles.navLink}>Impacto &amp; DRE</a>
            <a href="#matriz" className={styles.navLink}>Matriz Técnica</a>
            <a href="#casos" className={styles.navLink}>Anatomia de Resultados</a>
            <a href="#cronologia" className={styles.navLink}>Trajetória</a>
            <a href="#contratacao" className={styles.navLink}>Contratação</a>
            <a href="#faq" className={styles.navLink}>Dúvidas &amp; Método</a>
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
              className={styles.btnPrimary}
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
              </div>

              <aside className={styles.heroRightCol}>
                <div className={styles.portraitWrapper}>
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
                OPERAÇÕES E PROJETOS IMPULSIONADOS:
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
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>INDICADORES AUDITADOS</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Métricas de Impacto em Receita e Preservação de Margem
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Métricas reais de impacto financeiro: crescimento em receita, margem protegida e ganho de eficiência no funil.
              </p>
            </div>

            <div className={styles.answerBlockWrap} style={{ marginBottom: '2rem' }}>
              <p className={`${styles.bodyFont}`} style={{ fontSize: '1rem', lineHeight: '1.6', color: '#c5a880', borderLeft: '3px solid #c5a880', paddingLeft: '1rem', margin: '0' }}>
                A mensuração de impacto operacional conduzida por Arthur Saggioratto subordina todas as métricas de tráfego e mídia paga ao lucro bruto e margem de contribuição. A governança baseada em POAS (Profit on Ad Spend) e atribuição multitoque assegura escala de receita auditável com proteção estrita do fluxo de caixa.
              </p>
            </div>

            <div className={styles.tabularGrid}>
              {indicatorCards.map((card: any, idx: number) => (
                <div key={card.id || idx} className={styles.tabularCell}>
                  <div className={`${styles.tabularValue} ${styles.monoFont}`}>
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
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>SISTEMA DE ESPECIALIDADES</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Engenharia Operacional e Governança de E-commerce
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Quatro frentes integradas de intervenção: posicionamento orgânico em buscadores e IA, engenharia de conversão, infraestrutura de plataformas com ERPs e mídia de performance subordinada ao lucro real.
              </p>
            </div>

            <div className={styles.matrixIndex}>
              {/* Pilar 01 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>01</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    SEO Técnico, Semântico &amp; Visibilidade em Inteligência Artificial (GEO / AEO)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO DIDÁTICO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Engenharia de Catálogo e Indexação:</strong> Organização de categorias (PLPs) e páginas de produto (PDPs) para que os robôs de busca rastreiem o catálogo rapidamente, sem URLs duplicadas nem desperdício de rastreamento.
                      </li>
                      <li>
                        <strong>Autoridade Tópica e Dados Estruturados:</strong> Criação de centros temáticos (Topic Clusters) orientados à intenção de compra real (E-E-A-T) e código semântico Schema.org em JSON-LD, facilitando a interpretação de robôs e humanos.
                      </li>
                      <li>
                        <strong>Presença em Motores de IA (GEO / AEO):</strong> Modelagem semântica para garantir que a marca seja compreendida, citada e indicada como resposta de referência em assistentes como Google AI Overviews, Perplexity e ChatGPT.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
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
                    Otimização de Taxa de Conversão (CRO) &amp; Experiência do Usuário
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO DIDÁTICO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Diagnóstico Qualitativo e Quantitativo:</strong> Análise de mapas de calor, gravações de sessão e funis no GA4 para identificar pontos de atrito e hesitação antes da finalização de compra.
                      </li>
                      <li>
                        <strong>Otimização de Checkout e Redução de Atrito:</strong> Reformulação do fluxo de compra para carregamento instantâneo em dispositivos móveis, checkout transparente e eliminação de etapas redundantes.
                      </li>
                      <li>
                        <strong>Hipóteses e Testes Controlados:</strong> Validação de mudanças estruturais por testes objetivos, priorizando intervenções com impacto mensurável na receita por visitante.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
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
                    Arquitetura de Plataformas, Operação B2B &amp; Marketplaces
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO DIDÁTICO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Infraestrutura e Integração Operacional:</strong> Gestão integral de lojas virtuais e migrações de plataforma, integrando catálogo, estoques descentralizados, regras tributárias e logística diretamente ao ERP da empresa.
                      </li>
                      <li>
                        <strong>Marketplaces, Seller Center &amp; Divisão de Pagamentos:</strong> Estruturação técnica para ecossistemas de marketplace com Seller Center Omnik conectado ao ERP de cada lojista, além de regras automáticas de divisão de recebíveis (split payment) em Shopify.
                      </li>
                      <li>
                        <strong>Canais Integrados e Venda Assistida:</strong> Operação comercial nos principais marketplaces (Mercado Livre, Shopee, Amazon) alinhada ao atendimento humano via WhatsApp e CRM para produtos de maior tíquete ou vendas B2B.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
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
                    Mídia de Performance, Retail Media &amp; Governança Financeira (DRE)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO DIDÁTICO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Tráfego Pago Subordinado ao Lucro Líquido:</strong> Gestão de anúncios orientada pelo Demonstrativo de Resultados (DRE), aplicando POAS (lucro gerado sobre o investimento em anúncio) em vez de focar apenas em faturamento bruto.
                      </li>
                      <li>
                        <strong>Eficiência de Leilão e Anúncios em Marketplaces:</strong> Campanhas em Google Ads (Search, PMax, Demand Gen, Shopping), Meta Ads e Retail Media com negativação semântica contínua de termos irrelevantes para blindar o orçamento.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
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
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>ANATOMIA DE RESULTADOS</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Estudos de Caso em 4 Blocos Operacionais
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Dossiê analítico auditável estruturado em Contexto Operacional, Diagnóstico de Gargalo, Intervenção Arquitetural e Impacto Financeiro Verificável.
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
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESTRUTURA AUDITÁVEL EM 4 BLOCOS
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. Contexto Operacional
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Operação de e-commerce e marketplace de café especial em expansão, com a meta de conectar dezenas de produtores e marcas artesanais de múltiplos estados brasileiros em uma única experiência fluida sob a plataforma Shopify Plus integrada ao Seller Center Omnik.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. Diagnóstico de Gargalo
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Descentralização de estoques entre produtores rurais e marcas parceiras, atrito no cálculo de frete multi-origem em tempo real, complexidade na divisão automatizada de recebíveis entre lojistas e risco de elevação desenfreada de CAC nos leilões pagos de café.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. Intervenção Arquitetural
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Implementação de esteira automatizada no Seller Center Omnik com conectores de catálogo e pedidos para ERPs de lojistas (Bling, Tiny), desenho da arquitetura de split payment nativo em Shopify, estruturação de Topic Clusters com marcação Schema.org em JSON-LD para regiões com Indicação Geográfica e alocação de verba em Google Ads balizada por margem de contribuição (POAS).
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Impacto Financeiro Verificável
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Crescimento sustentado de <strong>+66% mês a mês (MoM) em GMV</strong>, integração de <strong>mais de 100 lojistas parceiros</strong> com catálogo sincronizado e consolidação da marca como autoridade de busca orgânica e citações em assistentes de inteligência artificial (GEO/AEO).
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PAINEL DE MÉTRICAS DO CASE
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
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESTRUTURA AUDITÁVEL EM 4 BLOCOS
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. Contexto Operacional
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Plataforma SaaS global para automação de fluxos de dados e planilhas integradas, operando integralmente em língua inglesa para clientes corporativos de médio e grande porte nos Estados Unidos e Europa.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. Diagnóstico de Gargalo
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Páginas de entrada com tempos de carregamento instáveis (Core Web Vitals), canibalização semântica entre tópicos técnicos e fricção na jornada de ativação dos novos cadastros corporativos, gerando perda prematura de interesse na plataforma.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. Intervenção Arquitetural
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Condução de auditorias técnicas contínuas em Semrush e Ahrefs, saneamento de métricas LCP e CLS, reformulação da arquitetura de conteúdo em clusters temáticos orientados a soluções de automação e redesign da jornada de onboarding baseado em testes A/B e gravações de navegação.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Impacto Financeiro Verificável
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Elevação de <strong>+20% no tempo médio de sessão</strong> dos novos usuários corporativos, recuperação de posicionamentos orgânicos estratégicos para buscas internacionais de alta intenção e redução drástica do churn técnico no funil de ativação.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PAINEL DE MÉTRICAS DO CASE
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
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESTRUTURA AUDITÁVEL EM 4 BLOCOS
                  </div>
                  <div className={styles.caseBlocksGrid}>
                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        1. Contexto Operacional
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Operação pioneira no varejo e atacado B2B de máquinas de espresso profissionais e residenciais, suprimentos e assistência técnica, lidando com sazonalidades extremas de final de ano e alta concorrência nacional.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        2. Diagnóstico de Gargalo
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Dependência excessiva de leilões pagos de Google Shopping em períodos promocionais (Black Friday), nos quais a escalada do custo por clique (CPC) corrói a margem unitária de produtos com tíquete médio elevado.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        3. Intervenção Arquitetural
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Construção de ecossistema de conteúdo editorial técnico e guias definitivos de equipamentos e manutenção, arquitetura de catálogo semântico na plataforma Magento, regras de precificação inteligente no ERP Bling e implantação de canal consultivo via WhatsApp para vendas complexas de alto valor.
                      </p>
                    </div>

                    <div className={styles.caseOpBlock}>
                      <h5 className={`${styles.opBlockTitle} ${styles.monoFont}`}>
                        4. Impacto Financeiro Verificável
                      </h5>
                      <p className={`${styles.opBlockText} ${styles.bodyFont}`}>
                        Crescimento linear de <strong>+20% ao ano (YoY) durante 10 anos consecutivos</strong>, geração de <strong>45% do faturamento da Black Friday via tráfego orgânico gratuito</strong> (sem custo de clique), <strong>+50% em tráfego qualificado</strong> e <strong>+30% na conversão geral do e-commerce</strong>.
                      </p>
                    </div>
                  </div>

                  <blockquote className={`${styles.caseQuote} ${styles.bodyFont}`}>
                    &ldquo;A estratégia de SEO aliada à produção de conteúdos de qualidade tem impulsionado não só o nosso crescimento orgânico, como o da loja como um todo, reduzindo a dependência de mídia paga.&rdquo;
                    <footer className={styles.monoFont}>CITAÇÃO VERIFICADA DE MERCADO • BRIDGE SEO</footer>
                  </blockquote>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PAINEL DE MÉTRICAS DO CASE
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
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>CRONOLOGIA RIGOROSA</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Linha do Tempo Executiva e Trajetória
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                15 anos de liderança técnica e de negócios em e-commerce, consultoria e produtos digitais.
              </p>
            </div>

            <div className={styles.answerBlockWrap} style={{ marginBottom: '2rem' }}>
              <p className={`${styles.bodyFont}`} style={{ fontSize: '1rem', lineHeight: '1.6', color: '#c5a880', borderLeft: '3px solid #c5a880', paddingLeft: '1rem', margin: '0' }}>
                A trajetória profissional de Arthur Saggioratto é discriminada por modalidade de contratação (CLT, dedicação executiva integral, contratos internacionais e consultoria técnica especializada), garantindo transparência contratual e foco em entregas verificáveis.
              </p>
            </div>

            <div className={styles.casesDossier}>
              {/* Timeline 1: Squammata */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    2024 a Presente (Em Atividade)
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Squammata
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Fundador &amp; Diretor de Estratégia
                  </div>
                  <div className={`${styles.monoFont}`} style={{ fontSize: '0.78rem', color: '#c5a880', marginTop: '0.35rem' }}>
                    <strong>Modalidade:</strong> Veículo Jurídico Corporativo e Hub de Atuação Consultiva Estratégica
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <a
                      href="https://empresas.serasaexperian.com.br/consulta-gratis/31384814-ARTHUR-SAGGIORATTO-NETO-ME-31384814000109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Registro PJ (CNPJ 31.384.814/0001-09) ↗
                    </a>
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESCOPO DE ATUAÇÃO
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Prestação de serviços de inteligência em mídia paga, retail media e governança de DRE para clientes corporativos.
                    </li>
                    <li>
                      Arquitetura de soluções enterprise, consultoria técnica educativa e governança de margem de contribuição (DRE) para operações digitais, indústrias e varejo multicanal.
                    </li>
                    <li>
                      Diagnóstico de gargalos operacionais e desenvolvimento de sistemas sob medida com Next.js, Payload CMS, Shopify Plus e VTEX.
                    </li>
                  </ul>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    FOCO ESTRATÉGICO
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Governança DRE</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Arquitetura Next.js</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Shopify Plus</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Advisory Executivo</span>
                  </div>
                </div>
              </article>

              {/* Timeline 2: Rua do Café */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Maio 2026
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Rua do Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Liderança Estratégica e Head of Marketing &amp; E-commerce
                  </div>
                  <div className={`${styles.monoFont}`} style={{ fontSize: '0.78rem', color: '#c5a880', marginTop: '0.35rem' }}>
                    <strong>Modalidade:</strong> Liderança Estratégica e Head of Marketing &amp; E-commerce (Dedicação Executiva)
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESCOPO DE ATUAÇÃO
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Condução da expansão de tráfego, marketplace com Shopify Plus e Seller Center Omnik, conectando mais de 100 lojistas parceiros e gerenciando orçamentos de tração balizados por margem de contribuição.
                    </li>
                    <li>
                      Escala acelerada de faturamento alcançando <strong>+66% MoM em GMV</strong> e pioneirismo na estruturação de split payment nativo.
                    </li>
                  </ul>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    FOCO ESTRATÉGICO
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>+66% MoM</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Shopify Plus</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Omnik</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Split Payment</span>
                  </div>
                </div>
              </article>

              {/* Timeline 3: Sheetgo */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Outubro 2024
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Sheetgo
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Technical SEO &amp; Growth Lead
                  </div>
                  <div className={`${styles.monoFont}`} style={{ fontSize: '0.78rem', color: '#c5a880', marginTop: '0.35rem' }}>
                    <strong>Modalidade:</strong> Contrato Internacional de Especialista Técnico / Technical SEO &amp; CRO Lead (Operação Global 100% em Inglês)
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESCOPO DE ATUAÇÃO
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Consultoria de crescimento orgânico e retenção para ecossistema SaaS B2B global conduzida 100% em língua inglesa para mercados corporativos dos EUA e Europa.
                    </li>
                    <li>
                      Otimização de Core Web Vitals, reestruturação semântica de tópicos e ganho de <strong>+20% no tempo médio de sessão</strong> de usuários aferido via testes A/B no GA4.
                    </li>
                  </ul>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    FOCO ESTRATÉGICO
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>100% English</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Global SaaS</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>+20% Sessão</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Core Web Vitals</span>
                  </div>
                </div>
              </article>

              {/* Timeline 4: Máquinas & Café */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2014 a Janeiro 2024 (10 Anos)
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Máquinas &amp; Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Diretor Operacional &amp; E-commerce Manager
                  </div>
                  <div className={`${styles.monoFont}`} style={{ fontSize: '0.78rem', color: '#c5a880', marginTop: '0.35rem' }}>
                    <strong>Modalidade:</strong> Direção Operacional e Gestão Executiva End-to-End (Dedicação Integral)
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESCOPO DE ATUAÇÃO
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Liderança do canal de máquinas de café espresso B2C e B2B, sustentando expansão linear de <strong>20% ao ano ao longo de uma década</strong> via Magento, automação de preços dinâmicos e logística integrada ao ERP.
                    </li>
                    <li>
                      Estratégia de SEO técnico que garantiu <strong>45% do faturamento da Black Friday via tráfego orgânico</strong> gratuito com fluxo de caixa saudável.
                    </li>
                  </ul>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    FOCO ESTRATÉGICO
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>10 Anos</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>+20% YoY</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>45% Black Friday</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Magento</span>
                  </div>
                </div>
              </article>

              {/* Timeline 5: Cope Calçados */}
              <article className={styles.caseDossierRow}>
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    2020 a 2023
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Cope Calçados
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Consultor de E-commerce e Performance
                  </div>
                  <div className={`${styles.monoFont}`} style={{ fontSize: '0.78rem', color: '#c5a880', marginTop: '0.35rem' }}>
                    <strong>Modalidade:</strong> Consultoria Técnica e Reestruturação de E-commerce
                  </div>
                </div>

                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    ESCOPO DE ATUAÇÃO
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Otimização técnica do Google Merchant Center e estruturação de campanhas em Google Ads (Search, Shopping e Performance Max).
                    </li>
                    <li>
                      Integração de catálogo e inventário omnichannel, ajustando a alocação de mídia por margem bruta de cada categoria de calçados.
                    </li>
                  </ul>
                </div>

                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    FOCO ESTRATÉGICO
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Google Ads</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Merchant Center</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Performance Max</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Omnichannel</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: FUNDAMENTAÇÃO ACADÊMICA & SOCIOLOGIA DA TÉCNICA */}
        <section className={styles.academicSection} id="formacao">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>BAGAGEM EPISTEMOLÓGICA &amp; PRODUÇÃO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Fundamentação Acadêmica, Sociologia da Técnica &amp; Publicações
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Compreensão das dimensões sociotécnicas, ecossistemas de confiança e autoridade semântica para negócios duradouros.
              </p>
            </div>

            <div className={styles.academicGrid}>
              <div className={styles.academicLeftBlock}>
                <h3 className={`${styles.blockHeading} ${styles.headingFont}`}>
                  Formação Acadêmica &amp; Epistemologia
                </h3>

                <div className={styles.institutionItem}>
                  <div className={`${styles.institutionMeta} ${styles.monoFont}`}>
                    UNICAMP • UNIVERSIDADE ESTADUAL DE CAMPINAS (Previsão 2027)
                  </div>
                  <h4 className={`${styles.degreeTitle} ${styles.headingFont}`}>
                    Bacharelado em Ciências Sociais (Sociologia)
                  </h4>
                  <p className={`${styles.degreeDesc} ${styles.bodyFont}`}>
                    Pesquisa e aplicação da sociologia da técnica e do consumo à arquitetura de negócios digitais. Compreendo plataformas, algoritmos e funis de conversão como sistemas sociotécnicos. A prioridade é a governança ética de dados, soberania dos canais da marca e crescimento financeiramente sustentável.
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
                    Formação em gestão de canais de distribuição, precificação estratégica, pesquisa de mercado quantitativa e estruturação de esteiras comerciais.
                  </p>
                </div>
              </div>

              <div className={styles.academicRightBlock}>
                <h3 className={`${styles.blockHeading} ${styles.headingFont}`}>
                  Publicações &amp; Construção de Autoridade Semântica
                </h3>

                <div className={styles.editorialArticlesList}>
                  <article className={styles.editorialArticleCard}>
                    <div className={`${styles.articleNumber} ${styles.monoFont}`}>01</div>
                    <div className={styles.articleBody}>
                      <h4 className={`${styles.articleTitle} ${styles.headingFont}`}>
                        Arquivo de Autor &amp; Estudos de Mercado Cafeeiro
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Artigos técnicos conectando origem produtiva, métodos de torra, extração e hábitos de consumo no ecossistema cafeeiro nacional.
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
                        Mapeamento Semântico: Muzambinho e o Sudoeste de Minas
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Estruturação de cluster temático regional e relevância geográfica para busca orgânica com dados de terroir e cafeicultura familiar.
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
                        Indicações Geográficas e Terroir de São Paulo
                      </h4>
                      <p className={`${styles.articleExcerpt} ${styles.bodyFont}`}>
                        Conteúdo aprofundado alinhado às diretrizes E-E-A-T e indexação generativa sobre rastreabilidade e origens controladas.
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

        {/* SEÇÃO 8: CONTRATAÇÃO & MODELOS DE ATUAÇÃO */}
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
                Atuação adaptada ao momento da sua empresa: destrave rápido de gargalos operacionais e superação de estagnação via consultoria técnica ou liderança executiva contínua.
              </p>
            </div>

            <div className={styles.engagementGrid}>
              {/* Modelo A */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>MODELO A</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Consultoria de Rompimento de Platô &amp; Destrave de Crescimento
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Diagnóstico e intervenção direta para empresas que atingiram um teto de faturamento ou enfrentam estagnação nas vendas online. Identificamos com precisão os gargalos que travam a escala: falhas de indexação orgânica, fricções no checkout, descompasso entre estoque e ERP (Bling, Tiny), dependência excessiva de anúncios pagos e erosão de margem no DRE. Elaboramos e executamos um plano de ação prático para destravar o canal, recuperar a rentabilidade e estabelecer as bases para um novo ciclo de expansão sustentada.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  SPRINT DE DIAGNÓSTICO (3 A 4 SEMANAS) OU ACOMPANHAMENTO DE DESTRAVE (3 A 6 MESES) • ATENDIMENTO REGIONAL (CAMPINAS, PIRACICABA E REGIÃO) OU REMOTO
                </div>
              </div>

              {/* Modelo B */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>MODELO B</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Liderança Executiva &amp; Transição Operacional (Head / Diretor)
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Para médias e grandes operações que buscam um executivo sênior para comandar a divisão de comércio eletrônico, reestruturar o canal próprio (Shopify Plus, VTEX, Magento) ou liderar uma transição multicanal. Atuação com dedicação integral ou fractional na governança de DRE, gestão de equipes internas e agências parceiras, expansão de catálogo e relacionamento com fornecedores.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  CONTRATAÇÃO EXECUTIVA (CLT / PJ) OU FRACTIONAL HEAD • PRESENÇA HÍBRIDA (SÃO PAULO E POLO DE CAMPINAS)
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
                  Arquitetura e resultados / Consultoria de crescimento e rentabilidade
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
              RENDERIZAÇÃO ESTÁTICA • SEM RASTREADORES INVASIVOS • SCHEMA.ORG JSON-LD GRAPH
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArthurPortfolioView
