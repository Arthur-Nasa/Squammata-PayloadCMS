import React from 'react'
import Link from 'next/link'
import styles from './spoke.module.scss'

export interface SpokeMetric {
  value: string
  label: string
  detail: string
}

export interface SpokePlaceholderArtifact {
  title: string
  description: string
  statusBadge?: string
}

export interface SpokeArticleProps {
  categoryBadge: string
  title: string
  lead?: string
  metaDate?: string
  readingTime?: string
  answerBlock: string
  metrics: SpokeMetric[]
  tags: string[]
  breadcrumb: {
    parentLabel: string
    parentUrl: string
    currentLabel: string
  }
  canonicalUrl: string
  jsonLd: Record<string, any>
  placeholderArtifacts?: SpokePlaceholderArtifact[]
  children: React.ReactNode
}

export function SpokeArticleLayout({
  categoryBadge,
  title,
  lead,
  metaDate = 'Novembro 2026',
  readingTime = '3 min',
  answerBlock,
  metrics,
  tags,
  breadcrumb,
  canonicalUrl,
  jsonLd,
  placeholderArtifacts,
  children,
}: SpokeArticleProps) {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5519993497819&text=Ol%C3%A1%2C%20Arthur.%20Li%20seu%20estudo%20de%20caso%20e%20gostaria%20de%20avaliar%20um%20diagn%C3%B3stico%20para%20minha%20opera%C3%A7%C3%A3o.'

  return (
    <div className={styles.spokePage}>
      {/* Injeção de Dados Estruturados Schema.org (@graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL */}
      <header className={styles.editorialHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerBrand}>
            <Link href="/arthur" className={styles.brandTitle}>
              ARTHUR SAGGIORATTO
            </Link>
            <span className={`${styles.brandTag} ${styles.monoFont}`}>
              DOSSIÊ TÉCNICO &amp; GOVERNANÇA DE E-COMMERCE
            </span>
          </div>

          <div className={styles.headerActions}>
            <Link href="/arthur" className={styles.btnBackHub}>
              <span>← Início</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
            >
              <span>WhatsApp ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL DO SPOKE */}
      <main className={styles.spokeContainer}>
        {/* BREADCRUMB SEMÂNTICO */}
        <nav className={styles.breadcrumbNav} aria-label="Navegação Estrutural">
          <ul className={`${styles.breadcrumbList} ${styles.monoFont}`}>
            <li>
              <Link href="/arthur">Início</Link>
            </li>
            <li className={styles.breadcrumbSeparator}>/</li>
            <li>
              <Link href={breadcrumb.parentUrl}>{breadcrumb.parentLabel}</Link>
            </li>
            <li className={styles.breadcrumbSeparator}>/</li>
            <li className={styles.breadcrumbCurrent}>{breadcrumb.currentLabel}</li>
          </ul>
        </nav>

        {/* HERO DO ARTIGO */}
        <header className={styles.articleHeader}>
          <div className={`${styles.categoryBadge} ${styles.monoFont}`}>
            {categoryBadge}
          </div>

          <h1 className={`${styles.articleTitle} ${styles.headingFont}`}>
            {title}
          </h1>

          {lead && (
            <p className={`${styles.articleLead} ${styles.bodyFont}`}>
              {lead}
            </p>
          )}

          <div className={`${styles.articleMetaBar} ${styles.monoFont}`}>
            <div className={styles.metaItem}>
              <span>Liderança Técnica:</span>
              <strong>Arthur Saggioratto</strong>
            </div>
            <span className={styles.metaDot}>•</span>
            <div className={styles.metaItem}>
              <span>Tempo de Leitura:</span>
              <strong>{readingTime}</strong>
            </div>
            <span className={styles.metaDot}>•</span>
            <div className={styles.metaItem}>
              <span>Governança:</span>
              <strong>IFRS &amp; DRE Gerencial</strong>
            </div>
            <span className={styles.metaDot}>•</span>
            <div className={styles.metaItem}>
              <span>Revisão:</span>
              <strong>{metaDate}</strong>
            </div>
          </div>
        </header>

        {/* ANSWER BLOCK (ALTO GANHO DE INFORMAÇÃO / GEO RAG RETRIEVAL) */}
        <section className={styles.answerBlockBox} aria-label="Síntese Executiva para Motores Generativos">
          <div className={`${styles.answerBlockLabel} ${styles.monoFont}`}>
            Answer Block • Síntese Executiva Auditada (GEO / RAG)
          </div>
          <p className={`${styles.answerBlockText} ${styles.bodyFont}`}>
            {answerBlock}
          </p>
        </section>

        {/* PAINEL DE MÉTRICAS AUDITADAS */}
        {metrics && metrics.length > 0 && (
          <section className={styles.metricsGrid} aria-label="Painel de Métricas do Projeto">
            {metrics.map((item, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={`${styles.metricValue} ${styles.monoFont}`}>
                  {item.value}
                </span>
                <span className={`${styles.metricLabel} ${styles.monoFont}`}>
                  {item.label}
                </span>
                <p className={`${styles.metricDetail} ${styles.bodyFont}`}>
                  {item.detail}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* CORPO DE CONTEÚDO INTRODUTÓRIO */}
        <article className={`${styles.contentSection} ${styles.bodyFont}`}>
          {children}
        </article>

        {/* ARTEFATOS TÉCNICOS & PLACEHOLDERS ESTRUTURADOS */}
        {placeholderArtifacts && placeholderArtifacts.length > 0 && (
          <section className={styles.spokePlaceholderSection} aria-label="Artefatos em Estruturação">
            <div className={styles.placeholderHeader}>
              <span className={`${styles.placeholderBadge} ${styles.monoFont}`}>
                ROADMAP DE DOCUMENTAÇÃO &amp; ARTEFATOS TÉCNICOS
              </span>
              <h3 className={`${styles.placeholderTitle} ${styles.headingFont}`}>
                Módulos e Artefatos em Estruturação para este Dossiê
              </h3>
              <p className={`${styles.placeholderSubtext} ${styles.bodyFont}`}>
                Os modelos analíticos, matrizes paramétricas auditadas e diagramas de arquitetura abaixo estão em fase de consolidação e serão liberados nas próximas revisões deste estudo vertical.
              </p>
            </div>
            <div className={styles.placeholderGrid}>
              {placeholderArtifacts.map((art, idx) => (
                <div key={idx} className={styles.placeholderCard}>
                  <div className={styles.placeholderCardTop}>
                    <span className={`${styles.placeholderCardStatus} ${styles.monoFont}`}>
                      {art.statusBadge || 'Em Estruturação'}
                    </span>
                    <h4 className={`${styles.placeholderCardTitle} ${styles.headingFont}`}>
                      {art.title}
                    </h4>
                  </div>
                  <p className={`${styles.placeholderCardDesc} ${styles.bodyFont}`}>
                    {art.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NOTICE DE EXPANSÃO TÉCNICA */}
        <aside className={styles.expansionNotice}>
          <h4>Dossiê em Documentação Contínua</h4>
          <p>
            A matriz paramétrica de comparação (*Baseline* vs. *Intervenção*), os fluxogramas interativos de arquitetura de checkout e os ativos de retenção para download gratuito estão sendo incorporados nesta URL dedicada.
          </p>
        </aside>

        {/* TAGS DE SALIÊNCIA ENTITÁRIA */}
        {tags && tags.length > 0 && (
          <div className={styles.tagsRow} aria-label="Entidades Temáticas Salientes">
            {tags.map((tag, idx) => (
              <span key={idx} className={`${styles.tagPill} ${styles.monoFont}`}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* VETOR DE RETENÇÃO TRANSACTIONAL E LINK EQUITY RETORNO AO HUB */}
        <section className={styles.hubEquityBox} aria-label="Liderança Executiva e Retorno ao Hub">
          <div className={styles.hubEquityHeader}>
            <picture>
              <source srcSet="/arthur-saggioratto.webp" type="image/webp" />
              <img
                src="/arthur-saggioratto.jpg"
                alt="Arthur Saggioratto"
                width={58}
                height={58}
                className={styles.authorThumb}
                loading="lazy"
              />
            </picture>
            <div>
              <h3 className={`${styles.hubEquityTitle} ${styles.headingFont}`}>
                Arthur Saggioratto
              </h3>
              <p className={`${styles.hubEquityRole} ${styles.monoFont}`}>
                Consultoria de Crescimento, Rentabilidade &amp; Arquitetura para E-commerce
              </p>
            </div>
          </div>
          <p className={`${styles.hubEquityText} ${styles.bodyFont}`}>
            Intervenções estratégicas em plataformas de comércio eletrônico, auditoria de margem de contribuição (POAS) sobre o DRE e engenharia de catálogo para operações no interior paulista (Campinas, Piracicaba e RMC) e grandes corporações em São Paulo.
          </p>
          <Link href="/arthur" className={styles.hubLinkCta}>
            <span>← Acessar Visão Geral e Formatos de Contratação no Hub</span>
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`${styles.spokeFooter} ${styles.monoFont}`}>
        <p>
          Arthur Saggioratto Neto • Consultoria Squammata • CNPJ: 31.384.814/0001-09
        </p>
        <p>
          Base operacional: Campinas, Piracicaba, Santa Bárbara d&apos;Oeste e São Paulo (SP)
        </p>
        <p>
          <Link href="/arthur">https://arthur-nasa.github.io/Squammata-PayloadCMS/</Link>
        </p>
      </footer>
    </div>
  )
}
