import {IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min} from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    quantity: number;

    @IsBoolean()
    inStock: boolean;

    @IsString()
    categorie:string;
}

export class UpdateProductDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    quantity: number;

    @IsOptional()
    @IsBoolean()
    inStock: boolean;

    @IsOptional()
    @IsString()
    categorie:string;

}