'use client'

import React, { useState, useEffect } from 'react'
import styles from './arthur.module.scss'

const CURRICULO_PDF_URL = 'https://drive.google.com/file/d/1kqXFuC4SN-vlFMez0RtELHqUe9Wk7RMr/view?usp=sharing'

export const ArthurPortfolioView: React.FC = () => {
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
            <a
              href={CURRICULO_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSecondary} ${styles.headerCurriculoBtn} ${styles.monoFont}`}
            >
              <span>Imprimir Currículo (PDF) ↗</span>
            </a>

            <a
              href="https://wa.me/5519993497819"
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
                  15 ANOS DE OPERAÇÃO &bull; B2C, B2B &amp; GLOBAL SAAS &bull; CAMPINAS / SP
                </div>

                <h1 className={`${styles.heroH1} ${styles.headingFont}`}>
                  Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional.
                </h1>

                <p className={`${styles.heroLead} ${styles.bodyFont}`}>
                  Prazer, sou o Arthur Saggioratto. Há 15 anos estruturo e lidero operações digitais de ponta a ponta. Meu trabalho consiste em subordinar a tecnologia e a aquisição de tráfego à saúde financeira do negócio (DRE): integro engenharia de SEO e visibilidade em IA (GEO), otimização de conversão (CRO) e mídia de performance para escalar a receita sem corroer a margem de contribuição.
                </p>

                <div className={styles.heroActions}>
                  <a
                    href="https://wa.me/5519993497819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroSolid}
                  >
                    <span>Conversar no WhatsApp ↗</span>
                  </a>

                  <a
                    href={CURRICULO_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnHeroEditorial}
                  >
                    <span>Imprimir Currículo (PDF) ↗</span>
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
                      Shopify Plus &bull; Magento &bull; VTEX &bull; GA4 &bull; GSC &bull; Semrush &bull; Ahrefs &bull; Schema JSON-LD
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
                Métricas consolidadas de impacto direto em faturamento, margem de contribuição e eficiência operacional.
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
                  Escala mensal sustentada na Rua do Café. Resultado direto da alocação orçamentária em Google e Meta Ads ancorada em margem de contribuição e ajustes contínuos de conversão no funil.
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
                  Participação da busca orgânica no faturamento de pico sazonal. Na prática, a maturidade semântica do catálogo blindou o caixa da operação contra a inflação do CPC no leilão de mídia paga.
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
                  Uma década de crescimento linear de 20% ao ano na Máquinas &amp; Café (2014 a 2024), consolidando a operação B2C e B2B no mercado nacional de máquinas de espresso e equipamentos.
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
                  Tração sem diluição de eficiência. A automação dos fluxos de aquisição ampliou o tráfego qualificado em 50%, enquanto a remoção de atritos no checkout elevou a conversão global em 30%.
                </p>
              </div>

              {/* Célula 5 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +20% em Retenção de Sessão
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  RETENÇÃO B2B SAAS &bull; SHEETGO (GLOBAL)
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Aumento no tempo médio de sessão na multinacional SaaS Sheetgo. O redesenho da interface, guiado por mapas de calor e testes A/B, reduziu a fricção na jornada de ativação do software.
                </p>
              </div>

              {/* Célula 6 */}
              <div className={styles.tabularCell}>
                <div className={`${styles.tabularValue} ${styles.monoFont}`}>
                  +100 Lojistas Integrados
                </div>
                <div className={`${styles.tabularLabel} ${styles.monoFont}`}>
                  ECOSSISTEMA MARKETPLACE &bull; SHOPIFY PLUS &amp; OMNIK
                </div>
                <p className={`${styles.tabularDesc} ${styles.bodyFont}`}>
                  Estruturação técnica e comercial de ecossistema B2B2C em Shopify Plus com Seller Center Omnik, conectando mais de uma centena de varejistas parceiros com sincronização automatizada de estoque e pedidos via ERP.
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
                        <strong>Engenharia de Catálogo e Indexação:</strong> Arquitetura de categorias (PLPs) e páginas de produto (PDPs) desenhada para evitar canibalização de URLs e desperdício de <em>crawl budget</em> em filtros facetados.
                      </li>
                      <li>
                        <strong>Autoridade Tópica e Dados Estruturados:</strong> Construção de <em>Topic Clusters</em> orientados à intenção real de busca (E-E-A-T) e implementação de grafos conectados em <strong>Schema.org / JSON-LD</strong> (<code>Product</code>, <code>Offer</code>, <code>Organization</code>, <code>FAQPage</code>, <code>Article</code>).
                      </li>
                      <li>
                        <strong>Visibilidade em Motores Generativos (GEO):</strong> Modelagem semântica de entidades para garantir que a marca seja compreendida, citada e recomendada por sistemas como Google AI Overviews, Perplexity e ChatGPT Search.
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
                        <strong>Diagnóstico de Fricção no Funil:</strong> Auditoria quantitativa e comportamental desde a vitrine até o checkout transparente, identificando onde a interface gera dúvida ou abandono de carrinho.
                      </li>
                      <li>
                        <strong>Experimentação Estruturada:</strong> Execução de testes A/B baseados em hipóteses causais claras. O foco não é alterar cores de botões, mas validar intervenções que elevem a taxa de adição ao carrinho e o ticket médio.
                      </li>
                      <li>
                        <strong>Mensuração e Privacidade:</strong> Rastreamento <em>server-side</em> via Google Tag Manager e GA4, aliado a ferramentas <em>privacy-first</em> (Plausible, Matomo) e análise de mapas de calor.
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
                        <strong>Infraestrutura e Integração Operacional:</strong> Gestão <em>end-to-end</em> de lojas virtuais e migrações de plataforma, amarrando catálogo, estoque multi-CD, regras fiscais e logística diretamente aos sistemas ERP.
                      </li>
                      <li>
                        <strong>Marketplaces, Seller Center &amp; Split Payment:</strong> Concepção de arquitetura para ecossistemas de marketplace, integração de lojistas por Seller Center Omnik conectado ao ERP dos sellers e implementação de soluções de split payment em Shopify.
                      </li>
                      <li>
                        <strong>Operação de Marketplaces e Venda Assistida:</strong> Operação estratégica em Mercado Livre (Fulfillment e Mercado Ads), Shopee, Amazon e TikTok Shop, combinada a esteiras comerciais via WhatsApp e CRM para vendas B2B ou produtos de ticket elevado.
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
                      ARQUITETURA &amp; MÉTODO
                    </h4>
                    <ul className={`${styles.editorialList} ${styles.bodyFont}`}>
                      <li>
                        <strong>Tráfego Subordinado ao P&amp;L:</strong> Mídia paga gerida pelo Demonstrativo de Resultados (DRE), e não por métricas isoladas de painel. Controle rigoroso de CAC, LTV, ROAS real versus <em>Blended ROAS</em> e otimização por <strong>POAS (<em>Profit on Ad Spend</em>)</strong>.
                      </li>
                      <li>
                        <strong>Eficiência de Leilão e Retail Media:</strong> Estruturação de campanhas em Google Ads (Search, PMax, Demand Gen, Shopping), Meta Ads e Retail Media com negativação semântica contínua para proteger a margem líquida.
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
                      Assumi a direção integral da operação digital e do orçamento de aquisição (Google Ads e Meta Ads), reestruturando a alocação de capital por margem e intenção de compra. Como resultado, a operação sustentou um crescimento de <strong>66% mês a mês (MoM) em GMV</strong>.
                    </li>
                    <li>
                      Na frente orgânica, estruturei a arquitetura semântica do portal, os grafos de dados em JSON-LD e os <em>Topic Clusters</em> voltados a cafés especiais e Indicações Geográficas. Essa base reduziu o custo de aquisição agregado e posicionou a marca nas respostas de motores de IA generativa (GEO/AEO).
                    </li>
                    <li>
                      Liderei a arquitetura e o onboarding técnico de <strong>mais de 100 lojistas parceiros</strong> através do <strong>Seller Center Omnik</strong> com integração direta ao ERP de cada seller, além de conceber a solução técnica para <strong>split payment nativo em Shopify</strong> e coordenar ativações omnichannel no setor cafeeiro.
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
                      Atuando 100% em inglês junto aos times globais de produto e engenharia, conduzi a expansão internacional do tráfego orgânico da plataforma B2B por meio de auditorias técnicas com <strong>Semrush</strong> e <strong>Ahrefs</strong>, implementação de Schema Markup e redes de <em>Topic Clusters</em> voltadas a automação de dados.
                    </li>
                    <li>
                      Através do mapeamento comportamental por mapas de calor (<em>heatmaps</em>), gravações de sessão e testes A/B, redesenhamos pontos críticos de usabilidade e da jornada de ativação, elevando em <strong>20% o tempo médio de sessão (<em>Average Session Duration</em>)</strong>.
                    </li>
                    <li>
                      Estabeleci a integração contínua entre o roadmap de aquisição orgânica e o roadmap de funcionalidades do software, garantindo que o conteúdo técnico respondesse diretamente às dores reais de conversão dos usuários B2B.
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
                      Dirigi a operação digital de ponta a ponta durante dez anos (catálogo, estoque, logística, atendimento e infraestrutura tecnológica), consolidando a empresa no mercado nacional B2C e B2B de máquinas de café espresso com <strong>crescimento linear de 20% ao ano (YoY)</strong>.
                    </li>
                    <li>
                      Conduzi a migração e a evolução do ecossistema Magento integrado a regras de precificação dinâmica e ERPs, criando estabilidade operacional para escalar tanto a loja própria quanto os canais de marketplace.
                    </li>
                    <li>
                      A combinação entre automação de fluxos de captação, conteúdo técnico proprietário e CRO gerou <strong>+50% em tráfego qualificado</strong>, <strong>+30% na taxa de conversão geral</strong> e garantiu que <strong>45% do faturamento de Black Friday viesse exclusivamente do canal orgânico</strong>.
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
                      Consultoria executiva e diagnóstico operacional para marcas de varejo e indústria, incluindo <strong>Lojas 360 EPI</strong> e <strong>Cope Calçados</strong>.
                    </li>
                    <li>
                      Auditoria financeira de mídia paga e <em>Unit Economics</em> (DRE), reestruturando campanhas de Google Ads (PMax, Demand Gen e Search) com higienização rigorosa de termos de busca e alocação focada em lucro líquido sobre o investimento (POAS).
                    </li>
                    <li>
                      Desenho de esteiras comerciais assistidas integrando tráfego pago, WhatsApp comercial e CRM para vendas consultivas e B2B, além da gestão de catálogos e rentabilidade em Retail Media (Mercado Livre, Shopee e Amazon Ads).
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
                    Pesquisa e aplicação prática da sociologia da técnica e do consumo à arquitetura de negócios digitais. Analiso plataformas, algoritmos e funis de conversão como sistemas sociotécnicos, priorizando governança ética de dados (<em>privacy-first</em>), autonomia operacional e crescimento financeiramente sustentável (modelo de empresas Zebra).
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

        {/* SEÇÃO 7: FORMATOS DE ATUAÇÃO E PARCERIA & FOOTER EXECUTIVO */}
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
                Aberto a conversas para posições de liderança executiva (Head/Diretoria), conselhos consultivos e projetos de reestruturação de e-commerce e SEO.
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
                <span>Conversar no WhatsApp ↗</span>
              </a>

              <a
                href={CURRICULO_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <span>Imprimir Currículo em PDF ↗</span>
              </a>

              <a
                href="https://linkedin.com/in/arthurnasa"
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
