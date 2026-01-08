import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core'
import { habits } from './habits.ts'
import { tags } from './tags.ts'
import { relations } from 'drizzle-orm'

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

// Junction table relations
export const habitTagsRelations = relations(habitTags, ({ one }) => ({
  habit: one(habits, {
    fields: [habitTags.habitId],
    references: [habits.id],
  }),
  tag: one(tags, {
    fields: [habitTags.tagId],
    references: [tags.id],
  }),
}))

export type HabitTag = typeof habitTags.$inferSelect
