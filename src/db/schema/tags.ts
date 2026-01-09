import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

// Tags table - categorization system
export const tags = pgTable('tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  color: varchar('color', { length: 7 }).default('#6B7280'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Tag = typeof tags.$inferSelect
