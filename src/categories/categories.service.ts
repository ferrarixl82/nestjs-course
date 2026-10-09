import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectDrizzle} from "@nestjs/drizzle";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";
import {Category, categories} from "../db/schema.js";
import {eq} from "drizzle-orm";
import {CreateCategoriesDto, UpdateCategoriesDto} from "../dto/categories.dto.js";

@Injectable()
export class CategoriesService {
        constructor(
            @InjectDrizzle()
            private readonly db: NodePgDatabase){

        }

    
        async findOne(slug:string):Promise<Category>{
            const [category] = await this.db.select().from(categories).where(eq(categories.slug, slug));
            if (!category) {
                throw new NotFoundException('Category not found');
            }
            return category;
        }
        
        async findAll():Promise<Category[]>{
            return  await this.db.select().from(categories);
        }
        async createCategory(dto:CreateCategoriesDto):Promise<Category>{
            const [createdCategory] = await this.db.insert(categories).values(dto).returning();
            return createdCategory;
        }
        async updateCategory(slug:string, data:UpdateCategoriesDto): Promise<Category>{
            const [updatedCategory] = await this.db.update(categories).set(data).where(eq(categories.slug, slug)).returning();
            return updatedCategory;
        }
       async removeCategory(slug:string):Promise<Category>{
            const [deletedCategory] = await this.db.delete(categories).where(eq(categories.slug, slug)).returning()
            return deletedCategory;
        }


}
