import { Injectable } from '@nestjs/common';
import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemDTO } from './dto/item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findById(id: string): Promise<Item> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
  }

  async create(item: ItemDTO) {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemDTO): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
