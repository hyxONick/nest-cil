import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './schemas/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
      @InjectRepository(Product)
      private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ where: { isDeleted: false } });
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id, isDeleted: false } });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async create(newProduct: ProductDto): Promise<Product> {
    const createdProduct = this.productRepository.create(newProduct);
    return this.productRepository.save(createdProduct);
  }

  async update(id: string, updatedProduct: ProductDto): Promise<Product> {
    const existingProduct = await this.findById(id);
    // Update the existing user's properties
    Object.assign(existingProduct, updatedProduct);
    existingProduct.updateTime = new Date();
    return this.productRepository.save(existingProduct);
  }

  async delete(id: string): Promise<Product | null> {
    const existingProduct = await this.findById(id);

    if (existingProduct) {
      existingProduct.isDeleted = true;
      existingProduct.updateTime = new Date();
      await this.productRepository.save(existingProduct);
      return existingProduct;
    } else {
      return null;
    }
  }
}
