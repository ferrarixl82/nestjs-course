import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateCategoriesDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    slug: string;

}

export class UpdateCategoriesDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    slug: string;

}