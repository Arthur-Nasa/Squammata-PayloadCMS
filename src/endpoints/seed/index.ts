import type { Payload, PayloadRequest } from 'payload'

function createLexical(paragraphs: string[]) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: paragraphs.map((text) => ({
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text,
            version: 1,
          },
        ],
      })),
    },
  }
}

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Iniciando carga de dados da Squammata...')

  // 0. Usuário Administrador Canônico
  payload.logger.info('Garantindo usuário administrador da Squammata...')
  try {
    const existingAdmin = await payload.find({
      collection: 'users',
      where: { email: { equals: 'contato@squammata.com.br' } },
      limit: 1,
      req,
    })

    if (existingAdmin.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          name: 'Arthur Saggioratto',
          email: 'contato@squammata.com.br',
          password: 'squammata-admin-2026',
        },
        req,
      })
      payload.logger.info('Usuário contato@squammata.com.br criado com sucesso.')
    }
  } catch (e) {
    payload.logger.warn(`Aviso ao criar usuário administrador: ${e}`)
  }

  // 0.1 Limpeza de Dados Legados do Tema Demo
  payload.logger.info('Limpando coleções legadas do tema demo...')
  const collectionsToReset = ['posts', 'projects', 'services', 'team', 'categories'] as const
  for (const collection of collectionsToReset) {
    try {
      const allDocs = await payload.find({
        collection,
        limit: 100,
        req,
      })
      for (const doc of allDocs.docs) {
        await payload.delete({
          collection,
          id: doc.id,
          req,
        })
      }
      payload.logger.info(`Coleção ${collection} limpa com sucesso.`)
    } catch (e) {
      payload.logger.warn(`Aviso ao limpar ${collection}: ${e}`)
    }
  }

  // 1. Categorias Oficiais
  payload.logger.info('Semeando categorias...')
  const categoriesData = [
    { title: 'Controladoria & DRE', slug: 'controladoria-dre' },
    { title: 'Engenharia de Software & Headless', slug: 'engenharia-headless' },
    { title: 'SEO & Entidades Semânticas', slug: 'seo-semantico' },
    { title: 'Logística e Distribuição na RMC', slug: 'logistica-rmc' },
  ]

  const seededCategories: Record<string, any> = {}
  for (const cat of categoriesData) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: cat.slug } },
      limit: 1,
      req,
    })

    if (existing.docs.length > 0) {
      seededCategories[cat.slug] = existing.docs[0]
    } else {
      const created = await payload.create({
        collection: 'categories',
        data: {
          title: cat.title,
          slug: cat.slug,
        },
        req,
      })
      seededCategories[cat.slug] = created
    }
  }

  // 2. Equipe Técnica Nominal
  payload.logger.info('Semeando equipe técnica...')
  const teamData = [
    {
      title: 'Arthur Saggioratto',
      slug: 'arthur-saggioratto',
      short: 'Fundador & Consultor de Estratégia',
      order: 1,
      layout: [
        {
          blockType: 'about_team',
          name: 'Arthur Saggioratto',
          position: 'Fundador & Consultor de Estratégia',
          contact_items: [
            { label: 'E-mail', value: 'contato@squammata.com.br' },
            { label: 'Telefone', value: '+55 19 99349-7819' },
            { label: 'Sede', value: 'Campinas, SP (Cambuí)' },
          ],
          social_links: [
            { icon_class: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
          ],
          intro_description: createLexical([
            'Consultor responsável por auditorias financeiras e reestruturação operacional de pequenas e médias empresas.',
          ]),
          quote: 'O fogo-apagou só canta protegido na folhagem. Nossa marca aparece através do resultado de cada cliente no DRE.',
          bio_description: createLexical([
            'Lidera auditorias de processos, modelagem de DRE, arquitetura de tracking server-side e governança de dados.',
            'Atua diretamente em operações com faturamento representativo na Região Metropolitana de Campinas.',
          ]),
          skills: [
            { name: 'Modelagem de DRE & Margem', percentage: '98%' },
            { name: 'Tracking Server-Side (GA4/GTM)', percentage: '95%' },
            { name: 'Governança & Auditoria Fogo-Apagou', percentage: '96%' },
          ],
          timeline: [
            {
              date: '2020 até o presente',
              title: 'Squammata Consultoria',
              description: 'Liderança técnica e consultoria de estratégia em e-commerce e B2B.',
            },
          ],
        },
      ],
    },
    {
      title: 'Carolina',
      slug: 'carolina',
      short: 'Redação Técnica & Voz Institucional',
      order: 2,
      layout: [
        {
          blockType: 'about_team',
          name: 'Carolina',
          position: 'Redação Técnica & Voz Institucional',
          contact_items: [
            { label: 'E-mail', value: 'contato@squammata.com.br' },
          ],
          intro_description: createLexical([
            'Responsável pela arquitetura semântica e redação técnica de autoridade para ambientes corporativos.',
          ]),
          bio_description: createLexical([
            'Conduz a formulação de conteúdo analítico e alinhamento de comunicação institucional sem jargões de marketing.',
          ]),
          skills: [
            { name: 'Redação Técnica Analítica', percentage: '95%' },
            { name: 'Autoridade Semântica', percentage: '92%' },
          ],
        },
      ],
    },
    {
      title: 'Fabricio',
      slug: 'fabricio',
      short: 'Mídia de Performance & Gestão de Contas',
      order: 3,
      layout: [
        {
          blockType: 'about_team',
          name: 'Fabricio',
          position: 'Mídia de Performance & Gestão de Contas',
          contact_items: [
            { label: 'E-mail', value: 'contato@squammata.com.br' },
          ],
          intro_description: createLexical([
            'Especialista em tráfego pago focado em Google Ads e Meta Ads com métricas de margem de contribuição.',
          ]),
          bio_description: createLexical([
            'Gerencia campanhas com foco em ROAS real e custo de aquisição auditado em conjunto com a controladoria.',
          ]),
          skills: [
            { name: 'Google Ads & Performance', percentage: '96%' },
            { name: 'Meta Ads', percentage: '94%' },
            { name: 'Otimização de ROAS Real', percentage: '95%' },
          ],
        },
      ],
    },
    {
      title: 'Matheus',
      slug: 'matheus',
      short: 'Engenharia de Software & Infraestrutura',
      order: 4,
      layout: [
        {
          blockType: 'about_team',
          name: 'Matheus',
          position: 'Engenharia de Software & Infraestrutura',
          contact_items: [
            { label: 'E-mail', value: 'contato@squammata.com.br' },
          ],
          intro_description: createLexical([
            'Engenheiro responsável pelo ecossistema headless, integrações de APIs e estabilidade de servidores.',
          ]),
          bio_description: createLexical([
            'Desenvolve arquiteturas desacopladas em Next.js e Payload CMS com foco em Core Web Vitals e integridade de banco PostgreSQL.',
          ]),
          skills: [
            { name: 'Next.js & React Server Components', percentage: '97%' },
            { name: 'Payload CMS & Headless', percentage: '95%' },
            { name: 'PostgreSQL & Infraestrutura', percentage: '93%' },
          ],
        },
      ],
    },
    {
      title: 'John',
      slug: 'john',
      short: 'Direção Audiovisual & Produção de Ativos',
      order: 5,
      layout: [
        {
          blockType: 'about_team',
          name: 'John',
          position: 'Direção Audiovisual & Produção de Ativos',
          contact_items: [
            { label: 'E-mail', value: 'contato@squammata.com.br' },
          ],
          intro_description: createLexical([
            'Especialista na captação presencial e produção de vídeo para ativos institucionais e criativos de performance.',
          ]),
          bio_description: createLexical([
            'Coordena a captação audiovisual técnica em operações de clientes no interior paulista.',
          ]),
          skills: [
            { name: 'Direção Audiovisual', percentage: '94%' },
            { name: 'Produção de Ativos para Tráfego', percentage: '92%' },
          ],
        },
      ],
    },
  ]

  for (const member of teamData) {
    const existing = await payload.find({
      collection: 'team',
      where: { slug: { equals: member.slug } },
      limit: 1,
      req,
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'team',
        data: { ...(member as any), _status: 'published' },
        req,
      })
    }
  }

  // 3. Catálogo Oficial de Serviços (Tabela V6)
  payload.logger.info('Semeando serviços canônicos...')
  const servicesData = [
    {
      title: 'Auditoria Fogo-Apagou',
      slug: 'auditoria-fogo-apagou',
      short: 'Diagnóstico operacional completo, auditoria financeira de DRE e conferência das esteiras de dados.',
      order: 1,
      list: [
        { item: 'Diagnóstico operacional 360 graus' },
        { item: 'Auditoria financeira do DRE e margem de contribuição' },
        { item: 'Conferência de esteiras de dados GA4 e GTM' },
        { item: 'Investimento fixo: R$ 2.500,00 (350 €)' },
      ],
      layout: [
        {
          blockType: 'about_service',
          badge: 'Diagnóstico & Governança',
          title: 'Auditoria Operacional Fogo-Apagou',
          intro_title: 'Saneamento Imediato de Gargalos',
          intro_description: createLexical([
            'Avaliação técnica aprofundada da operação comercial para estancar perdas de margem e falhas em integrações.',
          ]),
          approach_title: 'Metodologia de Auditoria',
          approach_description: createLexical([
            'Revisamos custos diretos, taxas de gateways, fretes e conferimos o rastreamento ponta a ponta dos canais de venda.',
          ]),
        },
      ],
    },
    {
      title: 'Setup de Engenharia e Rastreamento',
      slug: 'setup-engenharia-tracking',
      short: 'Tracking server-side, GA4, GTM, pixels de conversão e saneamento de catálogo XML.',
      order: 2,
      list: [
        { item: 'Configuração de tracking server-side' },
        { item: 'Parametrização de GA4 e Google Tag Manager' },
        { item: 'Pixels de conversão com deduplicação' },
        { item: 'Investimento fixo: R$ 2.000,00 (450 €)' },
      ],
      layout: [
        {
          blockType: 'about_service',
          badge: 'Engenharia de Dados',
          title: 'Setup de Engenharia e Rastreamento',
          intro_title: 'Dados Precisos para Tomada de Decisão',
          intro_description: createLexical([
            'Implementação de esteiras de coleta direta no servidor para eliminar discrepâncias entre o ERP e as plataformas de mídia.',
          ]),
        },
      ],
    },
    {
      title: 'Performance Integrada',
      slug: 'performance-integrada',
      short: 'Gestão técnica unificada de mídia de performance com acompanhamento de margem líquida e ROAS real.',
      order: 3,
      list: [
        { item: 'Gestão técnica unificada de Google Ads e Meta Ads' },
        { item: 'Acompanhamento de margem líquida e ROAS real' },
        { item: 'Alinhamento direto com a controladoria' },
        { item: 'Mensalidade: R$ 4.500,00/mês (750 €)' },
      ],
      layout: [
        {
          blockType: 'about_service',
          badge: 'Mídia & Performance',
          title: 'Performance Integrada de Alto Rendimento',
          intro_title: 'Mídia Orientada à Margem de Contribuição',
          intro_description: createLexical([
            'Gestão de tráfego que prioriza a rentabilidade do DRE em vez de métricas de vaidade como visualizações e cliques.',
          ]),
        },
      ],
    },
    {
      title: 'Autoridade Semântica',
      slug: 'autoridade-semantica',
      short: 'SEO técnico, arquitetura de entidades e redação de artigos analíticos para mecanismos de busca e IA.',
      order: 4,
      list: [
        { item: 'SEO técnico e entidades Schema.org' },
        { item: 'Redação técnica aprofundada' },
        { item: 'Indexação semântica para motores de busca' },
        { item: 'Mensalidade: R$ 3.000,00/mês (500 €)' },
      ],
      layout: [
        {
          blockType: 'about_service',
          badge: 'SEO & Conteúdo Técnico',
          title: 'Autoridade Semântica e Estruturação de Entidades',
          intro_title: 'Construção de Relevância Orgânica Firme',
          intro_description: createLexical([
            'Desenvolvimento de relevância técnica permanente para posicionar a marca como referência no setor.',
          ]),
        },
      ],
    },
    {
      title: 'Zeladoria de Infraestrutura',
      slug: 'zeladoria-infra',
      short: 'Suporte a servidores, monitoramento de banco PostgreSQL, Core Web Vitals e manutenção em Next.js.',
      order: 5,
      list: [
        { item: 'Monitoramento contínuo de PostgreSQL' },
        { item: 'Otimização de Core Web Vitals' },
        { item: 'Manutenção evolutiva Next.js e Payload CMS' },
        { item: 'Mensalidade: R$ 4.500,00/mês (500 €)' },
      ],
      layout: [
        {
          blockType: 'about_service',
          badge: 'Infraestrutura & DevOps',
          title: 'Zeladoria de Infraestrutura e Código',
          intro_title: 'Disponibilidade e Velocidade Máxima',
          intro_description: createLexical([
            'Garantia de estabilidade técnica para que a operação funcione de forma ininterrupta.',
          ]),
        },
      ],
    },
  ]

  for (const s of servicesData) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: s.slug } },
      limit: 1,
      req,
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'services',
        data: { ...(s as any), _status: 'published' },
        req,
      })
    }
  }

  // 4. Estudos de Caso Fundamentados no DRE (Projects)
  payload.logger.info('Semeando estudos de caso (projetos)...')
  const projectsData = [
    {
      title: 'Distribuidora em Paulínia: Migração B2B para TOTVS',
      slug: 'distribuidora-paulinia-totvs-b2b',
      short_description: 'Reestruturação de catálogo digital e integração com ERP TOTVS, reduzindo o ciclo de pedidos de 48h para 2h15 e elevando a margem de contribuição operacional em 18,4%.',
      price: '+18.4% Margem',
      order: 1,
      layout: [
        {
          blockType: 'about_project',
          badge: 'B2B & ERP',
          title: 'Distribuidora em Paulínia: Integração TOTVS e Otimização de Ciclo',
          info_items: [
            { label: 'Setor', value: 'Distribuição Industrial B2B' },
            { label: 'Polo Regional', value: 'Paulínia, RMC' },
            { label: 'ERP', value: 'TOTVS Protheus' },
            { label: 'Impacto Principal', value: '+18.4% na Margem Operacional' },
          ],
          intro_title: 'Diagnóstico Inicial e Gargalos Operacionais',
          intro_description: createLexical([
            'A empresa enfrentava um ciclo de pedidos de 48 horas devido a lançamentos manuais no ERP, com alto índice de divergência fiscal e ruptura de estoque.',
          ]),
          approach_title: 'Intervenção Técnica Aplicada',
          approach_description: createLexical([
            'Desenvolvemos esteira automatizada de pedidos via API direta com o TOTVS, saneando tabelas de preço e integrando consulta de crédito em tempo real.',
          ]),
          delivered_title: 'Entregáveis Concluídos',
          delivered_items: [
            { title: 'Conector de API com TOTVS', description: 'Sincronização bidirecional de estoque, pedidos e notas fiscais.' },
            { title: 'Painel B2B para Representantes', description: 'Interface rápida para colocação de pedidos com regras comerciais nativas.' },
          ],
          goals_title: 'Metas Estabelecidas',
          goals_items: [
            { title: 'Redução do tempo de processamento', description: 'Meta de baixar o ciclo para menos de 4 horas.' },
            { title: 'Eliminação de erros de digitação', description: 'Zerar divergências entre pedido e emissão fiscal.' },
          ],
          results_title: 'Resultados Apurados no DRE',
          results_items: [
            { title: 'Ciclo de Pedidos', description: 'Reduzido de 48 horas para 2 horas e 15 minutos.' },
            { title: 'Margem de Contribuição', description: 'Expansão de 18,4% no fechamento contábil.' },
            { title: 'Ruptura de Pedidos', description: 'Queda de 92% em divergências de separação.' },
          ],
          conclusion_title: 'Consolidação Técnica',
          conclusion_description: createLexical([
            'A operação alcançou estabilidade completa, absorvendo um crescimento de volume sem necessidade de contratações adicionais no time de faturamento.',
          ]),
        },
      ],
    },
    {
      title: 'Confecção em Campinas: Revisão de Catálogo e Redução de CAC',
      slug: 'confeccao-campinas-devolucoes-cac',
      short_description: 'Saneamento de dados técnicos de vestuário e tabela de medidas dinâmica, resultando em retração de 41% no volume de devoluções e queda de 32,6% no Custo de Aquisição de Clientes.',
      price: '-41% Devoluções',
      order: 2,
      layout: [
        {
          blockType: 'about_project',
          badge: 'Varejo & Moda',
          title: 'Confecção em Campinas: Saneamento Técnico e Gestão de Margem',
          info_items: [
            { label: 'Setor', value: 'Confecção e Vestuário' },
            { label: 'Polo Regional', value: 'Campinas, RMC' },
            { label: 'Canais', value: 'E-commerce Direto e Varejo' },
            { label: 'Impacto Principal', value: '-41% em Devoluções Logísticas' },
          ],
          intro_title: 'Diagnóstico Inicial de Devoluções',
          intro_description: createLexical([
            'A marca sofria com taxa de devolução acima de 24% por erros de modelagem e especificações imprecisas, onerando o custo com logística reversa.',
          ]),
          approach_title: 'Intervenção Técnica de Modelagem',
          approach_description: createLexical([
            'Auditamos toda a árvore de medidas do catálogo, implementamos provador virtual com base em dados antropométricos e revisamos a segmentação de tráfego pago.',
          ]),
          delivered_title: 'Entregáveis Concluídos',
          delivered_items: [
            { title: 'Padronização Técnica do Catálogo', description: 'Tabela de medidas milimétricas e especificações têxteis precisas.' },
            { title: 'Reestruturação de Tráfego', description: 'Campanhas orientadas ao LTV e à recompra qualificada.' },
          ],
          goals_title: 'Metas Estabelecidas',
          goals_items: [
            { title: 'Corte de Custos Logísticos', description: 'Diminuir despesas de frete reverso no DRE.' },
            { title: 'Eficiência de Aquisição', description: 'Reduzir o CAC em pelo menos 25%.' },
          ],
          results_title: 'Resultados Apurados no DRE',
          results_items: [
            { title: 'Volume de Devoluções', description: 'Queda de 41% em 90 dias de operação.' },
            { title: 'CAC Médio', description: 'Retração de 32,6% no custo por cliente adquirido.' },
            { title: 'Margem Bruta Efetiva', description: 'Aumento de 8,7 pontos percentuais.' },
          ],
          conclusion_title: 'Consolidação Técnica',
          conclusion_description: createLexical([
            'A empresa reverteu o prejuízo em logística reversa, restabelecendo a saúde de caixa da operação digital.',
          ]),
        },
      ],
    },
    {
      title: 'Manufatura de Alimentos em Indaiatuba: Canal Direto ao Consumidor',
      slug: 'manufatura-alimentos-indaiatuba-d2c',
      short_description: 'Implementação de operação D2C com malha logística própria para entrega em 24h na RMC, gerando 38% de receita recorrente por planos de assinatura.',
      price: '38% Assinaturas',
      order: 3,
      layout: [
        {
          blockType: 'about_project',
          badge: 'Alimentos & D2C',
          title: 'Manufatura de Alimentos em Indaiatuba: Canal D2C com Entrega em 24h',
          info_items: [
            { label: 'Setor', value: 'Indústria Alimentícia' },
            { label: 'Polo Regional', value: 'Indaiatuba, RMC' },
            { label: 'Modelo', value: 'Canal Direto ao Consumidor (D2C)' },
            { label: 'Impacto Principal', value: '38% de Receita em Assinatura Recorrente' },
          ],
          intro_title: 'Dependência de Intermediários e Margem Baixa',
          intro_description: createLexical([
            'A indústria dependia exclusivamente de grandes redes varejistas com prazos de pagamento estendidos de até 90 dias e margens comprimidas.',
          ]),
          approach_title: 'Criação do Canal Próprio',
          approach_description: createLexical([
            'Estruturamos canal digital de venda direta focado em condomínios residenciais e empresas da RMC, aproveitando rotas logísticas já existentes.',
          ]),
          delivered_title: 'Entregáveis Concluídos',
          delivered_items: [
            { title: 'Plataforma Headless de Assinaturas', description: 'Sistema de checkout recorrente com emissão automática de faturamento.' },
            { title: 'Roteirizador de Entrega Local', description: 'Planejamento de rotas para entrega no prazo máximo de 24 horas.' },
          ],
          goals_title: 'Metas Estabelecidas',
          goals_items: [
            { title: 'Desintermediação', description: 'Capturar margem bruta integral sem repasse a intermediários.' },
            { title: 'Previsibilidade Financeira', description: 'Construir base de receita recorrente mensal.' },
          ],
          results_title: 'Resultados Apurados no DRE',
          results_items: [
            { title: 'Receita Recorrente', description: '38% do faturamento total do canal em 6 meses.' },
            { title: 'Prazo Médio de Recebimento', description: 'Reduzido de 75 dias para recebimento à vista no D2C.' },
            { title: 'Margem de Contribuição', description: '34,2% superior à média do canal atacadista.' },
          ],
          conclusion_title: 'Consolidação Técnica',
          conclusion_description: createLexical([
            'A manufatura conquistou soberania comercial, reduzindo a vulnerabilidade perante exigências de grandes varejistas.',
          ]),
        },
      ],
    },
  ]

  for (const project of projectsData) {
    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: project.slug } },
      limit: 1,
      req,
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'projects',
        data: { ...(project as any), _status: 'published' },
        req,
      })
    }
  }

  // 5. Artigos Técnicos e Motor Editorial (Posts)
  payload.logger.info('Semeando artigos técnicos...')
  const postsData = [
    {
      title: 'Cálculo de Margem Real no DRE de Pequenas e Médias Operações',
      slug: 'calculo-margem-real-ecommerce',
      categories: seededCategories['controladoria-dre'] ? [seededCategories['controladoria-dre'].id] : [],
      publishedAt: new Date(),
      content: createLexical([
        'Muitas empresas encerram o mês com faturamento expressivo e caixa negativo. A causa quase sempre reside na confusão entre margem bruta teórica e margem de contribuição líquida.',
        'Ao estruturar a Demonstração do Resultado do Exercício (DRE), é obrigatório descontar individualmente taxas de gateway de pagamento, antecipação de recebíveis, fretes subsidiados, devoluções e custos de embalagem.',
        'Somente quando cada canal de venda tem sua margem de contribuição apurada linha a linha torna-se possível decidir quais produtos acelerar e quais descontinuar.',
      ]),
      meta: {
        title: 'Cálculo de Margem Real no DRE de Operações Comerciais',
        description: 'Metodologia analítica para apurar a margem de contribuição efetiva e eliminar custos ocultos no DRE.',
      },
    },
    {
      title: 'Arquitetura Headless com Next.js 15 e Payload CMS para Alta Performance',
      slug: 'arquitetura-headless-nextjs15-payload',
      categories: seededCategories['engenharia-headless'] ? [seededCategories['engenharia-headless'].id] : [],
      publishedAt: new Date(),
      content: createLexical([
        'A lentidão de plataformas de e-commerce tradicionais impacta diretamente a taxa de conversão e a pontuação nos Core Web Vitals do Google.',
        'A separação entre a camada de apresentação em Next.js 15 App Router e o gerenciamento de conteúdo no Payload CMS garante tempos de resposta inferiores a 100 milissegundos.',
        'Além do ganho em velocidade, essa arquitetura oferece controle absoluto sobre a governança de dados e elimina a dependência de plugins de terceiros.',
      ]),
      meta: {
        title: 'Arquitetura Headless com Next.js 15 e Payload CMS',
        description: 'Vantagens técnicas da arquitetura desacoplada para operações digitais que exigem carregamento veloz e estabilidade.',
      },
    },
    {
      title: 'Logística e Distribuição Avançada na Malha Industrial da RMC',
      slug: 'logistica-distribuicao-rmc-24h',
      categories: seededCategories['logistica-rmc'] ? [seededCategories['logistica-rmc'].id] : [],
      publishedAt: new Date(),
      content: createLexical([
        'A Região Metropolitana de Campinas possui uma das infraestruturas rodoviárias mais eficientes do país, conectando rodovias como Anhanguera, Bandeirantes e Dom Pedro I.',
        'Empresas que estruturam frotas locais e centros de distribuição compactos conseguem realizar entregas no mesmo dia ou em até 24 horas a um custo inferior ao frete interestadual.',
        'Essa vantagem geográfica transforma-se em diferencial competitivo decisivo para fidelização e recompra contínua.',
      ]),
      meta: {
        title: 'Logística Avançada na Malha Industrial da RMC',
        description: 'Estratégias de distribuição rápida e eficiência operacional no interior do estado de São Paulo.',
      },
    },
  ]

  for (const post of postsData) {
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: post.slug } },
      limit: 1,
      req,
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'posts',
        data: { ...(post as any), _status: 'published' },
        req,
      })
    }
  }

  // 6. Configuração dos Globals
  payload.logger.info('Configurando globals institucionais...')

  // Header
  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [
        { link: { type: 'custom', url: '/services', label: 'Serviços' } },
        { link: { type: 'custom', url: '/projects', label: 'Estudos de Caso' } },
        { link: { type: 'custom', url: '/team', label: 'Metodologia' } },
        { link: { type: 'custom', url: '/posts', label: 'Publicações Técnicas' } },
        { link: { type: 'custom', url: '#popup', label: 'Contato' } },
      ],
      contact: {
        actionType: 'popup',
        label: 'Solicitar Diagnóstico',
        fontawesome_icon: 'fal fa-envelope',
        popupTitle: 'Atendimento & Diagnóstico',
        popupItems: [
          { label: 'Endereço', value: 'Rua Coronel Quirino, 1200, Cambuí, Campinas, SP' },
          { label: 'E-mail', value: 'contato@squammata.com.br' },
          { label: 'Telefone', value: '+55 19 99349-7819' },
        ],
      },
    },
    req,
  })

  // Footer
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      copyright: '© 2026 Squammata Consultoria e Gestão de Projetos Ltda. Todos os direitos reservados. CNPJ sob consulta.',
      createdBy: 'Squammata Engenharia',
      newsletter: {
        placeholder: 'seu.email@empresa.com.br',
      },
      locations: [
        { title: 'Campinas (Cambuí)', address: 'Rua Coronel Quirino, 1200, CEP 13025-002', phone: '+55 19 99349-7819' },
        { title: 'Região Metropolitana de Campinas', address: 'Atendimento presencial industrial e corporativo', phone: '+55 19 99349-7819' },
      ],
      mainMenu: [
        { label: 'Soluções Técnicas', link: '/services' },
        { label: 'Estudos de Caso', link: '/projects' },
        { label: 'Equipe Especialista', link: '/team' },
        { label: 'Artigos Analíticos', link: '/posts' },
      ],
      policyLinks: [
        { label: 'Política de Privacidade', link: '/privacidade' },
        { label: 'Termos de Governança', link: '/termos' },
      ],
    },
    req,
  })

  // Site Settings
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      brandName: 'Squammata Consultoria',
      tagline: 'Gestão de Projetos e Engenharia de E-commerce',
      corporateEmail: 'contato@squammata.com.br',
      corporateDocument: 'CNPJ sob consulta',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    req,
  })

  // Local SEO
  await payload.updateGlobal({
    slug: 'local-seo',
    data: {
      businessName: 'Squammata Consultoria e Gestão de Projetos Ltda.',
      schemaType: 'ProfessionalService',
      streetAddress: 'Rua Coronel Quirino, 1200',
      neighborhood: 'Cambuí',
      city: 'Campinas',
      state: 'SP',
      postalCode: '13025-002',
      coordinates: {
        latitude: -22.8988,
        longitude: -47.0514,
      },
      contactPhone: '+55 19 99349-7819',
      whatsappPhone: '+55 19 99349-7819',
      serviceAreas: [
        { city: 'Campinas' },
        { city: 'Paulínia' },
        { city: 'Americana' },
        { city: 'Indaiatuba' },
        { city: 'Valinhos' },
        { city: 'Vinhedo' },
        { city: 'Sumaré' },
        { city: 'Hortolândia' },
      ],
    },
    req,
  })

  // Services Page Global
  await payload.updateGlobal({
    slug: 'services_page',
    data: {
      badge: 'Catálogo de Soluções V6',
      title: 'Engenharia de Operações & <br><span class="mil-opacity-text">Gestão Técnica</span>',
      description: 'Intervenções pragmáticas com foco em margem de contribuição, redução de CAC e infraestrutura headless para médias empresas.',
      meta: {
        title: 'Soluções Técnicas & Catálogo de Serviços | Squammata',
        description: 'Intervenções cirúrgicas de auditoria e esteiras contínuas de gestão para médias empresas na RMC.',
      },
    },
    req,
  })

  // Projects Page Global
  await payload.updateGlobal({
    slug: 'projects_page',
    data: {
      badge: 'Estudos de Caso & DRE',
      title: 'Operações Auditadas e <br><span class="mil-opacity-text">Resultados no DRE</span>',
      description: 'Análise aprofundada de gargalos operacionais solucionados na Região Metropolitana de Campinas com mensuração direta de margem de contribuição e eficiência técnica.',
      meta: {
        title: 'Estudos de Caso & Resultados no DRE | Squammata',
        description: 'Operações auditadas e reestruturadas no interior paulista com ganhos comprovados de margem no DRE.',
      },
    },
    req,
  })

  // Blog Page Global
  await payload.updateGlobal({
    slug: 'blog',
    data: {
      badge: 'Artigos & Engenharia',
      title: 'Publicações Técnicas & <br><span class="mil-opacity-text">Análise Operacional</span>',
      description: 'Artigos analíticos sobre estruturação de DRE, arquitetura headless, autoridade semântica e logística avançada no interior paulista.',
      meta: {
        title: 'Publicações Técnicas & Análise Operacional | Squammata',
        description: 'Artigos analíticos sobre DRE, engenharia headless, SEO semântico e logística na RMC.',
      },
    },
    req,
  })

  // Team Page Global
  await payload.updateGlobal({
    slug: 'team_page',
    data: {
      badge: 'Equipe Técnica',
      title: 'Especialistas em <br><span class="mil-opacity-text">Engenharia & Operações</span>',
      description: 'Profissionais dedicados à governança de dados, desenvolvimento headless, controladoria de DRE e gestão técnica de mídia.',
      meta: {
        title: 'Corpo Técnico & Metodologia | Squammata',
        description: 'Conheça os especialistas da Squammata em controladoria, tráfego, infraestrutura e governança.',
      },
    },
    req,
  })

  // General Global (404)
  await payload.updateGlobal({
    slug: 'general',
    data: {
      not_found: {
        subtitle: 'Erro 404',
        title: 'Recurso Não Encontrado',
        description: 'O recurso solicitado não está indexado ou foi movido. Utilize a navegação principal para acessar as soluções e estudos de caso.',
      },
    },
    req,
  })

  payload.logger.info('Carga de dados da Squammata concluída com sucesso!')
}
