import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectDrizzle} from "@nestjs/drizzle";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";
import {Product, products} from "../db/schema.js";
import {CreateProductDto, UpdateProductDto} from "../dto/products.dto.js";
import {eq} from "drizzle-orm";


@Injectable()
export class ProductsService {
    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase)
            {}

         findAll():Promise<Product[]>{
            return this.db.select().from(products);
        }
        
        async findByCategory(category:string):Promise<Product[]>{
            const product = await this.db.select().from(products).where(eq(products.categoryName, category));
            if (!product) {
                throw new NotFoundException('Product not found');
            }
            return product;
        }
        
        async findOne(id: string): Promise<Product> {
            const [product] = await this.db.select().from(products).where(eq(products.id, id));
            if (!product) {
                throw new NotFoundException('Product not found');
            }
            return product;
        }

        async createProduct(dto:CreateProductDto):Promise<Product>{
            const [createdProduct] = await this.db.insert(products).values(dto).returning();
            return createdProduct;
        }

        async deleteProduct(id:string):Promise<Product>{
            const [deletedProduct] = await this.db.delete(products).where(eq(products.id, id)).returning()
            return deletedProduct;
        }

        async updateProduct(id:string, data:CreateProductDto):Promise<Product>{
            const [updatedProduct] = await this.db.update(products).set(data).where(eq(products.id, id)).returning();
            return updatedProduct;
        }

        async patchProduct(id:string, data:UpdateProductDto):Promise<Product>{
            const [updatedProduct] = await this.db.update(products).set(data).where(eq(products.id, id)).returning();
            return updatedProduct;
        }
}
