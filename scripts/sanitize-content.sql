BEGIN;

-- 1. Sanitize pages Home
UPDATE pages 
SET 
  title = 'Squammata',
  meta_title = 'Squammata | Consultoria em Gestão de Projetos e Engenharia de E-commerce',
  meta_description = 'Consultoria em gestão de operações, DRE e engenharia de e-commerce na Região Metropolitana de Campinas. Metodologia Fogo-Apagou sem ilusão.'
WHERE slug = 'home';

-- 1.1 Remove Prices block from Home page layout
DELETE FROM pages_blocks_reusable_block 
WHERE _parent_id = 1 AND reusable_content_id = 15;

-- 1.2 Re-index order on Home page
WITH ordered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY _order) as new_order
  FROM pages_blocks_reusable_block
  WHERE _parent_id = 1
)
UPDATE pages_blocks_reusable_block p
SET _order = o.new_order
FROM ordered o
WHERE p.id = o.id;

-- 2. Clean up services_page layout_after
DELETE FROM services_page_blocks_reusable_block
WHERE _parent_id = 1 AND reusable_content_id IN (34, 39);

-- 3. Update Globals Meta Titles & Descriptions
UPDATE services_page
SET 
  meta_title = 'Soluções Técnicas & Catálogo de Serviços | Squammata',
  meta_description = 'Intervenções cirúrgicas de auditoria e esteiras contínuas de gestão para médias empresas na RMC.'
WHERE id = 1;

UPDATE projects_page
SET 
  meta_title = 'Estudos de Caso & Resultados no DRE | Squammata',
  meta_description = 'Operações auditadas e reestruturadas no interior paulista com ganhos comprovados de margem no DRE.'
WHERE id = 1;

UPDATE blog
SET 
  meta_title = 'Publicações Técnicas & Análise Operacional | Squammata',
  meta_description = 'Artigos analíticos sobre DRE, engenharia headless, SEO semântico e logística na RMC.'
WHERE id = 1;

UPDATE team_page
SET 
  meta_title = 'Corpo Técnico & Metodologia | Squammata',
  meta_description = 'Conheça os especialistas da Squammata em controladoria, tráfego, infraestrutura e governança.'
WHERE id = 1;

-- 4. Reusable Content: Intros
UPDATE reusable_content_blocks_intro
SET short_title = 'Publicações', title = 'Publicações Técnicas & <br class="mil-sm-hidden">Análise Operacional'
WHERE _parent_id = 1;

UPDATE reusable_content_blocks_intro
SET short_title = 'Serviços', title = 'Soluções Técnicas V6 & <br class="mil-sm-hidden"><span class="mil-opacity-text">Gestão Operacional</span>'
WHERE _parent_id = 2;

UPDATE reusable_content_blocks_intro
SET short_title = 'Estudos de Caso', title = 'Operações Auditadas e <br class="mil-sm-hidden"><span class="mil-opacity-text">Resultados no DRE</span>'
WHERE _parent_id = 3;

UPDATE reusable_content_blocks_intro
SET short_title = 'Equipe', title = 'Especialistas em <br class="mil-sm-hidden"><span class="mil-opacity-text">Engenharia & Operações</span>'
WHERE _parent_id = 40;

-- 5. Reusable Content: Hero One
UPDATE reusable_content_blocks_hero_one
SET 
  subtitle = 'Consultoria em Gestão de Projetos e Engenharia de E-commerce',
  title_line1 = 'Estrutura Operacional Firme.',
  title_line2 = 'Margem Real no DRE.',
  title_line3 = 'Tecnologia Sem Ilusão.',
  description = 'Ajudamos pequenas e médias empresas do interior paulista a estruturar operações lucrativas, eliminando gargalos em sistemas, estoque e controladoria.',
  button1_text = 'Conhecer Soluções',
  button1_url = '/services',
  button2_text = 'Ver Estudos de Caso',
  button2_url = '/projects',
  counter1_upper = 'R$ 54M+',
  counter1_lower = 'Volume Transacionado Auditado',
  counter1_value = '54',
  counter2_upper = '+26.4%',
  counter2_lower = 'Ganho Médio em Margem Operacional',
  counter2_value = '26'
WHERE _parent_id = 13;

-- 6. Reusable Content: About Us (Manifesto)
UPDATE reusable_content_blocks_about_us
SET 
  badge = 'MANIFESTO SQUAMMATA',
  title = 'Origem na Roça Paulista. <br><span class="mil-c-m-2">Eficiência Sem Ilusão.</span>',
  description = 'A ave Columbina squammata, conhecida no interior como fogo-apagou, guia nossa conduta. Apagamos incêndios operacionais e fiscais de pequenas e médias empresas com método e discrição. Rejeitamos promessas fáceis de enriquecimento rápido para focar na margem real do DRE.',
  founder_name = 'Arthur Saggioratto',
  founder_role = 'Fundador & Consultor de Estratégia',
  founder_quote = 'O fogo-apagou só canta protegido na folhagem. Não buscamos holofotes nem vaidade em redes sociais; nossa marca só aparece através do resultado financeiro de nossos clientes.'
WHERE _parent_id = 4;

-- 7. Reusable Content: Features Header
UPDATE reusable_content_blocks_features
SET 
  badge = 'DIFERENCIAIS OPERACIONAIS',
  title = 'Engenharia Aplicada à <br><span class="mil-c-m-2">Margem do Negócio</span>'
WHERE _parent_id = 14;

-- 7.1 Reusable Content: Features Items
UPDATE reusable_content_blocks_features_features
SET title = 'Auditoria de DRE', description = 'Identificamos custos ocultos em taxas de cartão, fretes subsidiados e logística reversa.'
WHERE _order = 1 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

UPDATE reusable_content_blocks_features_features
SET title = 'Tracking Server-Side', description = 'Dados confiáveis via GA4 e GTM sem perda de dados por bloqueadores ou restrições de navegadores.'
WHERE _order = 2 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

UPDATE reusable_content_blocks_features_features
SET title = 'Arquitetura Headless', description = 'Front-end desacoplado em Next.js com tempos de resposta velozes e segurança técnica.'
WHERE _order = 3 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

UPDATE reusable_content_blocks_features_features
SET title = 'Governança de Estoque', description = 'Integração direta com ERPs para eliminar rupturas e retrabalho na separação de pedidos.'
WHERE _order = 4 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

UPDATE reusable_content_blocks_features_features
SET title = 'Presença Regional na RMC', description = 'Atendimento consultivo e presencial nos polos industriais de Campinas e cidades vizinhas.'
WHERE _order = 5 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

UPDATE reusable_content_blocks_features_features
SET title = 'Foco em Margem Líquida', description = 'Substituição de métricas de vaidade por lucro real apurado na linha final do fechamento mensal.'
WHERE _order = 6 AND _parent_id IN (SELECT id FROM reusable_content_blocks_features WHERE _parent_id = 14);

-- 8. Reusable Content: Services on Home
UPDATE reusable_content_blocks_services
SET 
  badge = 'SOLUÇÕES TÉCNICAS',
  title = 'Intervenções Pragmáticas de <br><span class="mil-opacity-text">Engenharia & Gestão</span>',
  description = 'Auditorias operacionais e esteiras técnicas focadas na eficiência do negócio.',
  button_text = 'Ver Todas as Soluções',
  button_url = '/services'
WHERE _parent_id = 5;

-- 9. Reusable Content: Team on Home
UPDATE reusable_content_blocks_team_block
SET 
  badge = 'EQUIPE TÉCNICA',
  title = 'Especialistas Dedicados à <br><span class="mil-opacity-text">Sua Operação</span>',
  description = 'Corpo técnico multidisciplinar atuando em engenharia, tráfego, controladoria e dados.',
  button_text = 'Conhecer Metodologia',
  button_url = '/team'
WHERE _parent_id = 6;

-- 10. Reusable Content: Latest Blog on Home
UPDATE reusable_content_blocks_archive
SET 
  badge = 'ARTIGOS TÉCNICOS',
  title = 'Análises Operacionais & <br><span class="mil-opacity-text">Gestão de Margem</span>',
  description = 'Conteúdo analítico profundo sobre DRE, arquitetura de software e distribuição regional.',
  button_text = 'Acessar Artigos',
  button_url = '/posts'
WHERE _parent_id = 7;

-- 11. Reusable Content: Call To Action (10, 38, 39, 41)
UPDATE reusable_content_blocks_call_to_action
SET 
  badge = 'DIAGNÓSTICO OPERACIONAL',
  title = 'Pronto para Sanar os <br><span class="mil-opacity-text">Gargalos da Operação?</span>',
  description = 'Agende uma Auditoria Fogo-Apagou. Analisamos seu DRE, processos e esteiras de dados para estancar perdas de margem.',
  button1_text = 'Solicitar Diagnóstico',
  button1_url = '#popup',
  button2_text = 'Falar no WhatsApp',
  button2_url = 'https://wa.me/5519993497819'
WHERE _parent_id IN (10, 38, 39, 41);

-- 12. Reusable Content: Call To Action 2 (12)
UPDATE reusable_content_blocks_call_to_action_2
SET 
  title = 'Ficou com dúvidas sobre o método ou modelo de contratação?',
  button1_text = 'Perguntas Frequentes',
  button1_url = '/faq',
  button2_text = 'Solicitar Diagnóstico',
  button2_url = '#popup'
WHERE _parent_id = 12;

-- 13. Ensure all documents are published
UPDATE services SET _status = 'published';
UPDATE projects SET _status = 'published';
UPDATE posts SET _status = 'published';
UPDATE team SET _status = 'published';
UPDATE pages SET _status = 'published';
UPDATE reusable_content SET _status = 'published';

COMMIT;
