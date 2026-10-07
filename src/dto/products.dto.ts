import {IsBoolean, IsInt, IsNotEmpty, IsString, Min} from 'class-validator';

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
}