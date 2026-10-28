'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './arthur.module.scss'

export const ArthurPortfolioView: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const whatsappMessage = encodeURIComponent(
    'Olá Arthur, vi seu currículo executivo e gostaria de conversar sobre um projeto de e-commerce e growth.'
  )

  return (
    <div className={styles.portfolioPage}>
      {/* 1. NAVBAR STANDALONE FIXA COM AVATAR / LOGO */}
      <nav className={styles.standaloneNavbar} aria-label="Navegação Principal do Portfólio">
        <div className={styles.container}>
          <div className={styles.navInner}>
            {/* Brand / Logo com Foto e Status */}
            <a href="#sobre" className={styles.navBrand}>
              <div className={styles.navAvatarWrapper}>
                <Image
                  src="/arthur-saggioratto.jpg"
                  alt="Arthur Saggioratto"
                  width={44}
                  height={44}
                  className={styles.navAvatar}
                  priority
                />
                <span className={styles.navStatusDot} title="Disponível para novos projetos e consultoria" />
              </div>
              <div className={styles.navBrandText}>
                <span className={`${styles.navBrandName} ${styles.headingFont}`}>Arthur Saggioratto</span>
                <span className={`${styles.navBrandRole} ${styles.monoFont}`}>E-commerce & Growth</span>
              </div>
            </a>

            {/* Links Centrais de Navegação */}
            <div className={styles.navLinks}>
              <a href="#sobre" className={styles.navLinkItem}>Sobre</a>
              <a href="#curriculo" className={styles.navLinkItem}>Currículo</a>
              <a href="#impacto" className={styles.navLinkItem}>Impacto</a>
              <a href="#especialidades" className={styles.navLinkItem}>Especialidades</a>
              <a href="#servicos" className={styles.navLinkItem}>Serviços & Advisory</a>
              <a href="#publicacoes" className={styles.navLinkItem}>Publicações</a>
            </div>

            {/* Ações Rápidas */}
            <div className={styles.navActions}>
              <button
                type="button"
                onClick={handlePrint}
                className={`${styles.btnNavPrint} ${styles.monoFont}`}
                title="Salvar ou Imprimir Versão em PDF"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span>Versão CV</span>
              </button>

              <a
                href={`https://wa.me/5519993497819?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnNavWhatsApp}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION COM PERFIL EXECUTIVO HUMANIZADO */}
      <header className={styles.heroSection} id="sobre">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Coluna 1: Posicionamento e Proposta de Valor */}
            <div className={styles.heroTextCol}>
              <div className={styles.taglineBadge}>
                <span className={styles.monoFont}>ARTHUR SAGGIORATTO • 15 ANOS DE TRAJETÓRIA</span>
              </div>

              <h1 className={`${styles.heroTitle} ${styles.headingFont}`}>
                Acelerando E-commerces e Negócios Digitais com Engenharia de SEO, CRO e Proteção de Margem
              </h1>

              <p className={`${styles.heroSubtitle} ${styles.bodyFont}`}>
                Currículo executivo e consultoria de alto impacto para marcas e operações que buscam escala
                sustentável sem queima de capital. Unindo rigor técnico de dados, visão sociotécnica e foco
                inabalável no lucro líquido real da sua empresa.
              </p>

              <div className={styles.ctaGroup}>
                <a
                  href={`https://wa.me/5519993497819?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnPrimary} ${styles.headingFont}`}
                >
                  <span>Iniciar Conversa no WhatsApp</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <a
                  href="#curriculo"
                  className={`${styles.btnSecondary} ${styles.headingFont}`}
                >
                  <span>Ver Linha do Tempo e Experiências</span>
                </a>

                <a
                  href="#servicos"
                  className={`${styles.btnSecondary} ${styles.headingFont}`}
                >
                  <span>Modelos de Consultoria</span>
                </a>
              </div>
            </div>

            {/* Coluna 2: Cartão de Perfil Executivo em Destaque */}
            <div className={styles.heroCardCol}>
              <div className={styles.profileCard}>
                <div className={styles.profileCardHeader}>
                  <div className={styles.profilePhotoWrapper}>
                    <Image
                      src="/arthur-saggioratto.jpg"
                      alt="Arthur Saggioratto"
                      width={124}
                      height={124}
                      className={styles.profilePhoto}
                      priority
                    />
                  </div>

                  <div className={styles.profileStatusBadge}>
                    <span className={styles.pulseDot} />
                    <span>Disponível para Advisory & Consultoria</span>
                  </div>

                  <h2 className={`${styles.profileName} ${styles.headingFont}`}>Arthur Saggioratto</h2>
                  <p className={styles.profileTitle}>Head of E-commerce, Growth & Senior SEO/CRO Specialist</p>
                  <p className={`${styles.profileLocation} ${styles.monoFont}`}>Campinas e SP / Atuação Global</p>
                </div>

                <div className={styles.profileStatsGrid}>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>15+ Anos</div>
                    <div className={styles.statItemLabel}>Experiência</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>B2C, B2B, SaaS</div>
                    <div className={styles.statItemLabel}>Mercados</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>+100 Lojistas</div>
                    <div className={styles.statItemLabel}>Integrados</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>UNICAMP & FAAL</div>
                    <div className={styles.statItemLabel}>Formação</div>
                  </div>
                </div>

                <div className={styles.profileChips}>
                  <a
                    href="https://linkedin.com/in/arthurnasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileChipLink}
                  >
                    <span>LinkedIn Oficial: /in/arthurnasa</span>
                    <span>↗</span>
                  </a>

                  <a
                    href="mailto:arthur.saggioratto@gmail.com"
                    className={styles.profileChipLink}
                  >
                    <span>arthur.saggioratto@gmail.com</span>
                    <span>✉</span>
                  </a>

                  <a
                    href="https://wa.me/5519993497819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileChipLink}
                  >
                    <span>WhatsApp Direto: +55 19 99349-7819</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Wall de Operações e Instituições Conectadas */}
          <div className={styles.logoWall}>
            <div className={`${styles.logoWallTitle} ${styles.monoFont}`}>
              Operações, Marcas e Instituições de Referência
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

      {/* 3. PAINEL DE BIG NUMBERS (IMPACTO REAL) */}
      <section className={styles.numbersSection} id="impacto">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Resultados Empíricos</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Impacto Mensurável no Resultado Financeiro do Negócio
            </h2>
            <p className={styles.sectionDesc}>
              Evidências concretas construídas através de intervenções estruturais, análise profunda de canais e proteção rigorosa da margem de lucro.
            </p>
          </div>

          <div className={styles.numbersGrid}>
            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+66% MoM</div>
              <p className={styles.metricDesc}>
                Crescimento sustentado mês a mês em GMV na Rua do Café, combinando mídia de alta precisão, SEO e arquitetura de catálogo.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>45%</div>
              <p className={styles.metricDesc}>
                Do faturamento do pico sazonal da Black Friday gerado pelo tráfego orgânico, reduzindo o custo de aquisição e blindando o caixa.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>10 Anos (+20%)</div>
              <p className={styles.metricDesc}>
                Escala contínua da Máquinas & Café com expansão anual de 20% ao longo de uma década inteira, consolidando liderança nacional B2C e B2B.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+50% & +30%</div>
              <p className={styles.metricDesc}>
                Aumento simultâneo de 50% no tráfego qualificado e 30% na taxa de conversão através de esteiras de conteúdo semântico e testes de UX.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+20% ASD</div>
              <p className={styles.metricDesc}>
                Elevação na Duração Média de Sessão na multinacional B2B SaaS Sheetgo, mediante testes A/B e redesenho da jornada transacional do usuário.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+100 Lojistas</div>
              <p className={styles.metricDesc}>
                Liderança técnica no onboarding e integração de mais de 100 lojistas parceiros em ecossistema Shopify Plus integrado via ERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODELOS DE ATUAÇÃO & VENDA DE SERVIÇOS */}
      <section className={styles.servicesSection} id="servicos">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Como Podemos Trabalhar Juntos</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Modelos de Consultoria, Advisory e Liderança Executiva
            </h2>
            <p className={styles.sectionDesc}>
              Formatos flexíveis de contratação desenhados para a maturidade de cada empresa, desde diagnósticos pontuais até direção estratégica contínua.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Modelo 1 */}
            <div className={styles.serviceCard}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Sprint de 2 a 4 Semanas</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Diagnóstico Estratégico & Auditoria 360°</h3>
              <p className={styles.serviceOverview}>
                Um raio-X cirúrgico na sua operação digital para identificar vazamentos de conversão, ineficiências em mídia e oportunidades imediatas de tráfego orgânico.
              </p>
              <ul className={styles.serviceList}>
                <li>Auditoria completa de SEO Técnico, indexação e canibalização</li>
                <li>Mapeamento de fricção de checkout e CRO no funil de compras</li>
                <li>Análise de Unit Economics, margem de contribuição e POAS real</li>
                <li>Relatório executivo com matriz de priorização por esforço e impacto</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, gostaria de solicitar um Diagnóstico Estratégico para minha empresa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnServiceCta}
              >
                Solicitar Diagnóstico ↗
              </a>
            </div>

            {/* Modelo 2: Destaque */}
            <div className={`${styles.serviceCard} ${styles.serviceFeaturedCard}`}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Acompanhamento Mensal (Retainer)</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Consultoria Contínua & Direcionamento Técnico</h3>
              <p className={styles.serviceOverview}>
                Orientação estratégica e suporte direto aos seus squads internos ou agências parceiras, garantindo que o plano de crescimento seja executado com disciplina.
              </p>
              <ul className={styles.serviceList}>
                <li>Reuniões quinzenais de acompanhamento e revisão de metas de DRE</li>
                <li>Supervisão de testes A/B contínuos e esteiras de CRO</li>
                <li>Construção e governança de Topic Clusters e Topical Maps</li>
                <li>Otimização contínua de campanhas de Google Ads, Meta Ads e Retail Media</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, tenho interesse no modelo de Consultoria Contínua mensal.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnServiceCta}
                style={{ backgroundColor: '#2E6F40', borderColor: '#2E6F40' }}
              >
                Contratar Consultoria ↗
              </a>
            </div>

            {/* Modelo 3 */}
            <div className={styles.serviceCard}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Contrato Trimestral / Semestral</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Advisory & Liderança Fracionada (Fractional Head)</h3>
              <p className={styles.serviceOverview}>
                Atuação executiva sênior em parceria direta com fundadores, conselhos e diretoria, trazendo liderança madura de e-commerce sem o custo fixo de um C-Level integral.
              </p>
              <ul className={styles.serviceList}>
                <li>Definição do plano diretor de crescimento e arquitetura tecnológica</li>
                <li>Mentoria e capacitação de lideranças e especialistas internos</li>
                <li>Condução de migrações complexas de plataforma (Shopify, Magento, VTEX)</li>
                <li>Alinhamento da governança comercial e financeira ao conselho</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, gostaria de conversar sobre Advisory e Liderança Fracionada.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnServiceCta}
              >
                Alinhar Advisory ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OS 4 PILARES DE ESPECIALIDADE */}
      <section className={styles.pillarsSection} id="especialidades">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Matriz de Competências</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Os 4 Pilares de Engenharia de E-commerce & Growth
            </h2>
            <p className={styles.sectionDesc}>
              Metodologia prática que substitui achismos intuitivos por relações claras de causa e efeito, dados estruturados e retorno financeiro comprovado.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Pilar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 01</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                SEO Técnico, Semântico & IA Generativa (GEO / AEO)
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Taxonomia escalável para categorias e páginas de produto, mitigação de canibalização, gestão de filtros facetados, controle de crawl budget e indexação seletiva. Construção de Topic Clusters e autoridade temática E-E-A-T.
                </p>
                <p>
                  Engenharia de dados estruturados com grafos JSON-LD conectados (Product, Offer, AggregateRating, Organization, BreadcrumbList, FAQPage), garantindo relevância no Google e nos motores de busca de IA generativa (Google AI Overviews, Perplexity e ChatGPT Search).
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
                  Diagnóstico aprofundado dos gargalos de abandono no funil: vitrine, páginas de produto, carrinho e checkout transparente. Formulação de hipóteses causais baseadas no comportamento real dos usuários.
                </p>
                <p>
                  Execução de testes A/B validados e reformulação de jornadas de compra para diminuir a fricção, esclarecer políticas de entrega e elevar o ticket médio com proteção da margem de lucro.
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
                Arquitetura de E-commerce, Marketplaces & ERPs
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gestão ponta a ponta de plataformas de comércio eletrônico, migrações complexas de loja com preservação do histórico de SEO (mapeamento 301), integrações ERP seguras, precificação dinâmica e esteiras de fulfillment.
                </p>
                <p>
                  Estruturação de vendas híbridas e assistidas integrando canais de WhatsApp com CRM para itens de ticket alto e compras corporativas B2B com faturamento direto.
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
                  Gestão de orçamento de aquisição alinhada diretamente aos números da contabilidade: cálculo rigoroso de CAC, LTV, ROAS real contra Blended ROAS, POAS (Profit on Ad Spend) e margem líquida.
                </p>
                <p>
                  Estratégias de funil integrado no Google, Meta e marketplaces, priorizando recompra e retenção para reduzir a dependência contínua de mídia paga cara.
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

      {/* 6. CURRÍCULO ONLINE / TRAJETÓRIA EXECUTIVA */}
      <section className={styles.casesSection} id="curriculo">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Experiência Profissional & Realizações</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Linha do Tempo Executiva e Casos de Sucesso
            </h2>
            <p className={styles.sectionDesc}>
              Trajetória comprovada em operações de alta complexidade com resultados auditáveis e links para validação pública.
            </p>
          </div>

          <div className={styles.casesTimeline}>
            {/* Cargo 1: Rua do Café */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2024 a Presente | Atuação Híbrida</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Rua do Café</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Head of Marketing & E-commerce</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Gestão completa do orçamento de aquisição e performance (Google Ads e Meta Ads), viabilizando expansão sustentada de <strong>+66% MoM em GMV</strong>.
                    </li>
                    <li>
                      Engenharia de SEO Semântico, grafos JSON-LD e Topic Clusters voltados à cafeicultura especial (mapeamento de origens, métodos de extração e cafés especiais), posicionando a marca em motores de busca generativa (GEO).
                    </li>
                    <li>
                      Liderança no onboarding de <strong>mais de 100 lojistas parceiros</strong> no ecossistema Shopify Plus com integração direta via ERP, além da coordenação de squads em feiras nacionais do setor.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://ruadocafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Loja Oficial Rua do Café ↗
                  </a>
                  <a href="https://blog.ruadocafe.com.br/author/arthur/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Artigos Técnicos Publicados ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Cargo 2: Sheetgo */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2024 a Outubro 2024 | Operação Global Remota</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Sheetgo</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Senior SEO & CRO Optimization Specialist (B2B SaaS Global)</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Expansão do tráfego orgânico internacional para plataforma global de automação de planilhas e integração de dados, em operação conduzida integralmente em inglês.
                    </li>
                    <li>
                      Auditorias técnicas aprofundadas com Screaming Frog, arquitetura avançada de Schema Markup e estruturação de Topic Clusters voltados a workflows e produtividade corporativa.
                    </li>
                    <li>
                      Incremento de <strong>+20% na Duração Média de Sessão (Average Session Duration)</strong> através de testes de usabilidade, mapas de calor e alinhamento do roadmap de conteúdo ao ciclo do produto.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.sheetgo.com/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Plataforma Oficial Sheetgo ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Cargo 3: Máquinas & Café */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2014 a Janeiro 2024 | 10 Anos de Liderança Contínua</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Máquinas & Café</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>E-commerce & Marketplaces Manager</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Direção de todas as esteiras operacionais (catálogo, estoque, logística, tecnologia e suporte), consolidando a loja como líder nacional no comércio online B2C e B2B de máquinas de espresso.
                    </li>
                    <li>
                      Migração e gestão de arquitetura Magento conectada a ERPs e precificação dinâmica, sustentando <strong>crescimento de 20% ao ano ao longo de uma década inteira</strong>.
                    </li>
                    <li>
                      Captação orgânica e otimizações de conversão que geraram <strong>+50% de tráfego qualificado</strong>, <strong>+30% na taxa de conversão</strong> e <strong>45% do faturamento da Black Friday oriundo de busca orgânica</strong>.
                    </li>
                  </ul>

                  <div className={styles.caseQuote}>
                    &ldquo;A estratégia de SEO aliada à produção de conteúdos de qualidade tem impulsionado não só o nosso crescimento orgânico, como o da loja como um todo, reduzindo a dependência de mídia paga.&rdquo;
                    <div style={{ marginTop: '0.4rem', fontSize: '0.82rem', color: '#A3A099' }}>
                      Citação pública registrada pela consultoria parceira Bridge SEO
                    </div>
                  </div>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.maquinasecafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Loja Virtual Máquinas & Café ↗
                  </a>
                  <a href="https://bridgeseo.com.br/consultoria-de-seo-para-e-commerce/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Ver Prova Social Pública (Bridge SEO) ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Cargo 4: Consultoria Estratégica Independente */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>2018 a Presente | Consultoria & Advisory Estratégico</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Consultoria Independente & Projetos Especiais</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Consultor Sênior de E-commerce, Growth & Retail Media</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      <strong>Lojas 360 EPI:</strong> Inteligência operacional para vendas B2B e B2C, auditoria de mídia paga, proteção da margem de contribuição, unit economics e estratégia de Retail Media para equipamentos de proteção individual.
                    </li>
                    <li>
                      <strong>Midea Brasil & Cope Calçados:</strong> Diagnóstico avançado de Unit Economics, reestruturação de campanhas de Performance Max e Search com negativação semântica minuciosa, funis assistidos via WhatsApp e elevação expressiva de POAS.
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

      {/* 7. PRODUÇÃO INTELECTUAL E FORMAÇÃO */}
      <section className={styles.intellectSection} id="publicacoes">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Visão Interdisciplinar</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Formação Acadêmica & Produção Intelectual
            </h2>
            <p className={styles.sectionDesc}>
              A integração entre Ciências Sociais na UNICAMP e Engenharia de E-commerce: analisando comportamento de consumo, algoritmos de recomendação e plataformas digitais como ecossistemas vivos que demandam ética, dados precisos e visão sistêmica.
            </p>
          </div>

          <div className={styles.intellectGrid}>
            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Autoridade Semântica & Mercado</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Análises de Mercado e Cafeicultura Especial
              </h3>
              <p className={styles.articleDesc}>
                Artigos e análises que estruturam entidades, padrões de consumo e valor agregado para o setor cafeeiro, indexados e citados por motores de busca e modelos de linguagem generativos.
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

      {/* 8. FOOTER EXECUTIVO STANDALONE */}
      <footer className={styles.executiveFooter} id="contato">
        <div className={styles.container}>
          <div className={styles.footerBox}>
            <div className={styles.footerAvatarWrapper}>
              <Image
                src="/arthur-saggioratto.jpg"
                alt="Arthur Saggioratto"
                width={72}
                height={72}
                className={styles.footerAvatar}
              />
            </div>

            <h2 className={`${styles.footerTitle} ${styles.headingFont}`}>
              Pronto para Estruturar sua Operação com Rigor Técnico e Lucro Real?
            </h2>
            <p className={styles.footerSubtitle}>
              Disponível para diagnósticos executivos, consultoria contínua de e-commerce e advisory estratégico para empresas em fase de escala.
            </p>

            <div className={styles.ctaGroup} style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <a
                href={`https://wa.me/5519993497819?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnPrimary} ${styles.headingFont}`}
              >
                <span>Conversar no WhatsApp (+55 19 99349-7819)</span>
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

              <button
                type="button"
                onClick={handlePrint}
                className={`${styles.btnSecondary} ${styles.headingFont}`}
              >
                <span>Salvar / Imprimir Currículo</span>
              </button>
            </div>

            <div className={`${styles.entityInfo} ${styles.monoFont}`}>
              <div><strong>Arthur Saggioratto</strong> | Head of E-commerce, Growth & Senior SEO/CRO Specialist</div>
              <div>Entidade Jurídica: 31.384.814 ARTHUR SAGGIORATTO NETO (CNPJ: 31.384.814/0001-09)</div>
              <div>Localização: Santa Bárbara d&apos;Oeste e Campinas, SP, Brasil (Atuação Global)</div>
              <div style={{ marginTop: '0.5rem', color: '#55B36E' }}>
                Formação Acadêmica: Bacharelado em Ciências Sociais (UNICAMP) &bull; Bacharelado em Marketing e Gestão de Vendas (FAAL)
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#625F59' }}>
                &copy; {new Date().getFullYear()} Arthur Saggioratto. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArthurPortfolioView
