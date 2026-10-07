import {boolean, integer, pgTable, text, uuid} from 'drizzle-orm/pg-core'

export const products = pgTable('products',
    {
        id: uuid('id').defaultRandom().primaryKey(),
        title: text().notNull(),
        quantity:integer().notNull(),
        inStock:boolean().default(true).notNull(),
    })

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;