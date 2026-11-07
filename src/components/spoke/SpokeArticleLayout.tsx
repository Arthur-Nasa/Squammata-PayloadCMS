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
              ESTUDOS DE CASO &amp; CONSULTORIA EM E-COMMERCE
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

        {/* RESUMO DO ESTUDO */}
        <section className={styles.answerBlockBox} aria-label="Resumo do Estudo de Caso">
          <div className={`${styles.answerBlockLabel} ${styles.monoFont}`}>
            RESUMO DO ESTUDO
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
          <section className={styles.spokePlaceholderSection} aria-label="Materiais Técnicos em Elaboração">
            <div className={styles.placeholderHeader}>
              <span className={`${styles.placeholderBadge} ${styles.monoFont}`}>
                CONTEÚDOS E MATERIAIS TÉCNICOS
              </span>
              <h3 className={`${styles.placeholderTitle} ${styles.headingFont}`}>
                Módulos e Materiais em Elaboração para Este Estudo
              </h3>
              <p className={`${styles.placeholderSubtext} ${styles.bodyFont}`}>
                Os diagramas de arquitetura, análises comparativas e planilhas abaixo estão sendo organizados e serão publicados nas próximas revisões deste material.
              </p>
            </div>
            <div className={styles.placeholderGrid}>
              {placeholderArtifacts.map((art, idx) => (
                <div key={idx} className={styles.placeholderCard}>
                  <div className={styles.placeholderCardTop}>
                    <span className={`${styles.placeholderCardStatus} ${styles.monoFont}`}>
                      {art.statusBadge || 'Em Elaboração'}
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
          <h4>Estudo em Atualização Contínua</h4>
          <p>
            Este estudo de caso está sendo expandido com diagramas técnicos detalhados, fluxos de integração e métricas aprofundadas da operação.
          </p>
        </aside>

        {/* TAGS */}
        {tags && tags.length > 0 && (
          <div className={styles.tagsRow} aria-label="Temas Relacionados">
            {tags.map((tag, idx) => (
              <span key={idx} className={`${styles.tagPill} ${styles.monoFont}`}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* APRESENTAÇÃO DO CONSULTOR E RETORNO AO HUB */}
        <section className={styles.hubEquityBox} aria-label="Apresentação do Consultor e Retorno ao Hub">
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
                Consultor de E-commerce, Estruturação e Rentabilidade
              </p>
            </div>
          </div>
          <p className={`${styles.hubEquityText} ${styles.bodyFont}`}>
            Consultoria prática para lojas virtuais e marcas digitais. Atuação em governança de margem (POAS), integração de plataformas e SEO técnico para empresas de São Paulo, Campinas, Piracicaba e região.
          </p>
          <Link href="/arthur" className={styles.hubLinkCta}>
            <span>← Voltar à Página Inicial e Conhecer Mais</span>
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
