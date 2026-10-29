'use client'

import React, { useState, useEffect } from 'react'
import styles from './arthur.module.scss'

const SCHEMA_CODE = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://linkedin.com/in/arthurnasa#person',
      name: 'Arthur Saggioratto',
      alternateName: ['Arthur Saggioratto Neto', 'Arthur Nasa'],
      jobTitle: 'Head of E-commerce, SEO & Growth',
      description:
        'Executivo de E-commerce, Growth e Especialista Sênior em SEO Técnico & CRO. Atuação focada na escala sustentável de receita (GMV) e saúde financeira (DRE/P&L), conectando arquitetura semântica, Inteligência Artificial Generativa (GEO/AEO), experimentação de conversão e mídia de performance.',
      url: 'https://linkedin.com/in/arthurnasa',
      email: 'mailto:arthur.saggioratto@gmail.com',
      telephone: '+55-19-99349-7819',
      address: {
        '@type': 'PostalAddress',
        addressLocality: "Santa Bárbara d'Oeste",
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade Estadual de Campinas (UNICAMP)',
          sameAs: 'https://www.unicamp.br/',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Faculdade de Administração e Artes de Limeira (FAAL)',
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Squammata Consultoria & Operações Estratégicas',
        taxID: '31.384.814/0001-09',
      },
      knowsAbout: [
        'SEO Técnico e Semântico',
        'GEO (Generative Engine Optimization) e AEO',
        'Conversion Rate Optimization (CRO)',
        'Arquitetura de Plataformas de E-commerce (Shopify Plus, Magento, VTEX)',
        'Mídia de Performance e Retail Media (Google Ads, Meta Ads, Mercado Ads)',
        'Governança Financeira de E-commerce, Unit Economics, POAS e DRE/P&L',
        'Schema.org JSON-LD e Web Semântica',
        'Sociologia da Técnica e do Consumo',
      ],
      sameAs: [
        'https://linkedin.com/in/arthurnasa',
        'https://blog.ruadocafe.com.br/author/arthur/',
      ],
    },
  ],
}

export const ArthurPortfolioView: React.FC = () => {
  const [avatarSrc, setAvatarSrc] = useState('./arthur-saggioratto.jpg')
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSchemaModalOpen) {
        setIsSchemaModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSchemaModalOpen])

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

  const handleCopySchema = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(SCHEMA_CODE, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback silencioso
    }
  }

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
            <a href="#formacao" className={styles.navLink}>Formação &amp; Artigos</a>
          </nav>

          <div className={styles.headerActions}>
            <button
              type="button"
              onClick={() => setIsSchemaModalOpen(true)}
              className={`${styles.btnSchema} ${styles.monoFont}`}
              aria-label="Abrir especificações Schema.org JSON-LD"
            >
              <span>[ &#123; &#125; JSON-LD Schema ]</span>
            </button>

            <a
              href="https://wa.me/5519993497819"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <span>Contato Executivo ↗</span>
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
                  15 ANOS DE TRAJETÓRIA &bull; B2C, B2B &amp; GLOBAL SAAS &bull; CAMPINAS / SP
                </div>

                <h1 className={`${styles.heroH1} ${styles.headingFont}`}>
                  Engenharia de Crescimento Orgânico, Arquitetura de E-commerce e Proteção de Margem Operacional.
                </h1>

                <p className={`${styles.heroLead} ${styles.bodyFont}`}>
                  Executivo de E-commerce, Growth e Especialista Sênior em SEO Técnico &amp; CRO. Atuação focada na escala sustentável de receita (GMV) e saúde financeira (DRE/P&amp;L), conectando arquitetura semântica, Inteligência Artificial Generativa (GEO/AEO), experimentação de conversão e mídia de performance.
                </p>

                <div className={styles.heroActions}>
                  <a
                    href="https://wa.me/5519993497819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroSolid}
                  >
                    <span>Iniciar Conversa Executiva (WhatsApp) ↗</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/arthurnasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroEditorial}
                  >
                    <span>LinkedIn Oficial (/in/arthurnasa) ↗</span>
                  </a>

                  <a
                    href="mailto:arthur.saggioratto@gmail.com"
                    className={`${styles.heroEmailLink} ${styles.monoFont}`}
                  >
                    arthur.saggioratto@gmail.com
                  </a>
                </div>
              </div>

              {/* Coluna Direita: 4 Colunas (Dossiê e Especificações Executivas) */}
              <aside className={styles.heroRightCol}>
                <div className={styles.portraitWrapper}>
                  <img
                    src={avatarSrc}
                    alt="Arthur Saggioratto"
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
                      31.384.814 ARTHUR SAGGIORATTO NETO - ME (Consultoria Squammata)
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Formação Dupla:</span>
                    <span className={styles.specValue}>
                      Ciências Sociais / Sociologia (UNICAMP) &amp; Marketing e Gestão de Vendas (FAAL)
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Fluência Operacional:</span>
                    <span className={styles.specValue}>
                      Português (Nativo) | Inglês (C2 Proficient para operações globais)
                    </span>
                  </div>

                  <div className={styles.specRow}>
                    <span className={`${styles.specLabel} ${styles.monoFont}`}>Core Stack:</span>
                    <span className={`${styles.specValue} ${styles.monoFont}`}>
                      Shopify Plus &bull; Magento &bull; VTEX &bull; GA4 &bull; GSC &bull; Screaming Frog &bull; Schema JSON-LD
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
                  href="https://www.midea.com/br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoBadgeLink}
                >
                  <span className={`${styles.logoSealText} ${styles.monoFont}`}>MIDEA CARRIER</span>
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
                  Performance Financeira, Escala de GMV e Eficiência Operacional
                </h2>
              </div>
              <p className={`${styles.sectionSubtext} ${styles.bodyFont}`}>
                Métricas históricas de impacto direto em faturamento bruto, margem de contribuição e consolidação mercadológica.
              </p>
            </div>

            <div className={styles.tabularGrid}>
              {/* Célula 1 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +66% MoM em GMV
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  ESCALA DE RECEITA &bull; RUA DO CAFÉ
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Crescimento sustentado mês a mês viabilizado pela administração integral do orçamento de aquisição digital (Google Ads e Meta Ads) combinada à arquitetura de conversão.
                </p>
              </div>

              {/* Célula 2 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  45% na Black Friday via Orgânico
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  PROTEÇÃO DE MARGEM &bull; SEO TÉCNICO
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Fatia do faturamento em pico sazonal gerada exclusivamente pelo canal orgânico via SEO Técnico e Arquitetura Semântica, reduzindo a dependência de leilões inflacionados.
                </p>
              </div>

              {/* Célula 3 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  10 Anos (+20% YoY)
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  LIDERANÇA NACIONAL &bull; MÁQUINAS &amp; CAFÉ
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Consolidação da marca como líder nacional em e-commerce B2C e B2B de máquinas de espresso, mantendo crescimento linear de 20% ao ano durante uma década (2014 a 2024).
                </p>
              </div>

              {/* Célula 4 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +50% Tráfego / +30% Conversão
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  EFICIÊNCIA DE FUNIL &bull; AQUISIÇÃO &amp; CRO
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Incremento simultâneo de tráfego qualificado (+50%) e taxa de conversão geral (+30%) mediante automação de fluxos de captação e otimização transacional de loja virtual.
                </p>
              </div>

              {/* Célula 5 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +20% Session Duration
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  RETENÇÃO B2B SAAS &bull; SHEETGO (GLOBAL)
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Elevação da duração média de sessão em software B2B global através de redesign de usabilidade, análise de mapas de calor (heatmaps) e CRO orientado à jornada do usuário.
                </p>
              </div>

              {/* Célula 6 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +100 Lojistas Integrados
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  ECOSSISTEMA B2B2C &bull; SHOPIFY PLUS &amp; ERP
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Liderança técnica e operacional no onboarding de mais de 100 varejistas parceiros em arquitetura Shopify Plus com integração automatizada de catálogo e pedidos via ERP.
                </p>
              </div>
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
                Quatro pilares integrados de atuação técnica: semântica de busca, conversão de interface, infraestrutura transacional e governança de margem operacional.
              </p>
            </div>

            <div className={styles.matrixIndex}>
              {/* Pilar 01 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>01</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    SEO Técnico, Semântico, Conteúdo &amp; IA Generativa (GEO / AEO)
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Engenharia de Catálogo e Indexação:</strong> Taxonomia escalável de categorias (PLPs) e produtos (PDPs), mitigação de canibalização de URLs, gestão de filtros facetados, controle de canonical tags e otimização de <em>crawl budget</em>.
                      </li>
                      <li>
                        <strong>Autoridade Tópica e Grafos Semânticos:</strong> Estruturação de <em>Topic Clusters</em>, <em>Topical Maps</em>, alinhamento de <em>Search Intent</em> (E-E-A-T) e implementação avançada de dados estruturados em <strong>Schema.org / JSON-LD</strong> (<code>Product</code>, <code>Offer</code>, <code>AggregateRating</code>, <code>Organization</code>, <code>FAQPage</code>, <code>Article</code>).
                      </li>
                      <li>
                        <strong>Visibilidade em Motores Generativos (GEO):</strong> Modelagem de entidades para citação direta em Google AI Overviews, ChatGPT Search e Perplexity.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Screaming Frog</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Google Search Console</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Ahrefs</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>SEMrush</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Core Web Vitals (LCP, INP, CLS)</span>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>JSON-LD</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Pilar 02 */}
              <article className={styles.matrixRow}>
                <div className={styles.matrixMeta}>
                  <span className={`${styles.matrixNumber} ${styles.monoFont}`}>02</span>
                  <h3 className={`${styles.matrixTitle} ${styles.headingFont}`}>
                    Otimização da Taxa de Conversão (CRO) &amp; UX Transacional
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Diagnóstico de Fricção e Funil:</strong> Mapeamento analítico de gargalos desde a página inicial, vitrines (PLPs) e páginas de produto (PDPs) até o carrinho e esteira de checkout transparente.
                      </li>
                      <li>
                        <strong>Metodologia de Experimentação:</strong> Testes A/B estruturados sobre hipóteses causais claras, validação estatística de impacto no ticket médio, taxa de adição ao carrinho (<em>Add-to-Cart</em>) e conversão final.
                      </li>
                      <li>
                        <strong>Comportamento e Mensuração Ética:</strong> Análise de mapas de calor (<em>heatmaps</em>), gravações de sessão, parametrização avançada de eventos e mensuração <em>privacy-first</em>.
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
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Heatmaps &amp; Session Recording</span>
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
                    Arquitetura de Plataformas de E-commerce, B2B &amp; Marketplaces
                  </h3>
                </div>

                <div className={styles.matrixContent}>
                  <div className={styles.matrixMethodology}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      ARQUITETURA &amp; MÉTODO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Infraestrutura e Migrações:</strong> Gestão operacional <em>end-to-end</em>, migração de plataformas, integração bidirecional com sistemas ERP (catálogo, estoque multi-CD, faturamento e logística) e precificação dinâmica.
                      </li>
                      <li>
                        <strong>Operação de Marketplaces e Venda Assistida:</strong> Gestão estratégica de canais em Mercado Livre (Fulfillment e Mercado Ads), Shopee, Amazon e TikTok Shop (operação e afiliados), além de esteiras híbridas via WhatsApp e CRM para alto ticket e B2B.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.matrixDeliverables}>
                    <h4 className={`${styles.methodologyHeading} ${styles.monoFont}`}>
                      STACK &amp; ENTREGÁVEIS
                    </h4>
                    <div className={styles.tagsFlex}>
                      <span className={`${styles.tagItem} ${styles.monoFont}`}>Shopify Plus</span>
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
                      ARQUITETURA &amp; MÉTODO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Gestão Orientada a P&amp;L e Margem:</strong> Alocação orçamentária ancorada no Demonstrativo de Resultados do Exercício (DRE), cálculo estrito de CAC, LTV, ROAS real versus <em>Blended ROAS</em>, e otimização por <strong>POAS (<em>Profit on Ad Spend</em>)</strong>.
                      </li>
                      <li>
                        <strong>Aquisição Full-Funnel e Retail Media:</strong> Estruturação granular de campanhas por intenção de compra, negativação semântica rigorosa e proteção de margem de contribuição em períodos de alta concorrência.
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
                      Administração integral do orçamento de aquisição digital focado nos canais de tração (Google Ads e Meta Ads), viabilizando crescimento sustentado de <strong>66% mês a mês (MoM) em GMV</strong>.
                    </li>
                    <li>
                      Implementação de arquitetura semântica avançada, engenharia de dados estruturados (Schema Markup em JSON-LD) e <em>Topic Clusters</em> sobre cafés especiais e Indicações Geográficas, expandindo a fatia orgânica e o posicionamento em motores de IA generativa (GEO/AEO).
                    </li>
                    <li>
                      Liderança técnica e operacional do onboarding de <strong>mais de 100 lojistas parceiros</strong> no ecossistema Shopify Plus com integrações automatizadas via ERP, além da direção de squads multidisciplinares em projetos omnichannel e eventos nacionais do setor.
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
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Lojistas B2B2C Onboarded</span>
                    </div>
                    <div className={styles.metricCalloutItem}>
                      <span className={`${styles.calloutValue} ${styles.monoFont}`}>GEO / AEO</span>
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Autoridade em IA Search</span>
                    </div>
                  </div>
                  <div className={styles.caseStackTags}>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Shopify Plus</span>
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
                      Condução da expansão internacional do tráfego orgânico voltado para o ecossistema de software B2B de automação de dados através de auditorias técnicas profundas com Screaming Frog, engenharia de Schema Markup e redes estruturadas de <em>Topic Clusters</em>.
                    </li>
                    <li>
                      Aumento de <strong>20% na duração média de sessão (<em>Average Session Duration</em>)</strong> mediante redesign de usabilidade, otimização de interfaces de produto e refinamento contínuo da jornada de ativação do usuário.
                    </li>
                    <li>
                      Alinhamento direto entre o roadmap de conteúdo orgânico e o roadmap de produto junto aos times internacionais, fundamentado em testes A/B estruturados e mapeamento comportamental por mapas de calor (<em>heatmaps</em>).
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
                      <span className={`${styles.calloutLabel} ${styles.monoFont}`}>Session Duration</span>
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
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Screaming Frog</span>
                    <span className={`${styles.miniTag} ${styles.monoFont}`}>Ahrefs &amp; Semrush</span>
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
                      Direção operacional <em>end-to-end</em> (catálogo, estoque, logística, atendimento e infraestrutura tecnológica), consolidando a empresa como líder nacional no comércio eletrônico B2C e B2B de máquinas de café espresso e acessórios.
                    </li>
                    <li>
                      Migração e gestão do ecossistema Magento integrado a sistemas de precificação dinâmica e ERPs, sustentando <strong>crescimento linear de 20% ao ano (YoY) ao longo de uma década</strong>.
                    </li>
                    <li>
                      Automação de fluxos de aquisição e CRO que resultaram em <strong>+50% de tráfego qualificado</strong>, <strong>+30% na taxa de conversão geral</strong> e <strong>45% do faturamento de Black Friday gerado pelo canal orgânico</strong>.
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
                      Atuação consultiva estratégica para operações de varejo e indústria como <strong>Lojas 360 EPI</strong>, <strong>Midea</strong> e <strong>Cope Calçados</strong>.
                    </li>
                    <li>
                      Diagnóstico avançado de <em>Unit Economics</em> e DRE, reestruturação de campanhas de Google Ads (Performance Max, Demand Gen e Search) com negativação semântica rigorosa e alocação orientada à margem de contribuição.
                    </li>
                    <li>
                      Estruturação de esteiras comerciais híbridas e assistidas (WhatsApp comercial integrado a CRM) para produtos técnicos e B2B, além de gestão de catálogos e anúncios em canais de Retail Media (Mercado Livre, Shopee e Amazon Ads).
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
                Compreensão profunda das dimensões sociotécnicas, ecossistemas de confiança e autoridade semântica para negócios duradouros.
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
                    Aplicação de sociologia da técnica e do consumo, teoria ator-rede, governança responsável (<em>steward-ownership</em>) e sustentabilidade digital (paradigma das empresas Zebra) à arquitetura de negócios digitais.
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
                    Formação clássica de gestão de canais de distribuição, precificação estratégica, pesquisa de mercado quantitativa e estruturação de forças de vendas comerciais.
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
                        Artigos técnicos conectando origem produtiva, torra, extração e comportamento de consumo no ecossistema cafeeiro nacional.
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
                        Estruturação de <em>Topic Cluster</em> regional e autoridade geográfica para busca orgânica com dados de terroir e cafeicultura.
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
                        Conteúdo aprofundado alinhado às diretrizes E-E-A-T do Google e indexação generativa sobre rastreabilidade e denominações de origem.
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

        {/* SEÇÃO 7: FORMATOS DE ENGAJAMENTO & FOOTER EXECUTIVO */}
        <section className={styles.engagementSection} id="engajamento">
          <div className={styles.editorialContainer}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={`${styles.sectionEyebrow} ${styles.monoFont}`}>MODELOS DE ATUAÇÃO</span>
                <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
                  Formatos de Engajamento Executivo
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
                  Direção integral de operações digitais, gestão de P&amp;L, estruturação de squads multidisciplinares e expansão nacional ou internacional (B2C, B2B e SaaS).
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
                  Acompanhamento executivo mensal focado em proteção de margem, <em>unit economics</em>, arquitetura de plataformas, Retail Media e escala de aquisição orgânica e paga.
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  ACOMPANHAMENTO MENSAL CONTÍNUO
                </div>
              </div>

              {/* Frente 3 */}
              <div className={styles.engagementCard}>
                <div className={`${styles.cardRomanNumber} ${styles.monoFont}`}>III</div>
                <h3 className={`${styles.engagementTitle} ${styles.headingFont}`}>
                  Auditorias Técnicas &amp; Projetos de Escopo Fechado
                </h3>
                <p className={`${styles.engagementDesc} ${styles.bodyFont}`}>
                  Diagnóstico profundo de SEO Técnico e Core Web Vitals, implementação de grafos Schema.org/JSON-LD para GEO, auditoria de contas de mídia (Google/Meta Ads) e redesenho de conversão (CRO).
                </p>
                <div className={`${styles.engagementSpec} ${styles.monoFont}`}>
                  SPRINT DE ESCOPO FECHADO (3 A 4 SEMANAS)
                </div>
              </div>
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
                Disponível para posições executivas estratégicas, conselhos consultivos e diagnósticos de alta complexidade.
              </h2>
              <div className={`${styles.footerMetaList} ${styles.monoFont}`}>
                <div><strong>Arthur Saggioratto Neto</strong> &bull; Santa Bárbara d&apos;Oeste / Campinas, SP</div>
                <div>CNPJ: 31.384.814/0001-09 (31.384.814 ARTHUR SAGGIORATTO NETO - ME)</div>
                <div>
                  <a href="mailto:arthur.saggioratto@gmail.com">arthur.saggioratto@gmail.com</a>
                  {' '}&bull;{' '}
                  <a href="https://wa.me/5519993497819" target="_blank" rel="noopener noreferrer">+55 (19) 99349-7819</a>
                </div>
              </div>
            </div>

            <div className={styles.footerActionsCol}>
              <a
                href="https://wa.me/5519993497819"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <span>Iniciar Contato Executivo (WhatsApp) ↗</span>
              </a>

              <a
                href="https://linkedin.com/in/arthurnasa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <span>LinkedIn Oficial (/in/arthurnasa) ↗</span>
              </a>

              <button
                type="button"
                onClick={() => setIsSchemaModalOpen(true)}
                className={`${styles.btnSecondary} ${styles.monoFont}`}
              >
                <span>[ &#123; &#125; JSON-LD Schema ]</span>
              </button>
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

      {/* MODAL INTERATIVO DE INSPEÇÃO DE SCHEMA.ORG (JSON-LD) */}
      {isSchemaModalOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="schema-modal-title"
          onClick={() => setIsSchemaModalOpen(false)}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleBlock}>
                <span className={`${styles.modalBadge} ${styles.monoFont}`}>METADADOS ESTRUTURADOS</span>
                <h3 id="schema-modal-title" className={`${styles.modalTitle} ${styles.headingFont}`}>
                  Schema.org JSON-LD (Entidade Person: Arthur Saggioratto)
                </h3>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={handleCopySchema}
                  className={`${styles.btnModalAction} ${styles.monoFont}`}
                >
                  {copied ? '✓ Código Copiado' : 'Copiar JSON-LD'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSchemaModalOpen(false)}
                  className={styles.btnModalClose}
                  aria-label="Fechar modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              <pre className={`${styles.codeBlock} ${styles.monoFont}`}>
                <code>{JSON.stringify(SCHEMA_CODE, null, 2)}</code>
              </pre>
            </div>

            <div className={styles.modalFooter}>
              <div className={`${styles.modalHelpText} ${styles.monoFont}`}>
                Testado e validado conforme diretrizes da W3C e Google Rich Results.
              </div>
              <div className={styles.validatorLinks}>
                <a
                  href="https://validator.schema.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.validatorLink}
                >
                  Schema Validator ↗
                </a>
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.validatorLink}
                >
                  Google Rich Results Test ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArthurPortfolioView
