'use client'

import React, { useState, useEffect } from 'react'
import styles from './arthur.module.scss'

export const ArthurPortfolioView: React.FC = () => {
  // Resolução dinâmica e defensiva do caminho do avatar para compatibilidade universal
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

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const whatsappMessage = encodeURIComponent(
    'Olá Arthur, vi seu currículo executivo e gostaria de conversar sobre um projeto para o meu e-commerce.'
  )

  return (
    <div className={styles.portfolioPage} data-portfolio-standalone="true">
      {/* 1. NAVBAR STANDALONE FIXA COM AVATAR / LOGO */}
      <nav className={styles.standaloneNavbar} aria-label="Navegação Principal do Portfólio">
        <div className={styles.container}>
          <div className={styles.navInner}>
            {/* Brand / Logo com Foto e Status */}
            <a href="#sobre" className={styles.navBrand}>
              <div className={styles.navAvatarWrapper}>
                <img
                  src={avatarSrc}
                  alt="Arthur Saggioratto"
                  width={44}
                  height={44}
                  className={styles.navAvatar}
                  onError={handleImageFallback}
                  loading="eager"
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
                Mais Vendas e Lucro Real no E-commerce: SEO, Melhoria de Loja e Gestão de Anúncios sem Queimar Dinheiro
              </h1>

              <p className={`${styles.heroSubtitle} ${styles.bodyFont}`}>
                Faturamento alto não adianta se o lucro não sobra no bolso. Ajudo empresários e donos de lojas virtuais a
                venderem mais pelo Google, reduzirem custos com anúncios, destravarem gargalos de frete e aumentarem as
                vendas pelo WhatsApp: fazendo o dinheiro sobrar no caixa no final do mês.
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
                  <span>Ver Casos Reais e Trajetória</span>
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
                    <img
                      src={avatarSrc}
                      alt="Arthur Saggioratto"
                      width={124}
                      height={124}
                      className={styles.profilePhoto}
                      onError={handleImageFallback}
                      loading="eager"
                    />
                  </div>

                  <div className={styles.profileStatusBadge}>
                    <span className={styles.pulseDot} />
                    <span>Disponível para Consultoria e Projetos</span>
                  </div>

                  <h2 className={`${styles.profileName} ${styles.headingFont}`}>Arthur Saggioratto</h2>
                  <p className={styles.profileTitle}>Especialista em E-commerce, Vendas Online & Crescimento com Lucro</p>
                  <p className={`${styles.profileLocation} ${styles.monoFont}`}>Santa Bárbara d&apos;Oeste / Campinas, SP</p>
                </div>

                <div className={styles.profileStatsGrid}>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>15 Anos</div>
                    <div className={styles.statItemLabel}>Experiência Prática</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>B2C & B2B</div>
                    <div className={styles.statItemLabel}>Varejo e Indústria</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={`${styles.statItemValue} ${styles.monoFont}`}>+100 Lojas</div>
                    <div className={styles.statItemLabel}>Marcas Integradas</div>
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
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Resultados Reais</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Impacto Direto no Lucro e nas Vendas
            </h2>
            <p className={styles.sectionDesc}>
              Números conquistados no dia a dia das operações: menos desperdício de verba, processos organizados e caixa protegido.
            </p>
          </div>

          <div className={styles.numbersGrid}>
            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+66% ao Mês</div>
              <p className={styles.metricDesc}>
                Crescimento contínuo de vendas na Rua do Café, organizando a loja e atraindo clientes qualificados pelo Google e anúncios.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>45% no Orgânico</div>
              <p className={styles.metricDesc}>
                Quase metade do faturamento da Black Friday sem gastar nada com anúncios pagos, apenas com clientes que encontraram a loja no Google.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>10 Anos (+20% ao Ano)</div>
              <p className={styles.metricDesc}>
                Uma década à frente da Máquinas & Café com crescimento contínuo de 20% ao ano, tornando a empresa referência nacional no setor.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+50% Visitas / +30% Compras</div>
              <p className={styles.metricDesc}>
                Mais clientes visitando a loja e menos desistências na hora de pagar, facilitando o cálculo de frete e o fechamento do pedido.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+20% Tempo no Site</div>
              <p className={styles.metricDesc}>
                Usuários navegando por mais tempo na multinacional de software Sheetgo, tirando dúvidas com facilidade e gerando novos cadastros.
              </p>
            </div>

            <div className={styles.numberCard}>
              <div className={`${styles.metricValue} ${styles.monoFont}`}>+100 Fornecedores</div>
              <p className={styles.metricDesc}>
                Mais de cem marcas e fornecedores integrados em loja Shopify sem dor de cabeça com estoque, conectados direto ao sistema da empresa (ERP).
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
              Como Podemos Trabalhar Juntos
            </h2>
            <p className={styles.sectionDesc}>
              Sem enrolação nem relatórios complicados: formatos práticos adaptados ao momento e às necessidades do seu negócio.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Modelo 1 */}
            <div className={styles.serviceCard}>
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Sprint de 3 a 4 Semanas</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Diagnóstico Completo da Loja Virtual</h3>
              <p className={styles.serviceOverview}>
                Um raio-X prático para parar de queimar dinheiro em anúncios ruins, descobrir por que os clientes desistem no carrinho e saber exatamente o que corrigir primeiro.
              </p>
              <ul className={styles.serviceList}>
                <li>Auditoria no Google: por que seus produtos não aparecem nas primeiras posições quando alguém pesquisa</li>
                <li>Gargalos de compra: susto com frete, cadastro difícil, lentidão ou checkout confuso</li>
                <li>Revisão dos anúncios (Google e Meta): corte imediato de verba desperdiçada em cliques sem venda</li>
                <li>Plano de ação direto ao ponto: lista priorizada do que traz retorno rápido para o caixa</li>
              </ul>
              <a
                href={`https://wa.me/5519993497819?text=${encodeURIComponent('Olá Arthur, tenho interesse no Diagnóstico Completo para minha loja virtual.')}`}
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
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Consultoria com Acompanhamento Prático</h3>
              <p className={styles.serviceOverview}>
                Trabalho lado a lado com sua equipe ou agência para colocar as melhorias em prática, cobrar resultados rápidos e aumentar o lucro mês a mês.
              </p>
              <ul className={styles.serviceList}>
                <li>Reuniões quinzenais para analisar vendas, custos com anúncios e margem real que sobra no caixa</li>
                <li>Supervisão das campanhas de tráfego pago para você pagar menos por cada venda fechada</li>
                <li>Melhorias contínuas na loja e criação de atendimento ágil com fechamento pelo WhatsApp</li>
                <li>Criação de páginas e conteúdos que atraem compradores no Google sem custo por clique</li>
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
              <span className={`${styles.serviceDurationBadge} ${styles.monoFont}`}>Atuação Trimestral ou Semestral</span>
              <h3 className={`${styles.serviceTitle} ${styles.headingFont}`}>Liderança de E-commerce Fracionada</h3>
              <p className={styles.serviceOverview}>
                Um executivo experiente cuidando da estratégia do seu e-commerce diretamente com os donos, sem o alto custo fixo de um diretor em tempo integral.
              </p>
              <ul className={styles.serviceList}>
                <li>Planejamento de vendas na internet, metas da equipe e escolha dos melhores canais</li>
                <li>Apoio e liderança na escolha ou migração de plataformas (Shopify, Nuvemshop, VTEX)</li>
                <li>Seleção, contratação e alinhamento de fornecedores, agências parceiras e colaboradores</li>
                <li>Relatórios diretos e claros para sócios, conselho e investidores</li>
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
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>O Que Faço na Prática</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Os 4 Pilares de um E-commerce Lucrativo
            </h2>
            <p className={styles.sectionDesc}>
              A união entre técnica bem-feita, facilidade para o cliente comprar e cuidado rigoroso com o dinheiro da sua empresa.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Pilar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={`${styles.pillarNumber} ${styles.monoFont}`}>PILAR 01</span>
              </div>
              <h3 className={`${styles.pillarTitle} ${styles.headingFont}`}>
                Sua Loja no Topo do Google (SEO)
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Organizo as categorias e páginas de produto para você aparecer nas primeiras posições quando o cliente pesquisar no Google para comprar. O cliente clica, entra e compra sem você precisar pagar por clique.
                </p>
                <p>
                  Configuração técnica moderna para que seus produtos também sejam recomendados nas respostas dos novos assistentes de Inteligência Artificial (Google AI e ChatGPT).
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
                Facilitar a Compra e Vender Mais (CRO)
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Descubro exatamente por que as pessoas entram na sua loja e vão embora sem comprar: frete que assusta no final, fotos lentas, botões confusos no celular ou desconfiança no pagamento.
                </p>
                <p>
                  Simplifico o caminho até o pagamento e ajusto as páginas de produto para tirar as dúvidas antes da compra e aumentar o valor médio de cada pedido.
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
                  Tag Manager
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
                Estoque, Sistemas (ERP) e Logística sem Estresse
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Conecto a loja virtual ao sistema da sua empresa (Bling, Tiny e outros ERPs) para garantir que o estoque esteja sempre certo, as notas fiscais saiam rápido e os pedidos sejam despachados sem atraso.
                </p>
                <p>
                  Estruturo também canais de venda rápida pelo WhatsApp para produtos de valor mais alto e pedidos corporativos faturados no boleto.
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
                Anúncios Focados no que Sobra no Bolso
              </h3>
              <div className={styles.pillarBody}>
                <p>
                  Gerencio anúncios no Google Ads, Meta (Instagram e Facebook) e marketplaces com foco no lucro real. O objetivo não é mostrar relatórios bonitos com termos complicados, mas garantir que a operação coloque dinheiro de verdade no caixa.
                </p>
                <p>
                  Foco nos clientes que têm real intenção de compra, corto palavras caras que não trazem resultado e crio campanhas para quem já comprou voltar a comprar.
                </p>
              </div>
              <div className={styles.stackList}>
                <span className={styles.stackBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/googleads/4285F4" alt="Google Ads" />
                  Google Ads (Busca e Shopping)
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
              Operações reais onde atuei diretamente, com desafios superados e resultados comprovados no caixa.
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
                      Gestão responsável das verbas de Google Ads e Meta Ads, viabilizando expansão contínua de <strong>+66% ao mês em volume de vendas</strong> com margem e lucro protegidos.
                    </li>
                    <li>
                      Conteúdo educativo sobre cafés especiais e métodos de preparo que atrai clientes apaixonados pelo Google sem custo de anúncio por clique.
                    </li>
                    <li>
                      Integração de <strong>mais de 100 produtores e marcas parceiras</strong> em ecossistema Shopify Plus conectado ao sistema de gestão (ERP).
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
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>Janeiro 2024 a Outubro 2024 | Operação Internacional Remota</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Sheetgo</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Especialista Sênior em SEO & Conversão (Software Global B2B)</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Expansão do tráfego orgânico para empresa internacional de software que conecta planilhas e dados corporativos, em atuação conduzida 100% em inglês com clientes nos Estados Unidos e Europa.
                    </li>
                    <li>
                      Organização das páginas do site e criação de conteúdos focados em empresas que buscam soluções de produtividade no Google.
                    </li>
                    <li>
                      Aumento de <strong>+20% no tempo em que os usuários navegam no site</strong>, simplificando a navegação e facilitando novos cadastros.
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
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Gerente Geral de E-commerce & Operações</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      Gestão completa de toda a empresa (máquinas importadas de café, peças de reposição, expedição e tecnologia), consolidando a loja como líder nacional para pessoas físicas e empresas.
                    </li>
                    <li>
                      Loja virtual integrada ao sistema de gestão com <strong>crescimento médio de 20% ao ano durante 10 anos consecutivos</strong>.
                    </li>
                    <li>
                      Posicionamento forte no Google e melhorias no carrinho que geraram <strong>+50% de visitas</strong>, <strong>+30% nas compras</strong> e garantiram que <strong>45% das vendas da Black Friday viessem do Google sem pagar por anúncio</strong>.
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

            {/* Caso 4: Squammata Consultoria & Gestão (Cope Calçados e Lojas 360 EPI) */}
            <article className={styles.caseCard}>
              <div
                className={styles.caseMedia}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80")',
                }}
              />
              <div className={styles.caseContent}>
                <div className={`${styles.caseMeta} ${styles.monoFont}`}>2018 a Presente | Consultoria & Gestão de Projetos</div>
                <h3 className={`${styles.caseTitle} ${styles.headingFont}`}>Squammata Consultoria & Gestão (Cope Calçados & Lojas 360 EPI)</h3>
                <div className={`${styles.caseRole} ${styles.monoFont}`}>Trabalho executado através da Squammata, liderado por Arthur Saggioratto</div>
                <div className={styles.caseBody}>
                  <ul>
                    <li>
                      <strong>Cope Calçados:</strong> Consultoria realizada pela Squammata com foco no lucro real do varejo de moda e calçados. Reestruturação dos anúncios no Google e Meta para parar de queimar verba em palavras caras que não vendiam, criação de atendimento rápido com fechamento pelo WhatsApp e campanhas direcionadas para fazer os clientes antigos comprarem novamente.
                    </li>
                    <li>
                      <strong>Lojas 360 EPI:</strong> Consultoria da Squammata na estruturação comercial e digital para o setor de Equipamentos de Proteção Individual (B2B e B2C). Organização de catálogo técnico com certificados de aprovação (CA), estratégias inteligentes de frete para entrega em todo o Brasil, anúncios focados em empresas com urgência de compra e facilitação de pagamento faturado no boleto.
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
            <div className={`${styles.sectionBadge} ${styles.monoFont}`}>Bagagem e Formação</div>
            <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
              Formação Acadêmica & Produção de Conteúdo
            </h2>
            <p className={styles.sectionDesc}>
              A base em Ciências Sociais na UNICAMP unida à prática de mercado: compreender a fundo o comportamento do consumidor para criar lojas virtuais sólidas e duradouras.
            </p>
          </div>

          <div className={styles.intellectGrid}>
            <div className={styles.articleCard}>
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Mercado & Varejo</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Análises de Mercado e Cafeicultura Especial
              </h3>
              <p className={styles.articleDesc}>
                Artigos práticos que analisam hábitos de compra, métodos de preparo e agregação de valor para o mercado cafeeiro brasileiro, servindo de referência para compradores no Google.
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
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Origens & Produtos</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Muzambinho e o Sudoeste de Minas
              </h3>
              <p className={styles.articleDesc}>
                Estudo detalhado das regiões produtoras de café especial, valorizando a história dos produtores e melhorando as descrições dos produtos para aumentar as vendas.
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
              <div className={`${styles.articleBadge} ${styles.monoFont}`}>Qualidade & Marca</div>
              <h3 className={`${styles.articleTitle} ${styles.headingFont}`}>
                Indicações Geográficas no Estado de São Paulo
              </h3>
              <p className={styles.articleDesc}>
                Mapeamento das regiões cafeeiras paulistas com certificados de qualidade, ensinando o cliente a reconhecer produtos superiores e aumentando o valor médio das compras.
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
              <img
                src={avatarSrc}
                alt="Arthur Saggioratto"
                width={72}
                height={72}
                className={styles.footerAvatar}
                onError={handleImageFallback}
                loading="lazy"
              />
            </div>

            <h2 className={`${styles.footerTitle} ${styles.headingFont}`}>
              Pronto para Destravar as Vendas e o Lucro da sua Loja?
            </h2>
            <p className={styles.footerSubtitle}>
              Disponível para diagnósticos práticos, consultoria mensal contínua e liderança de e-commerce fracionada para operações em todo o Brasil.
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
