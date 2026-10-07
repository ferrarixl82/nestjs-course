import {Controller, Get, Post, Body} from '@nestjs/common';
import {MovieService} from "./movie.service.js";
import {CreateProductDto} from "../dto/products.dto.js";


@Controller(
    {
      path:'products',

    }
)
export class MovieController {
    constructor(private readonly movieService: MovieService){}
  @Get()
  findAll(){
    return this.movieService.findAll();
  }

    @Post()
    createNewProduct(@Body() dto:CreateProductDto){
        return this.movieService.createProduct(dto);
    }



}
