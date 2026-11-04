'use client'

import React, { useState, useEffect } from 'react'
import styles from './arthur.module.scss'

const CURRICULO_PDF_URL = 'https://drive.google.com/file/d/1kqXFuC4SN-vlFMez0RtELHqUe9Wk7RMr/view?usp=sharing'

const defaultIndicatorCards = [
  {
    value: '+66% MoM em GMV',
    label: 'ESCALA DE RECEITA • RUA DO CAFÉ',
    description:
      'Crescimento mensal sustentado no faturamento da Rua do Café. O resultado veio da alocação de mídia paga no Google e Meta Ads pautada na margem de cada produto, somada a melhorias contínuas na conversão do site.',
  },
  {
    value: '45% na Black Friday via Orgânico',
    label: 'PROTEÇÃO DE MARGEM • SEO TÉCNICO',
    description:
      'Fatia do faturamento gerada por busca orgânica no pico sazonal de vendas. A maturidade semântica do catálogo protegeu o caixa contra a explosão do custo por clique (CPC) nos leilões de anúncios.',
  },
  {
    value: '10 Anos (+20% YoY)',
    label: 'CRESCIMENTO LINEAR • MÁQUINAS & CAFÉ',
    description:
      'Uma década de crescimento contínuo de 20% ao ano na Máquinas & Café (2014 a 2024), consolidando a operação no mercado nacional de máquinas de espresso para pessoas físicas e empresas.',
  },
  {
    value: '+50% Tráfego / +30% Conversão',
    label: 'EFICIÊNCIA DE FUNIL • AQUISIÇÃO & CRO',
    description:
      'Mais visitantes qualificados com maior taxa de fechamento. A automação de canais ampliou o tráfego em 50%, enquanto a eliminação de dúvidas e fricções no checkout aumentou a conversão de vendas em 30%.',
  },
  {
    value: '+20% em Tempo de Sessão',
    label: 'RETENÇÃO B2B SAAS • SHEETGO (GLOBAL)',
    description:
      'Aumento no tempo de uso e exploração da plataforma global de software Sheetgo. O redesign da interface, orientado por dados de navegação e testes práticos, facilitou a ativação dos usuários.',
  },
  {
    value: '+100 Lojistas Integrados',
    label: 'ECOSSISTEMA MARKETPLACE • SHOPIFY PLUS & OMNIK',
    description:
      'Estruturação técnica e comercial do marketplace em Shopify Plus com Seller Center Omnik, conectando mais de uma centena de marcas parceiras com estoque e pedidos sincronizados ao ERP.',
  },
]

const defaultFaqItems = [
  {
    badge: 'FINANÇAS & DRE',
    question: 'O que significa subordinar o e-commerce à saúde do negócio (DRE e POAS)?',
    answer:
      'Muitas operações comemoram um ROAS elevado nos painéis de anúncios enquanto a conta bancária da empresa sofre. Subordinar a operação ao DRE significa gerenciar os canais de venda com base no lucro líquido que realmente sobra no caixa, após abater o custo da mercadoria (CMV), taxas de gateway, fretes e tributos. Trabalhamos orientados pelo POAS (Profit on Ad Spend) para assegurar que cada real investido gere margem de contribuição saudável.',
  },
  {
    badge: 'BUSCA GENERATIVA',
    question: 'Como funciona a preparação para busca em Inteligência Artificial (GEO e AEO)?',
    answer:
      'Motores como ChatGPT, Perplexity e Google AI Overviews não leem páginas como um leitor comum: eles identificam entidades, autoridades e relações conceituais. Estruturamos os dados do seu e-commerce com marcações semânticas avançadas em Schema.org (JSON-LD) e produzimos conteúdos com autoridade comprovada (E-E-A-T). Com isso, quando um potencial cliente faz perguntas técnicas ou busca recomendações na IA, a sua marca é citada como fonte primária.',
  },
  {
    badge: 'MODELO DE ENGAJAMENTO',
    question: 'Qual o formato ideal de contratação para o momento da minha empresa?',
    answer:
      'Se a sua empresa precisa de direcionamento executivo contínuo e gestão de metas, a posição de Head Fracionado ou Integral é a mais recomendada. Caso você já possua um time executor e necessite de governança de margem e esteiras comerciais, a Consultoria Estratégica Continuada oferece reuniões e acompanhamento quinzenal. Se o desafio for resolver um gargalo pontual de SEO, checkout ou mídia paga, os Sprints de Auditoria Técnica entregam diagnóstico e plano de ação em até quatro semanas.',
  },
  {
    badge: 'SOCIOLOGIA & TÉCNICA',
    question: 'Por que a formação em Sociologia pela UNICAMP é um diferencial na gestão digital?',
    answer:
      'A Sociologia capacita a enxergar plataformas, marketplaces e algoritmos como ecossistemas sociotécnicos complexos. Em vez de perseguir atalhos passageiros que queimam a reputação da marca e cansam o cliente, essa fundamentação permite desenhar jornadas de compra éticas, transparentes e focadas na fidelização de longo prazo, reduzindo o custo de aquisição (CAC) e elevando o valor de vida do cliente (LTV).',
  },
]

export interface ArthurPortfolioViewProps {
  initialData?: any
}

export const ArthurPortfolioView: React.FC<ArthurPortfolioViewProps> = ({ initialData }) => {
  const [avatarSrc, setAvatarSrc] = useState('./arthur-saggioratto.jpg')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isGhPages = window.location.pathname.includes('Squammata-PayloadCMS')
      if (isGhPages) {
        setAvatarSrc('/Squammata-PayloadCMS/arthur-saggioratto.jpg')
      } else {
        setAvatarSrc('./arthur-saggioratto.jpg')
      }
    }
  }, [])

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

  // Resolução dinâmica de dados com fallback para os valores canônicos
  const heroEyebrow =
    initialData?.hero?.eyebrow || '15 ANOS DE OPERAÇÃO • B2C, B2B & GLOBAL SAAS • SÃO PAULO'
  const heroTitle =
    initialData?.hero?.title || 'Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional.'
  const heroLead =
    initialData?.hero?.lead ||
    'Ajudo empresas a crescerem com previsibilidade e lucro real. Há 15 anos estruturo e lidero operações digitais de ponta a ponta, conectando engenharia de SEO, visibilidade em inteligência artificial (GEO), otimização de conversão (CRO) e mídia paga. O princípio orientador é simples: nenhuma tecnologia ou anúncio se justifica se não proteger a margem líquida e o caixa da empresa.'
  const whatsappUrl = initialData?.hero?.whatsappNumber
    ? `https://wa.me/${initialData.hero.whatsappNumber}`
    : 'https://wa.me/5519993497819'
  const curriculoUrl = initialData?.hero?.curriculoPdfUrl || CURRICULO_PDF_URL
  const linkedinUrl = initialData?.hero?.linkedinUrl || 'https://linkedin.com/in/arthurnasa'
  const emailAddress = initialData?.hero?.email || 'arthur.saggioratto@gmail.com'

  const specPj =
    initialData?.hero?.specs?.pj || '31.384.814 ARTHUR SAGGIORATTO NETO ME (Consultoria Squammata)'
  const specFormacao =
    initialData?.hero?.specs?.formacao || 'Ciências Sociais e Sociologia (UNICAMP) & Marketing e Gestão de Vendas (FAAL)'
  const specFluencia =
    initialData?.hero?.specs?.fluencia || 'Português (Nativo) | Inglês (C2 Proficient para liderança e times globais)'
  const specCoreStack =
    initialData?.hero?.specs?.coreStack || 'Shopify Plus • Magento • VTEX • GA4 • GSC • Semrush • Ahrefs • Schema JSON-LD'

  const indicatorCards =
    initialData?.indicatorsSection?.cards && initialData.indicatorsSection.cards.length > 0
      ? initialData.indicatorsSection.cards
      : defaultIndicatorCards

  const faqEyebrow = initialData?.faqSection?.eyebrow || 'TRANSPARÊNCIA & MÉTODO'
  const faqTitle = initialData?.faqSection?.title || 'Perguntas Frequentes & Fundamentos da Operação'
  const faqSubtext =
    initialData?.faqSection?.subtext ||
    'Respostas diretas e didáticas sobre governança de margem, visibilidade em inteligência artificial e modelos de parceria.'
  const faqItems =
    initialData?.faqSection?.items && initialData.faqSection.items.length > 0
      ? initialData.faqSection.items
      : defaultFaqItems

  const footerCallout =
    initialData?.footer?.callout ||
    'Aberto a conversas para liderança executiva (Head ou Diretoria), conselhos consultivos e projetos de reestruturação de e-commerce e SEO.'
  const footerMetaLine1 =
    initialData?.footer?.metaLine1 || "Arthur Saggioratto Neto • Santa Bárbara d'Oeste / Campinas, SP"
  const footerMetaLine2 =
    initialData?.footer?.metaLine2 || 'CNPJ: 31.384.814/0001-09 (31.384.814 ARTHUR SAGGIORATTO NETO ME)'

  return (
    <div className={styles.portfolioPage} data-portfolio-editorial="true">
      {/* 1. HEADER FIXO, MINIMALISTA COM BORDA INFERIOR DE 1PX */}
      <header className={styles.editorialHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerBrand}>
            <a href="#inicio" className={styles.brandTitle}>
              ARTHUR SAGGIORATTO
            </a>
            <span className={`${styles.brandTag} ${styles.monoFont}`}>
              HEAD OF E-COMMERCE, SEO &amp; GROWTH
            </span>
          </div>

          <nav className={styles.headerNav} aria-label="Navegação Editorial">
            <a href="#impacto" className={styles.navLink}>Impacto &amp; DRE</a>
            <a href="#matriz" className={styles.navLink}>Matriz Técnica</a>
            <a href="#casos" className={styles.navLink}>Estudos de Caso</a>
            <a href="#formacao" className={styles.navLink}>Formação</a>
            <a href="#faq" className={styles.navLink}>Dúvidas &amp; Método</a>
          </nav>

          <div className={styles.headerActions}>
            <a
              href={curriculoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSecondary} ${styles.headerCurriculoBtn} ${styles.monoFont}`}
            >
              <span>Imprimir Currículo (PDF) ↗</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <span>Conversar no WhatsApp ↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* SEÇÃO 1: HERO SECTION ASSIMÉTRICO (8 COLUNAS / 4 COLUNAS) */}
        <section className={styles.heroSection}>
          <div className={styles.editorialContainer}>
            <div className={styles.heroGrid}>
              {/* Coluna Esquerda: 8 Colunas */}
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

              {/* Coluna Direita: 4 Colunas (Dossiê e Especificações Executivas) */}
              <aside className={styles.heroRightCol}>
                <div className={styles.portraitWrapper}>
                  <img
                    src={avatarSrc}
                    alt="Arthur Saggioratto: Head of E-commerce, SEO & Growth"
                    width={400}
                    height={500}
                    className={styles.editorialPortrait}
                    onError={handleImageFallback}
                    loading="eager"
                  />
                  <div className={`${styles.portraitCaption} ${styles.monoFont}`}>
                    ARTHUR SAGGIORATTO &bull; BASE SÃO PAULO
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

        {/* SEÇÃO 2: BARRA DE CREDENCIAIS E OPERAÇÕES (LOGO STRIP) */}
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

        {/* SEÇÃO 3: INDICADORES AUDITADOS DE NEGÓCIO (GRADE TABULAR 2x3) */}
        <section className={styles.bigNumbersSection} id="impacto">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>INDICADORES AUDITADOS</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Indicadores Auditados de Operação e Margem
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Métricas reais de impacto financeiro: crescimento em receita, margem protegida e ganho de eficiência no funil.
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
                  <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: MATRIZ DE COMPETÊNCIAS E ENGENHARIA (ÍNDICE TÉCNICO 01 A 04) */}
        <section className={styles.matrixSection} id="matriz">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>SISTEMA DE ESPECIALIDADES</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Matriz de Competências e Engenharia de E-commerce
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Quatro frentes integradas de atuação prática: posicionamento orgânico em buscadores e IA, conversão de usuários, sustentação técnica de plataformas e governança de margem líquida.
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
                        <strong>Engenharia de Catálogo e Indexação:</strong> Organização de categorias (PLPs) e páginas de produto (PDPs) para que os robôs do Google rastreiem o catálogo rapidamente, sem URLs duplicadas nem desperdício de rastreamento.
                      </li>
                      <li>
                        <strong>Autoridade Tópica e Dados Estruturados:</strong> Criação de centros temáticos (Topic Clusters) orientados à intenção de compra real (E-E-A-T) e código semântico Schema.org em JSON-LD (Product, Offer, Organization, FAQPage, Article), facilitando a leitura de robôs e humanos.
                      </li>
                      <li>
                        <strong>Presença em Motores de IA (GEO / AEO):</strong> Modelagem de dados para garantir que a marca seja compreendida, citada e indicada como resposta de referência em assistentes como Google AI Overviews, Perplexity e ChatGPT.
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
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Core Web Vitals (LCP, INP, CLS)</span>
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
                    Otimização da Taxa de Conversão (CRO) &amp; Experiência do Cliente (UX)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO DIDÁTICO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Diagnóstico de Fricção no Funil:</strong> Mapeamento visual e numérico dos pontos de hesitação e abandono, da vitrine até o pagamento, identificando onde o visitante perde a confiança ou encontra atrito.
                      </li>
                      <li>
                        <strong>Testes Práticos com Hipótese Causal:</strong> Experimentação orientada por dados de comportamento para validar alterações na interface, elevando a taxa de adição ao carrinho e o tíquete médio com base em evidências reais.
                      </li>
                      <li>
                        <strong>Medição Confiável e Privacidade:</strong> Coleta de dados server-side via Google Tag Manager e GA4, combinada a ferramentas de análise sem cookies invasivos, em total conformidade com a LGPD.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>GA4</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Tag Manager (Server-Side)</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Heatmaps &amp; Gravação de Sessão</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Plausible</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Matomo</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Testes A/B</span>
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
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Split Payment (Shopify)</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Magento (Adobe Commerce)</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>VTEX</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>WooCommerce</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Bling &amp; Tiny ERP</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Mercado Livre / Shopee / Amazon</span>
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
                        <strong>Tráfego Pago Subordinado ao Lucro Líquido:</strong> Gestão de anúncios orientada pelo Demonstrativo de Resultados (DRE), e não por métricas cosméticas de painel. Aplicação de POAS (lucro gerado sobre o investimento em anúncio) em vez de focar apenas em faturamento bruto.
                      </li>
                      <li>
                        <strong>Eficiência de Leilão e Anúncios em Marketplaces:</strong> Campanhas em Google Ads (Pesquisa, PMax, Demand Gen, Shopping), Meta Ads e Retail Media com negativação semântica contínua de termos irrelevantes para blindar o orçamento de mídia.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Ads (Search, PMax, Demand Gen, Shopping)</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Meta Ads</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>TikTok Ads</span>
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

        {/* SEÇÃO 5: TRAJETÓRIA EXECUTIVA & ESTUDOS DE CASO (DOSSIÊ TÉCNICO EM 3 ZONAS) */}
        <section className={styles.casesSection} id="casos">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>HISTÓRICO OPERACIONAL AUDITÁVEL</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Estudos de Caso e Trajetória Executiva
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Dossiê analítico detalhando desafios de negócios, intervenção arquitetural e evidências auditáveis de resultado.
              </p>
            </div>

            <div className={styles.casesDossier}>
              {/* Case 01: Rua do Café */}
              <article className={styles.caseDossierRow}>
                {/* Zona A: Metadados */}
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Maio 2026
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Rua do Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Head of Marketing &amp; E-commerce
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

                {/* Zona B: Intervenção & Resultados */}
                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    INTERVENÇÃO ARQUITETURAL &amp; RESULTADOS
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Assumi a gestão executiva da operação digital e a alocação de mídia paga no Google Ads e Meta Ads, orientando os investimentos pela margem de cada categoria. A operação alcançou um crescimento consistente de <strong>66% mês a mês (MoM) em GMV</strong>.
                    </li>
                    <li>
                      Na frente orgânica, estruturei a arquitetura semântica da loja, os dados estruturados em JSON-LD e clusters temáticos para cafés especiais e regiões com Indicação Geográfica. Essa estratégia reduziu o custo de aquisição de clientes e garantiu citações em motores de busca generativos (GEO/AEO).
                    </li>
                    <li>
                      Liderei o planejamento e a integração de <strong>mais de 100 lojistas parceiros</strong> via <strong>Seller Center Omnik</strong> com sincronização direta aos ERPs de cada vendedor, desenhando também a solução técnica de <strong>split payment nativo em Shopify</strong>.
                    </li>
                  </ul>
                </div>

                {/* Zona C: Painel de Métricas & Stack */}
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
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Solução em Shopify</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Shopify Plus</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Seller Center Omnik</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Split Payment</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Google Ads</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Meta Ads</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>JSON-LD Schema</span>
                  </div>
                </div>
              </article>

              {/* Case 02: Sheetgo */}
              <article className={styles.caseDossierRow}>
                {/* Zona A: Metadados */}
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2024 a Outubro 2024
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Sheetgo
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    SEO &amp; CRO Optimization Specialist (Operação Global 100% em Inglês)
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

                {/* Zona B: Intervenção & Resultados */}
                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    INTERVENÇÃO ARQUITETURAL &amp; RESULTADOS
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Atuando integralmente em inglês junto a equipes internacionais de produto e engenharia, conduzi a expansão orgânica global da plataforma SaaS por meio de auditorias técnicas contínuas com <strong>Semrush</strong> e <strong>Ahrefs</strong>, dados estruturados Schema e redes de conteúdo voltadas à automação de dados.
                    </li>
                    <li>
                      A partir do diagnóstico com mapas de calor e gravações de navegação, redesenhamos a interface e a jornada de ativação dos novos usuários, gerando um ganho de <strong>20% no tempo médio de sessão</strong>.
                    </li>
                    <li>
                      Alinhei o planejamento de conteúdo orgânico diretamente às principais dúvidas e necessidades dos usuários corporativos, transformando buscas técnicas em engajamento real com o software.
                    </li>
                  </ul>
                </div>

                {/* Zona C: Painel de Métricas & Stack */}
                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PAINEL DE MÉTRICAS DO CASE
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>+20%</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Retenção de Sessão</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>100% EN</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Global B2B SaaS</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>CRO &amp; A/B</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Otimização de Ativação</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Semrush</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Ahrefs</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Heatmaps</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Testes A/B</span>
                  </div>
                </div>
              </article>

              {/* Case 03: Máquinas & Café */}
              <article className={styles.caseDossierRow}>
                {/* Zona A: Metadados */}
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    Janeiro 2014 a Janeiro 2024 (10 Anos)
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Máquinas &amp; Café
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    E-commerce &amp; Marketplaces Manager
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

                {/* Zona B: Intervenção & Resultados */}
                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    INTERVENÇÃO ARQUITETURAL &amp; RESULTADOS
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Liderei a operação comercial e técnica ao longo de dez anos, cuidando de catálogo, estoque, logística, atendimento e tecnologia. A empresa manteve um <strong>crescimento linear de 20% ao ano (YoY)</strong>, tornando-se referência nacional em equipamentos e máquinas de café espresso para residências e empresas.
                    </li>
                    <li>
                      Gerenciei a evolução da plataforma Magento integrada a rotinas de precificação inteligente e ERPs, garantindo estabilidade operacional durante altas temporadas de vendas e na integração com marketplaces.
                    </li>
                    <li>
                      O trabalho combinado de conteúdo especializado, SEO e otimização de conversão gerou <strong>+50% em tráfego qualificado</strong>, <strong>+30% na conversão do site</strong> e fez com que <strong>45% do faturamento da Black Friday viesse diretamente da busca orgânica</strong>, sem dependência de anúncios pagos.
                    </li>
                  </ul>
                  <blockquote className={`${styles.caseQuote} ${styles.bodyFont}`}>
                    &ldquo;A estratégia de SEO aliada à produção de conteúdos de qualidade tem impulsionado não só o nosso crescimento orgânico, como o da loja como um todo, reduzindo a dependência de mídia paga.&rdquo;
                    <footer className={styles.monoFont}>CITAÇÃO VERIFICADA DE MERCADO &bull; BRIDGE SEO</footer>
                  </blockquote>
                </div>

                {/* Zona C: Painel de Métricas & Stack */}
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
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>SEO E-commerce</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Bling ERP</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Mercado Livre</span>
                  </div>
                </div>
              </article>

              {/* Case 04: Squammata Consultoria */}
              <article className={styles.caseDossierRow}>
                {/* Zona A: Metadados */}
                <div className={styles.zoneA}>
                  <div className={`${styles.casePeriod} ${styles.monoFont}`}>
                    2018 a Presente
                  </div>
                  <h3 className={`${styles.caseCompany} ${styles.headingFont}`}>
                    Squammata Consultoria &amp; Operações Estratégicas
                  </h3>
                  <div className={`${styles.caseRole} ${styles.monoFont}`}>
                    Consultor Sênior de E-commerce, Growth, SEO Técnico &amp; Retail Media
                  </div>
                  <div className={styles.caseAuditLinks}>
                    <a
                      href="https://www.lojas360.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Lojas 360 EPI (lojas360.com.br) ↗
                    </a>
                    <a
                      href="https://empresas.serasaexperian.com.br/consulta-gratis/31384814-ARTHUR-SAGGIORATTO-NETO-ME-31384814000109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.auditLink}
                    >
                      Registro PJ (31.384.814/0001-09) ↗
                    </a>
                  </div>
                </div>

                {/* Zona B: Intervenção & Resultados */}
                <div className={styles.zoneB}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    INTERVENÇÃO ARQUITETURAL &amp; RESULTADOS
                  </div>
                  <ul className={`${styles.caseBulletList} ${styles.bodyFont}`}>
                    <li>
                      Consultoria executiva e diagnóstico técnico para empresas de varejo e indústria, com atuação prática em marcas como <strong>Lojas 360 EPI</strong> e <strong>Cope Calçados</strong>.
                    </li>
                    <li>
                      Auditoria financeira de mídia e Unit Economics (DRE), reorganizando contas de Google Ads (PMax, Demand Gen e Pesquisa) com exclusão metódica de termos sem conversão e direcionamento de verba para produtos com maior lucro líquido (POAS).
                    </li>
                    <li>
                      Criação de fluxos de atendimento com WhatsApp comercial integrado ao CRM para vendas consultivas, além de gestão de presença e campanhas nos canais de Retail Media (Mercado Livre, Shopee e Amazon Ads).
                    </li>
                  </ul>
                </div>

                {/* Zona C: Painel de Métricas & Stack */}
                <div className={styles.zoneC}>
                  <div className={`${styles.zoneHeaderLabel} ${styles.monoFont}`}>
                    PAINEL DE MÉTRICAS DO CASE
                  </div>
                  <div className={styles.metricCallouts}>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>POAS</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Foco em Lucro Real</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>B2B &amp; B2C</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Retail Media Multi-canal</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>DRE / P&amp;L</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Auditoria Técnica Rigorosa</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Google Ads</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Retail Media</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>WhatsApp CRM</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Unit Economics</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: FUNDAMENTAÇÃO ACADÊMICA, SOCIOLOGIA DA TÉCNICA & PRODUÇÃO EDITORIAL */}
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
              {/* Bloco Esquerdo: Formação e Epistemologia */}
              <div className={styles.academicLeftBlock}>
                <h3 className={`${styles.blockHeading} ${styles.headingFont}`}>
                  Formação Acadêmica &amp; Epistemologia
                </h3>

                <div className={styles.institutionItem}>
                  <div className={`${styles.institutionMeta} ${styles.monoFont}`}>
                    UNICAMP &bull; UNIVERSIDADE ESTADUAL DE CAMPINAS (2026)
                  </div>
                  <h4 className={`${styles.degreeTitle} ${styles.headingFont}`}>
                    Bacharelado em Ciências Sociais (Sociologia)
                  </h4>
                  <p className={`${styles.degreeDesc} ${styles.bodyFont}`}>
                    Pesquisa e aplicação da sociologia da técnica e do consumo à arquitetura de negócios digitais. Compreendo plataformas, algoritmos e funis de conversão como sistemas sociotécnicos. A prioridade é a governança ética de dados (respeito à privacidade), autonomia dos canais da marca e crescimento financeiramente sustentável, inspirado no modelo das empresas Zebra.
                  </p>
                </div>

                <div className={styles.institutionItem}>
                  <div className={`${styles.institutionMeta} ${styles.monoFont}`}>
                    FAAL &bull; FACULDADE DE ADMINISTRAÇÃO E ARTES DE LIMEIRA (2015)
                  </div>
                  <h4 className={`${styles.degreeTitle} ${styles.headingFont}`}>
                    Bacharelado em Marketing e Gestão de Vendas
                  </h4>
                  <p className={`${styles.degreeDesc} ${styles.bodyFont}`}>
                    Formação clássica em gestão de canais de distribuição, precificação estratégica, pesquisa de mercado quantitativa e estruturação de equipes comerciais.
                  </p>
                </div>
              </div>

              {/* Bloco Direito: Publicações e Autoridade Semântica */}
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
                        Conteúdo aprofundado alinhado às diretrizes E-E-A-T do Google e indexação generativa sobre rastreabilidade e origens controladas.
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

        {/* SEÇÃO 7: FORMATOS DE ATUAÇÃO E PARCERIA */}
        <section className={styles.engagementSection} id="atuacao">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>MODELOS DE ATUAÇÃO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Formatos de Atuação e Parceria
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Estruturas flexíveis de contratação para aplicação estratégica de governança, escala e tecnologia de e-commerce.
              </p>
            </div>

            <div className={styles.engagementGrid}>
              {/* Frente 1 */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>I</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Liderança Executiva (Head of E-commerce / Growth / SEO &amp; CRO)
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Direção integral de operações digitais, gestão do resultado financeiro (P&amp;L), estruturação de equipes multidisciplinares e expansão de canais para empresas de varejo, indústria e tecnologia (B2C, B2B e SaaS).
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  DEDICAÇÃO ESTRATÉGICA / FRACIONADA
                </div>
              </div>

              {/* Frente 2 */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>II</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Consultoria Estratégica Continuada (Squammata)
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Acompanhamento executivo mensal focado em proteção de margem de lucro, <em>unit economics</em>, arquitetura de plataformas de vendas, Retail Media e expansão de canais proprietários.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  ACOMPANHAMENTO MENSAL CONTÍNUO
                </div>
              </div>

              {/* Frente 3 */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>III</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Auditorias Técnicas &amp; Sprints Fechados
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Diagnóstico profundo de SEO Técnico e Core Web Vitals, implantação de grafos Schema.org/JSON-LD para motores de busca e IA, auditoria de contas de mídia e otimização de conversão (CRO).
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  SPRINT DE ESCOPO FECHADO (3 A 4 SEMANAS)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: PERGUNTAS FREQUENTES & MÉTODO DIDÁTICO (FAQ) */}
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
                <div><strong>{footerMetaLine1.split('•')[0]?.trim() || 'Arthur Saggioratto Neto'}</strong> &bull; {footerMetaLine1.split('•')[1]?.trim() || "Santa Bárbara d'Oeste / Campinas, SP"}</div>
                <div>{footerMetaLine2}</div>
                <div>
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                  {' '}&bull;{' '}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+55 (19) 99349-7819</a>
                </div>
              </div>
            </div>

            <div className={styles.footerActionsCol}>
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
              &copy; {new Date().getFullYear()} Arthur Saggioratto. Arquitetura editorial inspirada no rigor técnico da web aberta.
            </div>
            <div className={`${styles.footerTechNote} ${styles.monoFont}`}>
              SEM RASTREADORES INVASIVOS &bull; RENDERIZAÇÃO ESTÁTICA &bull; SCHEMA.ORG GRAPH
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArthurPortfolioView
