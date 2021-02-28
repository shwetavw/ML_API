import { Injectable } from '@nestjs/common';
import { FeatureEntity } from './feature.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeatureDTO } from './feature.dto';

@Injectable()
export class FeatureService {
    constructor(@InjectRepository(FeatureEntity) private readonly featureRepository: Repository<FeatureEntity>) { }

    public async findAll(): Promise<FeatureEntity[]> {
        return await this.featureRepository.find();
    }

    public async create(userEntity: CreateFeatureDTO): Promise<FeatureEntity> {
        return await this.featureRepository.save(userEntity);
    }
}