import {Controller, Get, Post, Body, Delete, Param,Put, Patch, Query} from '@nestjs/common';
import {ProductsService} from "./products.service.js";
import {CreateProductDto, UpdateProductDto} from "../dto/products.dto.js";





@Controller(
    {
      path:'products',

    }
)
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
      @Get()
      findAll(@Query('category') category?: string)
      {
          if(category){
              return this.productsService.findByCategory(category);
          }else{
        return this.productsService.findAll();}
      }


      @Get(':id')
        findOne(@Param('id') id:string){
        return this.productsService.findOne(id);
      }
    @Post()
    createNewProduct(@Body() dto:CreateProductDto){
        return this.productsService.createProduct(dto);
    }

    @Delete (':id')
    deleteProduct(@Param ('id') id:string){
        return this.productsService.deleteProduct(id)
    }

    @Put(':id')
    updateProduct(@Param('id')id:string, @Body() data:CreateProductDto){
        return this.productsService.updateProduct(id,data)
    }

    @Patch(':id')
    patchProduct(@Param('id')id:string, @Body() data:UpdateProductDto){
        return this.productsService.patchProduct(id,data)
    }



}
