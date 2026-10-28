#!/usr/bin/env node

/**
 * ============================================================================
 * Squammata Boilerplate Engine - CLI de Criação e Provisionamento de Sites
 * ============================================================================
 * 
 * Este assistente interativo em terminal guia o desenvolvedor na configuração
 * de um novo cliente no boilerplate, gerando o manifesto `src/site.config.ts`
 * e disparando o provisionamento dos bancos de dados e templates de nicho.
 */

import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const COLOR = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

const TEMPLATES = {
  '1': { file: 'b2b-consulting.json', name: 'B2B Consulting & Gestão' },
  '2': { file: 'local-services.json', name: 'Serviços Locais & Clínicas' },
  '3': { file: 'technology-saas.json', name: 'Tecnologia, SaaS & Software' },
}

const PRESETS = {
  '1': { key: 'terracotta', primary: '#7A4207', hover: '#9E5509', secondary: '#B87514', darkBg: '#1A1A1A', lightBg: '#FAF9F6' },
  '2': { key: 'forest', primary: '#1E4D2B', hover: '#2E7D32', secondary: '#4CAF50', darkBg: '#111F15', lightBg: '#F4F7F4' },
  '3': { key: 'river', primary: '#1D4ED8', hover: '#1E40AF', secondary: '#3B82F6', darkBg: '#0F172A', lightBg: '#F8FAFC' },
  '4': { key: 'amber', primary: '#D97706', hover: '#B45309', secondary: '#F59E0B', darkBg: '#1C1917', lightBg: '#FFFBEB' },
  '5': { key: 'coffee', primary: '#4A2E18', hover: '#6B4226', secondary: '#8B5A2B', darkBg: '#1B1410', lightBg: '#FAF6F0' },
  '6': { key: 'clay', primary: '#9C4A2F', hover: '#7A3520', secondary: '#C25E3E', darkBg: '#1C1310', lightBg: '#FBF5F2' },
}

const FONTS = {
  '1': 'editorial',
  '2': 'modern',
  '3': 'tech',
  '4': 'minimal',
}

const RADII = {
  '1': 'organic',
  '2': 'modern',
  '3': 'sharp',
}

async function main() {
  const rl = readline.createInterface({ input, output })

  console.log(`\n${COLOR.bold}${COLOR.cyan}==============================================================${COLOR.reset}`)
  console.log(`${COLOR.bold}${COLOR.cyan} Squammata Boilerplate Engine - Assistente de Criação de Site ${COLOR.reset}`)
  console.log(`${COLOR.bold}${COLOR.cyan}==============================================================${COLOR.reset}\n`)

  try {
    // 1. Identidade do Cliente
    console.log(`${COLOR.bold}${COLOR.yellow}Passo 1/4: Identidade e Marca${COLOR.reset}`)
    const name = (await rl.question(`Nome Fantasia do Cliente [Apex Consultoria]: `)).trim() || 'Apex Consultoria'
    const legalName = (await rl.question(`Razão Social Completa [Apex Consultoria Ltda.]: `)).trim() || `${name} Ltda.`
    const document = (await rl.question(`CNPJ / Documento Fiscal [00.000.000/0001-00]: `)).trim() || '00.000.000/0001-00'
    const tagline = (await rl.question(`Slogan [Excelência e Gestão Estratégica]: `)).trim() || 'Excelência e Gestão Estratégica'
    const description = (await rl.question(`Descrição Curta para SEO: `)).trim() || `Consultoria especializada e soluções para empresas.`

    // 2. Contato e Localização
    console.log(`\n${COLOR.bold}${COLOR.yellow}Passo 2/4: Contato e Localização${COLOR.reset}`)
    const email = (await rl.question(`E-mail Institucional [contato@cliente.com.br]: `)).trim() || 'contato@cliente.com.br'
    const phone = (await rl.question(`Telefone / WhatsApp [+55 19 99999-9999]: `)).trim() || '+55 19 99999-9999'
    const whatsapp = (await rl.question(`WhatsApp de Atendimento [${phone}]: `)).trim() || phone
    const street = (await rl.question(`Endereço (Rua e Bairro) [Av. Paulista, 1000 - Bela Vista]: `)).trim() || 'Av. Paulista, 1000 - Bela Vista'
    const city = (await rl.question(`Cidade [São Paulo]: `)).trim() || 'São Paulo'
    const state = (await rl.question(`Estado [SP]: `)).trim() || 'SP'
    const zipCode = (await rl.question(`CEP [01310-100]: `)).trim() || '01310-100'
    const citiesServedRaw = (await rl.question(`Cidades Atendidas (separadas por vírgula) [${city}]: `)).trim() || city
    const citiesServed = citiesServedRaw.split(',').map((c) => c.trim()).filter(Boolean)

    // 3. Escolha do Template de Nicho
    console.log(`\n${COLOR.bold}${COLOR.yellow}Passo 3/4: Modelo de Nicho${COLOR.reset}`)
    console.log(`  1) B2B Consulting (Gestão, Processos e Auditoria)`)
    console.log(`  2) Local Services (Serviços Locais, Clínicas e Escritórios)`)
    console.log(`  3) Technology & SaaS (Engenharia de Software e Plataformas)`)
    const templateChoice = (await rl.question(`Escolha o modelo de nicho [1]: `)).trim() || '1'
    const chosenTemplate = TEMPLATES[templateChoice] || TEMPLATES['1']

    // Leitura do arquivo do template para carregar serviços e sugestões
    const templatePath = path.join(rootDir, 'templates', chosenTemplate.file)
    let templateData = null
    try {
      const content = await fs.readFile(templatePath, 'utf-8')
      templateData = JSON.parse(content)
      console.log(`  ${COLOR.green}✓ Template carregado: ${chosenTemplate.name}${COLOR.reset}`)
    } catch {
      console.log(`  ${COLOR.yellow}! Não foi possível ler o template ${chosenTemplate.file}, prosseguindo com defaults.${COLOR.reset}`)
    }

    // 4. Tema Visual e Tipografia
    console.log(`\n${COLOR.bold}${COLOR.yellow}Passo 4/4: Estilo Visual e Tipografia${COLOR.reset}`)
    console.log(`  1) Terracotta (Argila e Terra / Editorial)`)
    console.log(`  2) Forest (Verde Floresta / Sustentável)`)
    console.log(`  3) River (Azul Profundo / Corporativo Tech)`)
    console.log(`  4) Amber (Âmbar e Dourado / Consultoria Premium)`)
    console.log(`  5) Coffee (Café Tostado / Artesanal)`)
    console.log(`  6) Clay (Cerâmica / Tectônico)`)
    const presetChoice = (await rl.question(`Escolha a paleta de cores [1]: `)).trim() || '1'
    const activePreset = PRESETS[presetChoice] || PRESETS['1']

    console.log(`\n  Presets Tipográficos:`)
    console.log(`  1) Editorial (Zilla Slab + Quicksand)`)
    console.log(`  2) Modern (Plus Jakarta Sans + Inter)`)
    console.log(`  3) Tech (Space Grotesk + Inter)`)
    console.log(`  4) Minimal (Inter Universal)`)
    const fontChoice = (await rl.question(`Escolha o preset tipográfico [1]: `)).trim() || '1'
    const fontPreset = FONTS[fontChoice] || 'editorial'

    console.log(`\n  Estilo de Curvatura (Bordas):`)
    console.log(`  1) Organic (Suave e arredondado)`)
    console.log(`  2) Modern (Sutil 8px/16px)`)
    console.log(`  3) Sharp (Retilíneo e técnico)`)
    const radiusChoice = (await rl.question(`Escolha a curvatura [1]: `)).trim() || '1'
    const radius = RADII[radiusChoice] || 'organic'

    rl.close()

    // Montagem do Manifesto site.config.ts
    console.log(`\n${COLOR.cyan}Gerando manifesto central em src/site.config.ts...${COLOR.reset}`)

    const siteConfigContent = `/**
 * ============================================================================
 * Squammata Boilerplate Engine - Manifesto Central de Configuração do Cliente
 * ============================================================================
 * 
 * Gerado automaticamente via CLI (scripts/create-site.mjs)
 * Data de Geração: ${new Date().toISOString()}
 */

export interface ClientBranding {
  name: string
  legalName: string
  document: string
  tagline: string
  description: string
  logos: {
    dark: string
    light: string
    symbol: string
    favicon: string
  }
}

export interface ClientContact {
  email: string
  supportEmail?: string
  phone: string
  whatsapp: string
  address: {
    street: string
    number?: string
    neighborhood: string
    city: string
    state: string
    country: string
    zipCode: string
  }
  social: {
    instagram?: string
    linkedin?: string
    github?: string
    youtube?: string
  }
  operationalHours?: string
  citiesServed?: string[]
}

export interface ClientThemeConfig {
  preset: 'terracotta' | 'forest' | 'river' | 'amber' | 'coffee' | 'clay' | 'custom'
  primaryColor: string
  primaryHover: string
  secondaryColor: string
  darkBg: string
  lightBg: string
  cardBg: string
  border: string
  radius: 'organic' | 'modern' | 'sharp'
  fontPreset?: 'editorial' | 'modern' | 'tech' | 'minimal'
  dividerStyle: 'curve' | 'wave' | 'slant' | 'straight' | 'none'
  enableWatermark: boolean
}

export interface ClientFeatures {
  enableBlog: boolean
  enableCaseStudies: boolean
  enableServices: boolean
  enableTeam: boolean
  enablePricing: boolean
  enableDiagnosticPopup: boolean
}

export interface SiteConfig {
  branding: ClientBranding
  contact: ClientContact
  theme: ClientThemeConfig
  features: ClientFeatures
}

export const defaultSiteConfig: SiteConfig = {
  branding: {
    name: ${JSON.stringify(name)},
    legalName: ${JSON.stringify(legalName)},
    document: ${JSON.stringify(document)},
    tagline: ${JSON.stringify(tagline)},
    description: ${JSON.stringify(description)},
    logos: {
      dark: '/logo/squammata/logo-novo-45.png',
      light: '/logo/squammata/logo-novo-br-45.png',
      symbol: '/logo/squammata/passarinho.svg',
      favicon: '/favicon.svg',
    },
  },
  contact: {
    email: ${JSON.stringify(email)},
    phone: ${JSON.stringify(phone)},
    whatsapp: ${JSON.stringify(whatsapp)},
    address: {
      street: ${JSON.stringify(street)},
      neighborhood: 'Centro',
      city: ${JSON.stringify(city)},
      state: ${JSON.stringify(state)},
      country: 'Brasil',
      zipCode: ${JSON.stringify(zipCode)},
    },
    social: {
      linkedin: 'https://linkedin.com',
    },
    operationalHours: 'Segunda a Sexta, das 09h às 18h',
    citiesServed: ${JSON.stringify(citiesServed)},
  },
  theme: {
    preset: ${JSON.stringify(activePreset.key)},
    primaryColor: ${JSON.stringify(activePreset.primary)},
    primaryHover: ${JSON.stringify(activePreset.hover)},
    secondaryColor: ${JSON.stringify(activePreset.secondary)},
    darkBg: ${JSON.stringify(activePreset.darkBg)},
    lightBg: ${JSON.stringify(activePreset.lightBg)},
    cardBg: '#FFFFFF',
    border: '#D5CFC6',
    radius: ${JSON.stringify(radius)},
    fontPreset: ${JSON.stringify(fontPreset)},
    dividerStyle: 'curve',
    enableWatermark: false,
  },
  features: {
    enableBlog: true,
    enableCaseStudies: true,
    enableServices: true,
    enableTeam: true,
    enablePricing: true,
    enableDiagnosticPopup: true,
  },
}
`

    const siteConfigPath = path.join(rootDir, 'src', 'site.config.ts')
    await fs.writeFile(siteConfigPath, siteConfigContent, 'utf-8')
    console.log(`${COLOR.green}✓ Manifesto src/site.config.ts atualizado com sucesso!${COLOR.reset}`)

    // Tentativa de sincronização imediata via rota /api/provision se o servidor estiver rodando
    console.log(`\n${COLOR.cyan}Tentando sincronizar banco PostgreSQL via POST /api/provision...${COLOR.reset}`)
    try {
      const response = await fetch('http://localhost:3000/api/provision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branding: { name, legalName, document, tagline, description },
          contact: { email, phone, whatsapp, address: { street, neighborhood: 'Centro', city, state, country: 'Brasil', zipCode }, citiesServed },
          theme: { preset: activePreset.key, primaryColor: activePreset.primary, primaryHover: activePreset.hover, radius, fontPreset },
          templateData,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        console.log(`${COLOR.green}✓ Banco de dados provisionado com sucesso!${COLOR.reset}`)
        console.log(`  Mensagem: ${result.message}`)
        if (result.servicesCount) {
          console.log(`  Serviços criados: ${result.servicesCount}`)
        }
      } else {
        console.log(`${COLOR.yellow}! Servidor respondeu com status ${response.status}. As alterações no manifesto local foram gravadas.${COLOR.reset}`)
      }
    } catch {
      console.log(`${COLOR.yellow}! Servidor dev em http://localhost:3000 não detectado no momento.${COLOR.reset}`)
      console.log(`  As configurações foram gravadas com sucesso no arquivo local.`)
      console.log(`  Assim que iniciar o servidor ('pnpm dev'), o site já carregará com o novo tema e dados.`)
    }

    console.log(`\n${COLOR.bold}${COLOR.green}==============================================================${COLOR.reset}`)
    console.log(`${COLOR.bold}${COLOR.green} Novo site configurado com sucesso!${COLOR.reset}`)
    console.log(`  Acesse o painel: http://localhost:3000/admin`)
    console.log(`  Acesse o frontend: http://localhost:3000`)
    console.log(`${COLOR.bold}${COLOR.green}==============================================================${COLOR.reset}\n`)
  } catch (error) {
    rl.close()
    console.error(`\n${COLOR.yellow}Erro na execução do CLI:${COLOR.reset}`, error.message)
    process.exit(1)
  }
}

main()
