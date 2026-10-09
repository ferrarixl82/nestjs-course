import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import {DrizzleModule} from "@nestjs/drizzle";
import {ConfigModule} from "@nestjs/config";
import {drizzle} from 'drizzle-orm/node-postgres';
import { CategoriesModule } from './categories/categories.module.js';



@Module({
   imports: [ConfigModule.forRoot({}),
       DrizzleModule.forRoot({
           drizzle,
           connection: process.env.DATABASE_URL!,
       }),
       ProductsModule,
       CategoriesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
