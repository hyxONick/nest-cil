import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiQuery,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';
import { LoggerService } from 'src/logger/logger.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { TypeOrmModule } from '@nestjs/typeorm';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(
    private readonly ProductService: ProductService,
    private logger: LoggerService,
  ) {}

  @Get('/queryAll')
  @ApiOperation({ summary: 'Query all products' })
  async findAll(): Promise<Product[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.ProductService.findAll()
  }

  @Get('queryOne/:id')
  @ApiOperation({ summary: 'Query product by id' })
  // @ApiQuery({ name: 'limit', required: true })
  async findById(@Param() param): Promise<Product> {
    return this.ProductService.findById(param.id);
  }

  @UsePipes(new ValidationPipe()) // pipe validate
  @Post('/create')
  @ApiOperation({ summary: 'create product', description: 'create product' })
  async create(@Body() ProductDto: ProductDto): Promise<Product> {

    return this.ProductService.create(ProductDto);
  }

  @Post('update/:id')
  @ApiOperation({ summary: 'update product' })
  @ApiBody({ type: ProductDto, description: 'flexible param' })
  @ApiResponse({
    status: 200,
    description: 'success => 200，fail => 400',
    type: ProductDto,
  })
  async update(@Param() param, @Body() ProductDto: ProductDto): Promise<Product> {
    return this.ProductService.update(param.id, ProductDto);
  }

  @Post('delete/:id')
  @ApiOperation({ summary: 'delete product by id' })
  async delete(@Param() param): Promise<Product> {
    return this.ProductService.delete(param.id);
  }
}
