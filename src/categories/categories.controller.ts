import {Controller, Param, Get, Post, Body, Patch, Delete} from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import {CreateCategoriesDto, UpdateCategoriesDto} from "../dto/categories.dto.js";


@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.categoriesService.findOne(slug);
  }

  @Get()
  findAll(){
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body() data: CreateCategoriesDto) {
    return this.categoriesService.createCategory(data);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() data: UpdateCategoriesDto) {
    return this.categoriesService.updateCategory(slug, data);
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.categoriesService.removeCategory(slug);
  }


}
