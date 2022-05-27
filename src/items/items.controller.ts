import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { LoggerService } from 'src/logger/logger.service';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService,
    private logger: LoggerService,
  ) {}

  @Get()
  async findAll(): Promise<Item[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param() param): Promise<Item> {
    return this.itemsService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Item> {
    return this.itemsService.delete(param.id);
  }
}
