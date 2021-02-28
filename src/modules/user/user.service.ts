
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    public async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    public async create(userEntity: CreateUserDTO): Promise<UserEntity> {
        return await this.userRepository.save(userEntity);
    }

}