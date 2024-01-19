import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './schemas/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(newUser: User): Promise<User> {
    const createdUser = this.userRepository.create(newUser);
    return this.userRepository.save(createdUser);
  }

  async update(id: string, updatedUser: User): Promise<User> {
    const existingUser = await this.findById(id);

    // Update the existing user's properties
    Object.assign(existingUser, updatedUser);

    return this.userRepository.save(existingUser);
  }

  async delete(id: string): Promise<User | null> {
    const existingUser = await this.findById(id);

    if (existingUser) {
      await this.userRepository.remove(existingUser);
      return existingUser;
    } else {
      return null;
    }
  }
}
