import { Injectable } from '@nestjs/common';
import {InjectDrizzle} from "@nestjs/drizzle";
import type {NodePgDatabase} from "drizzle-orm/node-postgres";
import {Product, products} from "../db/schema.js";
import {CreateProductDto} from "../dto/products.dto.js";


@Injectable()
export class MovieService {
    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase)
            {}

         findAll():Promise<Product[]>{
            return this.db.select().from(products);
        }

        async createProduct(dto:CreateProductDto):Promise<Product>{
            const [createdProduct] = await this.db.insert(products).values(dto).returning();
            return createdProduct;
        }


}
