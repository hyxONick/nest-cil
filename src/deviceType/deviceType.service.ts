import { Injectable } from '@nestjs/common';
import { DeviceType } from './schemas/deviceType.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeviceTypeDto } from './dto/deviceType.dto';

@Injectable()
export class DeviceTypeService {
  constructor(@InjectModel('DeviceType') private readonly deviceTypeModel: Model<DeviceType>) {}

  async findAll(): Promise<DeviceType[]> {
    return this.deviceTypeModel.find().exec();
  }

  async findById(id: string): Promise<DeviceType> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.deviceTypeModel.findOne({ _id: id })
      : null;
  }

  async create(item: DeviceTypeDto) {
    const newItem = new this.deviceTypeModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<DeviceType> {
    return this.deviceTypeModel.findByIdAndRemove(id);
  }

  async update(id: string, deviceType: DeviceTypeDto): Promise<DeviceType> {
    return await this.deviceTypeModel.findByIdAndUpdate(id, deviceType, {new: true});
  }
}
