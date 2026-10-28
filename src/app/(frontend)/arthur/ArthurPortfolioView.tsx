'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './arthur.module.scss'

export const ArthurPortfolioView: React.FC = () => {
  return (
    <div className={styles.portfolioPage}>
      {/* 1. HERO SECTION */}
      <header className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.taglineBadge}>
            <span className={styles.monoFont}>E-COMMERCE ARCHITECTURE • TECHNICAL SEO & GEO • CRO • RETAIL MEDIA</span>
          </div>

          <h1 className={`${styles.heroTitle} ${styles.headingFont}`}>
            Engenharia de Crescimento Orgânico, Arquitetura de E-commerce e Proteção de Margem Operacional
          </h1>

          <p className={`${styles.heroSubtitle} ${styles.bodyFont}`}>
            15 anos a liderar operações digitais B2C, B2B e SaaS global. Conectando SEO Técnico, Inteligência
            Artificial Generativa (GEO/AEO), Otimização de Conversão (CRO) e Mídia de Performance diretamente ao DRE do negócio.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="https://wa.me/5519993497819"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnPrimary} ${styles.headingFont}`}
            >
              <span>Agendar Diagnóstico Estratégico</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="#cases"
              className={`${styles.btnSecondary} ${styles.headingFont}`}
            >
              <span>Explorar Estudos de Caso e Trajetória</span>
            </a>
          </div>

          {/* Logo Wall de Marcas Impulsionadas */}
          <div className={styles.logoWall}>
            <div className={`${styles.logoWallTitle} ${styles.monoFont}`}>
              Marcas, Operações e Instituições Conectadas
            </div>
            <div className={styles.logoGrid}>
              <a href="https://ruadocafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/ruadocafe.com.br" alt="Rua do Café" loading="lazy" />
                <span>Rua do Café</span>
              </a>

              <a href="https://www.sheetgo.com/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/sheetgo.com" alt="Sheetgo" loading="lazy" />
                <span>Sheetgo</span>
              </a>

              <a href="https://www.maquinasecafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/maquinasecafe.com.br" alt="Máquinas & Café" loading="lazy" />
                <span>Máquinas & Café</span>
              </a>

              <a href="https://www.lojas360.com.br/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/lojas360.com.br" alt="Lojas 360" loading="lazy" />
                <span>Lojas 360 EPI</span>
              </a>

              <a href="https://www.midea.com/br" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/midea.com" alt="Midea" loading="lazy" />
                <span>Midea</span>
              </a>

              <a href="https://www.unicamp.br/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/unicamp.br" alt="UNICAMP" loading="lazy" />
                <span>UNICAMP</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PAINEL DE BIG NUMBERS */}
      <section className={styles.numbersSection} id="impacto">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Indicadores Empíricos</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Impacto Mensurável em Demonstração de Resultado (DRE)
            </h2>
            <p className={styles.sectionDesc}>
              Resultados consolidados através de intervenções arquiteturais, disciplina analítica e otimização contínua de margem operacional.
            </p>
          </div>

          <div className={styles.numbersGrid}>
            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+66% MoM</div>
              <p className={styles.metricDesc}>
                Crescimento sustentado mês a mês em GMV na Rua do Café, através de gestão integrada de canais e arquitetura de conversão.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>45%</div>
              <p className={styles.metricDesc}>
                Do faturamento em pico sazonal da Black Friday gerado exclusivamente via SEO Técnico e Arquitetura Semântica, blindando margens.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>10 Anos (+20%)</div>
              <p className={styles.metricDesc}>
                Escala contínua da operação Máquinas & Café com crescimento de 20% ao ano (YoY de 2014 a 2024), consolidando liderança nacional B2C e B2B.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+50% & +30%</div>
              <p className={styles.metricDesc}>
                Elevação simultânea de 50% no tráfego qualificado e 30% na taxa de conversão global via esteiras de captação orgânica e testes de usabilidade.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+20% ASD</div>
              <p className={styles.metricDesc}>
                Incremento em Average Session Duration na multinacional B2B SaaS Sheetgo, mediante testes A/B e redesenho da jornada do produto.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+100 Lojistas</div>
              <p className={styles.metricDesc}>
                Liderança técnica no onboarding de mais de 100 lojistas parceiros em ecossistema Shopify Plus integrado via ERP em modelo B2B2C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OS 4 PILARES DE ESPECIALIDADE */}
      <section className={styles.pillarsSection} id="especialidades">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Matriz de Competências</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Os 4 Pilares de Engenharia de E-commerce & Growth
            </h2>
            <p className={styles.sectionDesc}>
              Estruturação metodológica que substitui suposições intuitivas por causalidade técnica, dados estruturados e cálculo estrito de retorno financeiro.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Pilar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 01</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                SEO Técnico, Semântico, Conteúdo & IA Generativa (GEO / AEO)
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Taxonomia escalável para PLPs (categorias) e PDPs (produtos), mitigação de canibalização, gestão de filtros facetados, controle estrito de crawl budget e indexação seletiva. Construção de Topic Clusters, Topical Maps e governança de diretrizes E-E-A-T.
                </p>
                <p>
                  Engenharia avançada de dados estruturados com implementação de grafos JSON-LD conectados (Product, Offer, AggregateRating, Organization, BreadcrumbList, FAQPage, Article), garantindo relevância semântica em motores tradicionais e motores generativos (Google AI Overviews, Perplexity, ChatGPT Search).
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googlesearchconsole/458CF5" alt="GSC" />
                  Search Console
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/semrush/FF642D" alt="Semrush" />
                  Semrush
                </span>
                <span className={styles.stackBadge}>Screaming Frog</span>
                <span className={styles.stackBadge}>Schema.org JSON-LD</span>
                <span className={styles.stackBadge}>Core Web Vitals</span>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 02</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Otimização da Taxa de Conversão (CRO) & UX Transacional
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Diagnóstico aprofundado de fricção em funis transacionais: vitrine, PDP, carrinho e checkout transparente. Formulação de hipóteses causais baseadas em comportamento de navegação e teste de usabilidade.
                </p>
                <p>
                  Execução de testes A/B empiricamente validados e redesign orientado à redução da ansiedade de compra, clareza nas políticas de entrega e elevação do ticket médio com proteção da margem de contribuição.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googleanalytics/E37400" alt="GA4" />
                  Google Analytics 4
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googletagmanager/246FDB" alt="GTM" />
                  GTM Server-Side
                </span>
                <span className={styles.stackBadge}>Mapas de Calor (Hotjar/Clarity)</span>
                <span className={styles.stackBadge}>Testes A/B</span>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 03</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Arquitetura de E-commerce, Marketplaces & Infraestrutura
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gestão ponta a ponta de lojas virtuais corporativas, migrações complexas de plataforma com preservação de equidade orgânica (301 mapping), integração de sistemas ERP, precificação dinâmica e esteiras de fulfillment.
                </p>
                <p>
                  Estruturação de vendas híbridas e assistidas combinando canais de WhatsApp com CRM para produtos de alto valor agregado e compras corporativas B2B com faturamento direto.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify" />
                  Shopify Plus
                </span>
                <span className={styles.stackBadge}>Magento</span>
                <span className={styles.stackBadge}>VTEX</span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/woocommerce/96588A" alt="WooCommerce" />
                  WooCommerce
                </span>
                <span className={styles.stackBadge}>Bling / Tiny ERP</span>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 04</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Mídia de Performance, Retail Media & Unit Economics
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gestão de investimentos de aquisição ancorada estritamente na saúde contábil: cálculo rigoroso de CAC, LTV, ROAS real contra Blended ROAS, POAS (Profit on Ad Spend) e margem líquida.
                </p>
                <p>
                  Estratégias de funil completo em motores de busca, redes sociais e marketplaces, com foco em retenção e recompras programadas para diluição progressiva do custo de aquisição.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googleads/4285F4" alt="Google Ads" />
                  Google Ads (PMax & Search)
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/meta/0081FB" alt="Meta Ads" />
                  Meta Ads
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/mercadopago/FFE600" alt="Mercado Ads" />
                  Mercado Ads (Full)
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/looker/4285F4" alt="Looker" />
                  Looker Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRAJETÓRIA EXECUTIVA & ESTUDOS DE CASO */}
      <section className={styles.casesSection} id="cases">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Evidências Públicas</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Trajetória Executiva & Estudos de Caso Documentados
            </h2>
            <p className={styles.sectionDesc}>
              Intervenções práticas em operações digitais de alta complexidade com resultados auditáveis e links diretos para plataformas e registros públicos.
            </p>
          </div>

          <div className={styles.casesTimeline}>
            {/* Case 1: Rua do Café */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2024 a Maio 2026</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Rua do Café</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Head of Marketing & E-commerce</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Gestão integral do orçamento de performance (Google Ads e Meta Ads), viabilizando crescimento sustentado de <strong>+66% MoM em GMV</strong>.
                    </li>
                    <li>
                      Engenharia de SEO Semântico, grafos JSON-LD e Topic Clusters voltados à cafeicultura especial (mapeamento de Indicações Geográficas, Sudoeste de Minas e métodos de extração), posicionando a marca em motores de IA generativa (GEO).
                    </li>
                    <li>
                      Liderança técnica no onboarding de <strong>mais de 100 lojistas parceiros</strong> no Shopify Plus com integração direta via ERP, além de coordenação de squads em feiras nacionais do setor cafeeiro.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://ruadocafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Loja Oficial ↗
                  </a>
                  <a href="https://blog.ruadocafe.com.br/author/arthur/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Artigos Técnicos e Autoridade Semântica ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Case 2: Sheetgo */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2024 a Outubro 2024</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Sheetgo</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>SEO & CRO Optimization Specialist (B2B SaaS Global)</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Expansão internacional do tráfego orgânico para plataforma global de automação de workflows e integração de dados, em operação conduzida integralmente em inglês.
                    </li>
                    <li>
                      Auditorias técnicas profundas com Screaming Frog, arquitetura avançada de Schema Markup e estruturação de redes de Topic Clusters voltados a produtividade corporativa.
                    </li>
                    <li>
                      Incremento de <strong>+20% na Duração Média de Sessão (Average Session Duration)</strong> por meio de redesign de usabilidade, mapeamento por mapas de calor e alinhamento do roadmap de conteúdo ao ciclo de lançamento de produto.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.sheetgo.com/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Plataforma Oficial ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Case 3: Máquinas & Café */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2014 a Janeiro 2024 (10 Anos)</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Máquinas & Café</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>E-commerce & Marketplaces Manager</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Direção operacional ponta a ponta (catálogo, estoque, esteiras logísticas, atendimento e tecnologia), consolidando a empresa como líder nacional em comércio eletrônico B2C e B2B de máquinas de espresso.
                    </li>
                    <li>
                      Migração e gestão do ecossistema Magento integrado a precificação dinâmica e ERPs, sustentando <strong>crescimento linear de 20% ao ano durante uma década</strong>.
                    </li>
                    <li>
                      Automação de captação orgânica e testes de CRO que resultaram em <strong>+50% de tráfego qualificado</strong>, <strong>+30% na taxa de conversão global</strong> e <strong>45% do faturamento da Black Friday oriundo do canal orgânico</strong>.
                    </li>
                  </ul>

                  <div className={styles.caseQuote}>
                    &ldquo;A estratégia de SEO aliada à produção de conteúdos de qualidade tem impulsionado não só o nosso crescimento orgânico, como o da loja como um todo, reduzindo a dependência de mídia paga.&rdquo;
                    <div style={{ marginTop: '0.4rem', fontSize: '0.82rem', color: '#A3A099' }}>
                      Citação pública registrada pela consultoria Bridge SEO
                    </div>
                  </div>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.maquinasecafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Loja Virtual Oficial ↗
                  </a>
                  <a href="https://bridgeseo.com.br/consultoria-de-seo-para-e-commerce/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Ver Prova Social Pública (Bridge SEO) ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Case 4: Squammata Consultoria */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>2018 a Presente</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Squammata Consultoria & Projetos Estratégicos</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Consultor Sênior de E-commerce, Growth & Retail Media</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      <strong>Lojas 360 EPI:</strong> Inteligência operacional B2B e B2C, auditoria de mídia paga, proteção de margem de contribuição, unit economics e estratégia de Retail Media para equipamentos de proteção individual.
                    </li>
                    <li>
                      <strong>Midea & Cope Calçados:</strong> Diagnóstico avançado de Unit Economics, reestruturação de campanhas de Performance Max e Search com negativação semântica estrita, esteiras comerciais assistidas via WhatsApp e aumento de POAS.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.lojas360.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Lojas 360 EPI ↗
                  </a>
                  <a href="https://www.midea.com/br" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Midea Brasil ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. PRODUÇÃO INTELECTUAL E DIFERENCIAL SOCIOLÓGICO */}
      <section className={styles.intellectSection} id="intellectual">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Diferencial Interdisciplinar</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Produção Intelectual & Perspectiva Sociotécnica
            </h2>
            <p className={styles.sectionDesc}>
              A união entre Ciências Sociais na UNICAMP e Engenharia de E-commerce: análise de consumo, algoritmos de recomendação e plataformas digitais como ecossistemas sociotécnicos que exigem ética, transparência e governança sustentável de dados.
            </p>
          </div>

          <div className={styles.intellectGrid}>
            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Autoridade Semântica & Mercado</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Análises de Mercado e Cafeicultura Especial
              </h3>
              <p className={styles.articleDesc}>
                Artigos que estruturam entidades, padrões de consumo e valor agregado para o setor cafeeiro, indexados e citados por motores de busca e modelos de linguagem generativos.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/author/arthur/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Ler Publicações no Blog da Rua do Café ↗
              </a>
            </div>

            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Estudo Regional & Terroir</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Muzambinho e o Sudoeste de Minas
              </h3>
              <p className={styles.articleDesc}>
                Mapeamento geográfico, histórico e produtivo de origens cafeeiras especiais, conectando rastreabilidade de produto a dados estruturados de oferta e procedência.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/tag/sudoeste-de-minas/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Explorar Análise Regional de Muzambinho ↗
              </a>
            </div>

            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Indicações Geográficas</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Mapeamento de Origens no Estado de São Paulo
              </h3>
              <p className={styles.articleDesc}>
                Estruturação semântica sobre denominações de origem e certificações, elevando a percepção de valor do catálogo e a conversão de itens de alto valor sensorial.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/tag/sao-paulo/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Acessar Mapeamento de Indicações Geográficas ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ EXECUTIVO & CREDENCIAIS */}
      <footer className={styles.executiveFooter}>
        <div className={styles.container}>
          <div className={styles.footerBox}>
            <h2 className={`${styles.footerTitle} ${styles.headingFont}`}>
              Pronto para Estruturar sua Operação com Rigor Técnico e Proteção de Margem?
            </h2>
            <p className={styles.footerSubtitle}>
              Disponível para diagnósticos executivos, consultoria estratégica de e-commerce e liderança de projetos de alta complexidade.
            </p>

            <div className={styles.ctaGroup} style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <a
                href="https://wa.me/5519993497819"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnPrimary} ${styles.headingFont}`}
              >
                <span>Conectar via WhatsApp (+55 19 99349-7819)</span>
              </a>

              <a
                href="mailto:arthur.saggioratto@gmail.com"
                className={`${styles.btnSecondary} ${styles.headingFont}`}
              >
                <span>Enviar E-mail Corporativo</span>
              </a>

              <a
                href="https://linkedin.com/in/arthurnasa"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnSecondary} ${styles.headingFont}`}
              >
                <span>Perfil Oficial no LinkedIn ↗</span>
              </a>
            </div>

            <div className={`${styles.entityInfo} ${styles.monoFont}`}>
              <div><strong>Arthur Saggioratto</strong> | Head of E-commerce, Growth & Senior SEO/CRO Specialist</div>
              <div>Entidade Jurídica: 31.384.814 ARTHUR SAGGIORATTO NETO (CNPJ: 31.384.814/0001-09)</div>
              <div>Localização: Santa Bárbara d&apos;Oeste / Campinas, SP, Brasil (Atuação Global)</div>
              <div style={{ marginTop: '0.5rem', color: '#55B36E' }}>
                Formação: Bacharelado em Ciências Sociais (UNICAMP) &bull; Bacharelado em Marketing e Gestão de Vendas (FAAL)
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArthurPortfolioView
