import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core'
import { habits } from './habits.ts'
import { tags } from './tags.ts'

// Junction table for many to many relationship
export const habitTags = pgTable('habit_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  habitId: uuid('habit_id')
    .references(() => habits.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  tagId: uuid('tag_id')
    .references(() => tags.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type HabitTag = typeof habitTags.$inferSelect
