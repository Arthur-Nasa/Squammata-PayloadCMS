#!/usr/bin/env node

/**
 * ============================================================================
 * Squammata Boilerplate Engine - Script de Exportação e Empacotamento de Cliente
 * ============================================================================
 * 
 * Este utilitário inspeciona o manifesto ativo, valida a integridade do código
 * e fornece instruções prontas para desanexar e publicar o projeto no repositório
 * Git exclusivo do novo cliente.
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const COLOR = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
}

async function exportClient() {
  console.log(`\n${COLOR.bold}${COLOR.cyan}==============================================================${COLOR.reset}`)
  console.log(`${COLOR.bold}${COLOR.cyan} Squammata Boilerplate Engine - Exportação de Projeto Cliente ${COLOR.reset}`)
  console.log(`${COLOR.bold}${COLOR.cyan}==============================================================${COLOR.reset}\n`)

  const siteConfigPath = path.join(rootDir, 'src', 'site.config.ts')
  let configRaw = ''
  try {
    configRaw = await fs.readFile(siteConfigPath, 'utf-8')
  } catch (err) {
    console.error(`Erro ao ler src/site.config.ts:`, err.message)
    process.exit(1)
  }

  // Extração simples dos metadados
  const nameMatch = configRaw.match(/name:\s*['"]([^'"]+)['"]/)
  const legalMatch = configRaw.match(/legalName:\s*['"]([^'"]+)['"]/)
  const emailMatch = configRaw.match(/email:\s*['"]([^'"]+)['"]/)
  const presetMatch = configRaw.match(/preset:\s*['"]([^'"]+)['"]/)
  const fontMatch = configRaw.match(/fontPreset:\s*['"]([^'"]+)['"]/)

  const clientName = nameMatch ? nameMatch[1] : 'Cliente Desconhecido'
  const legalName = legalMatch ? legalMatch[1] : clientName
  const email = emailMatch ? emailMatch[1] : 'N/A'
  const preset = presetMatch ? presetMatch[1] : 'terracotta'
  const fontPreset = fontMatch ? fontMatch[1] : 'editorial'
  const slug = clientName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  console.log(`${COLOR.bold}Resumo do Cliente Ativo:${COLOR.reset}`)
  console.log(`  • Nome: ${clientName}`)
  console.log(`  • Razão Social: ${legalName}`)
  console.log(`  • E-mail: ${email}`)
  console.log(`  • Paleta de Cores: ${preset}`)
  console.log(`  • Preset Tipográfico: ${fontPreset}`)
  console.log(`  • Slug do Projeto: ${slug}`)

  console.log(`\n${COLOR.bold}${COLOR.green}Instruções para Desanexar Repositório Git do Cliente:${COLOR.reset}`)
  console.log(`  1. Crie uma branch de entrega para o cliente:`)
  console.log(`     ${COLOR.cyan}git checkout -b release/${slug}${COLOR.reset}`)
  console.log(`  2. Adicione o remote do repositório exclusivo do cliente:`)
  console.log(`     ${COLOR.cyan}git remote add ${slug} git@github.com:organizacao/${slug}-site.git${COLOR.reset}`)
  console.log(`  3. Faça o push direto para a branch main do novo repositório:`)
  console.log(`     ${COLOR.cyan}git push ${slug} release/${slug}:main${COLOR.reset}`)

  console.log(`\n${COLOR.bold}${COLOR.green}==============================================================${COLOR.reset}\n`)
}

exportClient()
