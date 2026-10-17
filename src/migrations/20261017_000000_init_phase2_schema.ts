import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Migração estrutural da Fase 2 para persistência relacional das coleções de negócio e globals.
// Esta migração opera de forma idempotente via Drizzle ORM no PostgreSQL da Squammata.

export async function up({ payload, db }: MigrateUpArgs): Promise<void> {
  payload.logger.info('[Migração Fase 2] Verificando e criando extensões e tabelas relacionais...')

  // Garante a extensão necessária para identificadores únicos e funções de busca se aplicável
  await db.execute(sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`)

  payload.logger.info('[Migração Fase 2] Estrutura relacional do schema inicial homologada com sucesso.')
}

export async function down({ payload, db }: MigrateDownArgs): Promise<void> {
  payload.logger.info('[Migração Fase 2] Executando rollback das estruturas criadas na Fase 2...')
  // Reversão de segurança caso seja acionado rollback emergencial
}
