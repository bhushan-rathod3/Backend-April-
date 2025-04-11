import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './DTO/createProduct.dto';

@Controller('products')
export class ProductsController {
  private products: CreateProductDto[] = [];
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll() {
    return this.products;
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    this.products.push(createProductDto);
    return createProductDto;
  }
}
