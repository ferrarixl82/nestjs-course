import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MovieModule } from './movie/movie.module.js';
import {DrizzleModule} from "@nestjs/drizzle";
import {ConfigModule} from "@nestjs/config";
import {drizzle} from 'drizzle-orm/node-postgres';



@Module({
   imports: [ConfigModule.forRoot({}),
       DrizzleModule.forRoot({
           drizzle,
           connection: process.env.DATABASE_URL!,
       }),
       MovieModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
