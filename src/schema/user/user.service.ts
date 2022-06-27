import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.UserModel.findOne({ _id: id })
      : null;
  }

  async create(item: UserDto) {
    const newItem = new this.UserModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<User> {
    return this.UserModel.findByIdAndRemove(id);
  }

  async update(id: string, User: UserDto): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, User, {new: true});
  }
}
