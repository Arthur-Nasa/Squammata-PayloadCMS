'use client'

import React from 'react'
import Image from 'next/image'
import styles from './arthur.module.scss'

export const ArthurPortfolioView: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const whatsappMessage = encodeURIComponent(
    'Olá Arthur, vi seu currículo executivo e gostaria de conversar sobre um projeto para o meu e-commerce.'
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
              <a href="#servicos" className={styles.navLinkItem}>Consultoria & Advisory</a>
              <a href="#publicacoes" className={styles.navLinkItem}>Formação</a>
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
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION COM PERFIL EXECUTIVO HUMANIZADO */}
      <header className={styles.heroSection} id="sobre">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Coluna 1: Posicionamento e Proposta de Valor Concreta */}
            <div className={styles.heroTextCol}>
              <div className={styles.editorialBadge}>
                <span className={styles.monoFont}>15 ANOS NO E-COMMERCE BRASILEIRO • INTERIOR DE SP • FORMAÇÃO UNICAMP</span>
              </div>

              <h1 className={`${styles.heroTitle} ${styles.headingFont}`}>
                Crescimento com Lucro na Última Linha: SEO Técnico, Otimização de Loja e Gestão de Mídia para Quem não Pode Rasgar Dinheiro
              </h1>

              <p className={`${styles.heroSubtitle} ${styles.bodyFont}`}>
                Quem toca e-commerce no Brasil sabe que faturamento de vitrine não paga boleto. Atuo ao lado de
                fundadores e diretorias ajustando catálogo, frete, funil de vendas, esteiras de WhatsApp e mídia de performance
                para fazer o dinheiro sobrar no caixa no fim do mês.
              </p>

              <div className={styles.ctaGroup}>
                <a
                  href={`https://wa.me/5519993497819?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnPrimary} ${styles.headingFont}`}
                >
                  <span>Chamar no WhatsApp (+55 19 99349-7819)</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <a
                  href="#curriculo"
                  className={`${styles.btnSecondary} ${styles.headingFont}`}
                >
                  <span>Ver Trajetória e Casos Reais</span>
                </a>

                <a
                  href="#servicos"
                  className={`${styles.btnSecondary} ${styles.headingFont}`}
                >
                  <span>Como Funciona a Consultoria</span>
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
                    <span>Disponível para Consultoria e Advisory</span>
                  </div>

                  <h2 className={`${styles.profileName} ${styles.headingFont}`}>Arthur Saggioratto</h2>
                  <p className={styles.profileTitle}>Head de E-commerce, Growth & Especialista em SEO e Conversão</p>
                  <p className={`${styles.profileLocation} ${styles.monoFont}`}>Santa Bárbara d&apos;Oeste / Campinas, SP</p>
                </div>

                <div className={styles.profileStatsGrid}>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>15 Anos</div>
                    <div className={styles.statItemLabel}>No Campo de Batalha</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>B2C & B2B</div>
                    <div className={styles.statItemLabel}>Varejo e Indústria</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>+100 Lojas</div>
                    <div className={styles.statItemLabel}>Parceiras Integradas</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>UNICAMP</div>
                    <div className={styles.statItemLabel}>Ciências Sociais</div>
                  </div>
                </div>

                <div className={styles.profileChips}>
                  <a
                    href="https://linkedin.com/in/arthurnasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileChipLink}
                  >
                    <span>LinkedIn: /in/arthurnasa</span>
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
                    <span>WhatsApp Direto: (19) 99349-7819</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Wall de Operações Reais Brasileiras */}
          <div className={styles.logoWall}>
            <div className={`${styles.logoWallTitle} ${styles.monoFont}`}>
              Operações, Marcas e Instituições Onde Atuei Diretamente
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

              <span className={styles.logoItem} style={{ cursor: 'default' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/copecalcados.com.br" alt="Cope Calçados" loading="lazy" />
                <span>Cope Calçados</span>
              </span>

              <a href="https://www.unicamp.br/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://icon.horse/icon/unicamp.br" alt="UNICAMP" loading="lazy" />
                <span>UNICAMP</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PAINEL DE BIG NUMBERS (NÚMEROS REAIS DE OPERAÇÃO) */}
      <section className={styles.numbersSection} id="impacto">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Resultados de Caixa</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Impacto Direto no Lucro e na Escala das Operações
            </h2>
            <p className={styles.sectionDesc}>
              Números auditáveis conquistados no dia a dia da operação comercial, arrumando processos e blindando a margem de contribuição.
            </p>
          </div>

          <div className={styles.numbersGrid}>
            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+66% ao Mês</div>
              <p className={styles.metricDesc}>
                Crescimento sustentado mês a mês em volume bruto de vendas na Rua do Café, combinando tráfego qualificado de busca com arquitetura de produto.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>45% no Orgânico</div>
              <p className={styles.metricDesc}>
                Faturamento na Black Friday gerado sem pagar um centavo a mais de anúncio, trazendo pedidos pelo SEO técnico preparado com meses de antecedência.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>10 Anos (+20% ao Ano)</div>
              <p className={styles.metricDesc}>
                Uma década à frente da Máquinas & Café com crescimento anual constante de 20%, transformando uma loja de nicho em referência nacional B2C e B2B.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+50% Tráfego / +30% Conversão</div>
              <p className={styles.metricDesc}>
                Aumento simultâneo de visitantes prontos para comprar e taxa de pedidos concluídos, limpando a vitrine e facilitando o carrinho de compras.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+20% Tempo em Sessão</div>
              <p className={styles.metricDesc}>
                Elevação no tempo de permanência de usuários corporativos na multinacional de software Sheetgo, otimizando o fluxo de navegação e onboarding.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+100 Lojistas Parceiros</div>
              <p className={styles.metricDesc}>
                Integração técnica e comercial de mais de cem marcas e fornecedores em plataforma Shopify Plus conectada diretamente aos sistemas de ERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODELOS DE ATUAÇÃO E SERVIÇOS (COMO TRABALHAMOS) */}
      <section className={styles.servicesSection} id="servicos">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Formatos de Contratação</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Como Podemos Estruturar a sua Operação
            </h2>
            <p className={styles.sectionDesc}>
              Sem enrolação nem relatórios que ninguém lê: formatos práticos desenhados para o estágio de maturidade e os desafios da sua empresa.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Modelo 1 */}
            <div className={styles.serviceCard}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Sprint de 3 a 4 Semanas</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Diagnóstico Operacional & Auditoria de Loja</h3>
              <p className={styles.serviceOverview}>
                Um raio-X completo para estancar sangrias de verba, identificar onde os clientes estão abandonando pedidos e mapear oportunidades rápidas de receita.
              </p>
              <ul className={styles.serviceList}>
                <li>Auditoria de SEO Técnico: indexação, páginas canibalizadas e catálogo no Google</li>
                <li>Análise de gargalos no checkout, cálculo de frete e abandono de carrinho</li>
                <li>Revisão de contas de anúncio: para onde está indo o dinheiro do Google e Meta</li>
                <li>Plano de ação prioritário com o que gera retorno rápido e o que precisa de estruturação</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, tenho interesse no Diagnóstico Operacional para minha loja virtual.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnServiceCta}
              >
                Solicitar Diagnóstico ↗
              </a>
            </div>

            {/* Modelo 2: Destaque */}
            <div className={`${styles.serviceCard} ${styles.serviceFeaturedCard}`}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Acompanhamento Mensal Contínuo</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Consultoria com Mão na Massa e Direcionamento</h3>
              <p className={styles.serviceOverview}>
                Acompanhamento próximo para orientar o seu time interno ou sua agência parceira, cobrando execução técnica e acompanhando o fechamento do DRE.
              </p>
              <ul className={styles.serviceList}>
                <li>Alinhamentos quinzenais com lideranças para validar metas e métricas de lucro</li>
                <li>Supervisão de campanhas de tráfego pago com foco em margem de contribuição</li>
                <li>Implementação contínua de melhorias de conversão (CRO) e esteiras de WhatsApp</li>
                <li>Estratégia de conteúdo comercial para SEO que gera vendas orgânicas consistentes</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, gostaria de entender a Consultoria Contínua para o meu negócio.')}`}
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
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Atuação Trimestral / Semestral</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Liderança Fracionada (Head de E-commerce)</h3>
              <p className={styles.serviceOverview}>
                Direção executiva sênior diretamente com os sócios e fundadores para operações em crescimento acelerado que precisam de liderança madura sem o custo de um C-Level integral.
              </p>
              <ul className={styles.serviceList}>
                <li>Construção do plano diretor de vendas online, canais e infraestrutura</li>
                <li>Condução técnica de migrações de plataforma (Shopify, Nuvemshop, Magento, VTEX)</li>
                <li>Seleção, contratação e treinamento de profissionais e parceiros técnicos</li>
                <li>Governança e reporte de indicadores estratégicos para conselho e investidores</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, quero conversar sobre o formato de Liderança Fracionada para minha empresa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnServiceCta}
              >
                Alinhar Liderança Fracionada ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OS 4 PILARES PRÁTICOS DE ESPECIALIDADE */}
      <section className={styles.pillarsSection} id="especialidades">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>O Que Eu Domino na Prática</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Os 4 Pilares Técnicos de um E-commerce Lucrativo
            </h2>
            <p className={styles.sectionDesc}>
              A junção entre arquitetura técnica sólida, comportamento do consumidor e disciplina financeira para fazer a operação crescer com segurança.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Pilar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 01</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                SEO Técnico e Busca Orgânica para Vendas
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Estruturação de categorias e páginas de produto para você aparecer nas primeiras posições do Google sem precisar pagar por cada clique. Mitigação de canibalização, controle de indexação e arquitetura semântica para o seu catálogo ser encontrado por quem quer comprar.
                </p>
                <p>
                  Implementação avançada de dados estruturados (Schema.org JSON-LD para produtos, ofertas, avaliações e perguntas frequentes), garantindo que sua loja também seja citada e recomendada pelos novos assistentes e buscadores de inteligência artificial.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googlesearchconsole/458CF5" alt="GSC" />
                  Google Search Console
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/semrush/FF642D" alt="Semrush" />
                  Semrush
                </span>
                <span className={styles.stackBadge}>Screaming Frog</span>
                <span className={styles.stackBadge}>Schema.org JSON-LD</span>
                <span className={styles.stackBadge}>Velocidade de Página</span>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 02</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Otimização de Conversão (CRO) & Usabilidade
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Descobrir exatamente em qual etapa o cliente empaca e vai embora sem comprar: seja pelo susto no valor do frete, lentidão nas fotos do produto, falta de confiança no checkout ou excesso de campos para preencher.
                </p>
                <p>
                  Testes práticos de usabilidade e redesign de páginas de produto para transmitir credibilidade, tirar dúvidas técnicas antes do fechamento e aumentar o ticket médio dos pedidos.
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
                  Tag Manager Server-Side
                </span>
                <span className={styles.stackBadge}>Mapas de Calor e Gravações</span>
                <span className={styles.stackBadge}>Testes A/B</span>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 03</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Plataformas, ERPs e Integrações Logísticas
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gestão técnica de lojas virtuais com foco na vida real do estoque e expedição: migrações de plataforma sem perder o histórico do Google, sincronização redonda com Bling, Tiny e outros ERPs, cálculo dinâmico de frete e esteiras de fulfillment.
                </p>
                <p>
                  Estruturação de vendas assistidas com WhatsApp conectado ao CRM para itens de valor elevado e pedidos corporativos faturados no boleto.
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
                <span className={styles.stackBadge}>Bling e Tiny ERP</span>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 04</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Mídia Paga com Olho na Margem de Lucro Real
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gestão de anúncios no Google Ads, Meta Ads e marketplaces orientada pelo que realmente sobra no banco. O foco não é comemorar ROAS de painel enquanto a operação sangra dinheiro com frete grátis, devolução e desconto excessivo.
                </p>
                <p>
                  Construção de campanhas de alta intenção, negativação diária de termos inúteis e esteiras de recompra para clientes da base, diluindo o custo de aquisição ao longo do ano.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googleads/4285F4" alt="Google Ads" />
                  Google Ads (PMax e Busca)
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/meta/0081FB" alt="Meta Ads" />
                  Meta Ads
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/mercadopago/FFE600" alt="Mercado Ads" />
                  Mercado Ads
                </span>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/looker/4285F4" alt="Looker" />
                  Painéis no Looker Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURRÍCULO ONLINE / TRAJETÓRIA E ESTUDOS DE CASO */}
      <section className={styles.casesSection} id="curriculo">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Trajetória Profissional</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Experiência no Varejo Digital e Casos de Sucesso
            </h2>
            <p className={styles.sectionDesc}>
              Projetos reais documentados com clareza de contexto, intervenções técnicas e resultados financeiros comprovados.
            </p>
          </div>

          <div className={styles.casesTimeline}>
            {/* Caso 1: Rua do Café */}
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
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Head de Marketing & E-commerce</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Gestão completa das verbas de Google Ads e Meta Ads, viabilizando expansão sustentada de <strong>+66% ao mês em volume de vendas</strong> sem deteriorar a margem do negócio.
                    </li>
                    <li>
                      Arquitetura de conteúdo e SEO voltada ao universo dos cafés especiais (regiões produtoras, métodos de extração e microlotes), posicionando a marca em destaque nas buscas tradicionais e nas novas ferramentas de inteligência artificial.
                    </li>
                    <li>
                      Liderança no onboarding de <strong>mais de 100 produtores e marcas parceiras</strong> em ecossistema Shopify Plus integrado ao ERP, além da representação da marca em grandes feiras nacionais do setor cafeeiro.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://ruadocafe.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Loja Oficial da Rua do Café ↗
                  </a>
                  <a href="https://blog.ruadocafe.com.br/author/arthur/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Artigos Técnicos Publicados ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Caso 2: Sheetgo */}
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
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Especialista Sênior em SEO & CRO (SaaS B2B Global)</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Expansão do tráfego orgânico internacional para plataforma de integração de dados e planilhas com atuação nos Estados Unidos e Europa, em operação conduzida totalmente em inglês.
                    </li>
                    <li>
                      Auditorias técnicas profundas com Screaming Frog, estruturação semântica de páginas e organização de temas de produtividade corporativa para captura de demanda qualificada.
                    </li>
                    <li>
                      Ganho de <strong>+20% no tempo médio de permanência dos usuários</strong> no site através de testes de usabilidade, mapas de calor e alinhamento do conteúdo com o produto.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.sheetgo.com/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Plataforma Oficial da Sheetgo ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Caso 3: Máquinas & Café */}
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
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Gerente Geral de E-commerce & Marketplaces</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Gestão completa de todas as pontas da empresa (catálogo de máquinas italianas, peças de reposição, expedição, atendimento e tecnologia), consolidando a loja como líder nacional no segmento B2C e corporativo B2B.
                    </li>
                    <li>
                      Migração e evolução da loja em Magento integrada ao ERP e regras de precificação dinâmica, sustentando <strong>crescimento médio de 20% ao ano durante dez anos consecutivos</strong>.
                    </li>
                    <li>
                      Trabalho consistente de SEO e melhorias no carrinho que geraram <strong>+50% de tráfego qualificado</strong>, <strong>+30% na conversão</strong> e garantiram que <strong>45% das vendas da Black Friday viessem do canal orgânico</strong>, sem canibalizar a margem.
                    </li>
                  </ul>

                  <div className={styles.caseQuote}>
                    &ldquo;A estratégia de SEO aliada à produção de conteúdos de qualidade tem impulsionado não só o nosso crescimento orgânico, como o da loja como um todo, reduzindo a dependência de mídia paga.&rdquo;
                    <div style={{ marginTop: '0.4rem', fontSize: '0.82rem', color: '#A39E93' }}>
                      Depoimento registrado publicamente pela consultoria parceira Bridge SEO
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

            {/* Caso 4: Consultoria Estratégica Independente (Cope Calçados e Lojas 360 EPI) */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>2018 a Presente | Consultoria & Projetos Estratégicos</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Consultoria Independente de E-commerce</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Consultor Sênior de Operações, Mídia e Conversão</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      <strong>Cope Calçados:</strong> Consultoria com foco na margem de contribuição do varejo de moda e calçados. Reestruturação das contas de Google Ads e Meta Ads para eliminar a queima de verba em termos caros que não fechavam a conta, criação de esteira ágil de vendas consultivas e recuperação de carrinho pelo WhatsApp para elevar o ticket médio, além de campanhas direcionadas de recompra para a base de clientes já cadastrados.
                    </li>
                    <li>
                      <strong>Lojas 360 EPI:</strong> Estruturação de inteligência comercial para vendas B2B e B2C no setor de Equipamentos de Proteção Individual. Organização de catálogo complexo com múltiplas variações técnicas de CA (Certificado de Aprovação), cálculo e inteligência logística de frete para o interior de São Paulo e território nacional, campanhas de busca com foco em termos de alta intenção de compra e esteiras de faturamento no boleto para clientes corporativos.
                    </li>
                  </ul>
                </div>
                <div className={styles.caseLinks}>
                  <a href="https://www.lojas360.com.br/" target="_blank" rel="noopener noreferrer" className={styles.linkExternal}>
                    Lojas 360 EPI Oficial ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. FORMAÇÃO ACADÊMICA E PRODUÇÃO INTELECTUAL */}
      <section className={styles.intellectSection} id="publicacoes">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Visão Humana e Analítica</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Formação Acadêmica & Produção Intelectual
            </h2>
            <p className={styles.sectionDesc}>
              A bagagem em Ciências Sociais na UNICAMP combinada à prática de marketing: entender por que as pessoas compram, como reagem a plataformas digitais e como criar negócios sustentáveis que respeitam dados e clientes.
            </p>
          </div>

          <div className={styles.intellectGrid}>
            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Mercado & Varejo Especializado</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Análises de Mercado e Cafeicultura Especial
              </h3>
              <p className={styles.articleDesc}>
                Artigos práticos que analisam hábitos de consumo, métodos de preparo e agregação de valor para o mercado cafeeiro brasileiro, indexados como referência pelo Google e assistentes de IA.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/author/arthur/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Ler Artigos no Blog da Rua do Café ↗
              </a>
            </div>

            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Origens & Rastreabilidade</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Muzambinho e o Sudoeste de Minas
              </h3>
              <p className={styles.articleDesc}>
                Estudo geográfico e produtivo de origens cafeeiras especiais, conectando a história das famílias produtoras às fichas técnicas e descrições detalhadas de produto na loja virtual.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/tag/sudoeste-de-minas/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Ver Estudo Regional de Muzambinho ↗
              </a>
            </div>

            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Certificações & Valor de Marca</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Indicações Geográficas no Estado de São Paulo
              </h3>
              <p className={styles.articleDesc}>
                Mapeamento das regiões com denominação de origem e selos de qualidade, ensinando o consumidor a reconhecer valor e aumentando a taxa de conversão de produtos de ticket mais alto.
              </p>
              <a
                href="https://blog.ruadocafe.com.br/tag/sao-paulo/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkExternal}
              >
                Acessar Guia de Indicações Geográficas ↗
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
              Pronto para Destravar as Vendas e a Margem do seu E-commerce?
            </h2>
            <p className={styles.footerSubtitle}>
              Disponível para diagnósticos operacionais, consultoria mensal contínua e liderança fracionada de e-commerce em todo o Brasil.
            </p>

            <div className={styles.ctaGroup} style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <a
                href={`https://wa.me/5519993497819?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnPrimary} ${styles.headingFont}`}
              >
                <span>Chamar no WhatsApp: (19) 99349-7819</span>
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
                <span>Perfil no LinkedIn ↗</span>
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
              <div><strong>Arthur Saggioratto</strong> | Consultor e Head de E-commerce, Growth & SEO Técnico</div>
              <div>Razão Cadastral: 31.384.814 ARTHUR SAGGIORATTO NETO (CNPJ: 31.384.814/0001-09)</div>
              <div>Base Operacional: Santa Bárbara d&apos;Oeste e Campinas, SP (Atendimento Nacional e Global)</div>
              <div style={{ marginTop: '0.5rem', color: '#4E9B60' }}>
                Formação Acadêmica: Bacharelado em Ciências Sociais (UNICAMP) &bull; Bacharelado em Marketing e Gestão de Vendas (FAAL)
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#68655E' }}>
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
