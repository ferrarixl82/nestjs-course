import {boolean, integer, pgTable, text, uuid, varchar} from 'drizzle-orm/pg-core'

export const products = pgTable('products',
    {
        id: uuid('id').defaultRandom().primaryKey(),
        title: text().notNull(),
        quantity:integer().notNull(),
        inStock:boolean().default(true).notNull(),
        categoryName: text().references(()=>categories.slug)
    })

export const categories = pgTable('categories', {

    name: text()
        .notNull()
        .unique(),

    slug: text()
        .notNull()
        .unique().primaryKey(),
});


export type Product = typeof products.$inferSelect;
export type Category = typeof categories.$inferSelect;