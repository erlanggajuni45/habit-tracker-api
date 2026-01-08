import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { habits } from './habits.ts'
import { relations } from 'drizzle-orm'

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

// Entries belong to one habit
export const entriesRelations = relations(entries, ({ one }) => ({
  habit: one(habits, {
    fields: [entries.habitId],
    references: [habits.id],
  }),
}))

export type Entry = typeof entries.$inferSelect
