import { relations } from 'drizzle-orm'
import { users } from './users.ts'
import { habits } from './habits.ts'
import { entries } from './entries.ts'
import { habitTags } from './habitTags.ts'
import { tags } from './tags.ts'

// Users can have many habits
export const userRelations = relations(users, ({ many }) => ({
  habits: many(habits),
}))

// Habits belong to one user, have many entries and tags
export const habitRelations = relations(habits, ({ one, many }) => ({
  user: one(users, {
    fields: [habits.userId],
    references: [users.id],
  }),
  entries: many(entries),
  habitTags: many(habitTags),
}))

// Tags can be on many habits
export const tagsRelations = relations(tags, ({ many }) => ({
  habits: many(tags),
}))

// Entries belong to one habit
export const entriesRelations = relations(entries, ({ one }) => ({
  habit: one(habits, {
    fields: [entries.habitId],
    references: [habits.id],
  }),
}))

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
