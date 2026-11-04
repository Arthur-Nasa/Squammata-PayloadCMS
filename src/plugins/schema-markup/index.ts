import type { Config, Plugin } from 'payload'
import { PortfolioSettings } from './globals/PortfolioSettings'
import { createSchemaFields } from './fields/schemaFields'
import type { SchemaMarkupPluginConfig } from './types'

export const schemaMarkupPlugin =
  (pluginConfig: SchemaMarkupPluginConfig = {}): Plugin =>
  (incomingConfig: Config): Config => {
    const config = { ...incomingConfig }

    // 1. Registra o Global de Portfólio & Schemas
    if (pluginConfig.enablePortfolioGlobal !== false) {
      if (!config.globals) {
        config.globals = []
      }

      const existingGlobalIndex = config.globals.findIndex(
        (global) => global.slug === (pluginConfig.portfolioGlobalSlug || PortfolioSettings.slug),
      )

      if (existingGlobalIndex === -1) {
        config.globals.push(PortfolioSettings)
      }
    }

    // 2. Injeta a aba de Schema Markup nas coleções especificadas
    const targetCollections = pluginConfig.collections || ['pages', 'posts']

    if (config.collections && targetCollections.length > 0) {
      config.collections = config.collections.map((collection) => {
        if (!targetCollections.includes(collection.slug)) {
          return collection
        }

        const schemaFields = createSchemaFields()

        // Procura se a coleção já possui tabs (como a coleção Pages)
        const tabsFieldIndex = collection.fields.findIndex((f) => f.type === 'tabs')

        if (tabsFieldIndex !== -1) {
          const tabsField = collection.fields[tabsFieldIndex] as any
          const existingSchemaTab = tabsField.tabs.find((tab: any) => tab.name === 'schemaMarkup' || tab.label === 'Schema.org')

          if (!existingSchemaTab) {
            tabsField.tabs.push({
              label: 'Schema.org',
              fields: schemaFields,
            })
          }
          return collection
        }

        // Caso a coleção não tenha tabs raiz, adiciona como grupo de campos
        const existingSchemaGroup = collection.fields.find(
          (f) => 'name' in f && f.name === 'schemaMarkup',
        )

        if (!existingSchemaGroup) {
          return {
            ...collection,
            fields: [...collection.fields, ...schemaFields],
          }
        }

        return collection
      })
    }

    return config
  }

export * from './types'
export { PortfolioSettings } from './globals/PortfolioSettings'
export { createSchemaFields } from './fields/schemaFields'
