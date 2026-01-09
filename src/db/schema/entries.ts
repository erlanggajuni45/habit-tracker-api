import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { habits } from './habits.ts'

// Habit entries - individual completions
export const entries = pgTable('entries', {
  id: uuid('id').primaryKey().defaultRandom(),
  habitId: uuid('habit_id')
    .references(() => habits.id, { onDelete: 'cascade' })
    .notNull(),
  completionDate: timestamp('completion_date').defaultNow().notNull(),
  note: text('note'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type Entry = typeof entries.$inferSelect
