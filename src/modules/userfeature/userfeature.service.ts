import { Injectable, Query } from '@nestjs/common';
import { UserFeatureEntity } from './userfeature.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserFeatureDTO, QueryParamDTO } from './userfeature.dto';
import { UserEntity } from '../user/user.entity';
import { FeatureEntity } from '../feature/feature.entity';

@Injectable()
export class UserFeatureService {
    constructor(@InjectRepository(UserFeatureEntity) private readonly userFeatureRepository: Repository<UserFeatureEntity>) { }

    public async findByEmailAndFeature(@Query() queryParamDTO: QueryParamDTO) {
        let userEntity: UserEntity = this.createUserObject(queryParamDTO.email);
        let featureEntity: FeatureEntity = this.createFeatureObject(queryParamDTO.featureName);

        const data = await this.findOne(userEntity, featureEntity);
        return data != null && data.enable ? true : false;
    }

    public async create(userFeatureDTO: CreateUserFeatureDTO) {
        let userEntity: UserEntity = this.createUserObject(userFeatureDTO.email);
        let featureEntity: FeatureEntity = this.createFeatureObject(userFeatureDTO.featureName);

        const isExists = await this.findOne(userEntity, featureEntity);
        if (!isExists) {
            let userFeatureEntity: UserFeatureEntity = new UserFeatureEntity();
            userFeatureEntity.enable = userFeatureDTO.enable;
            userFeatureEntity.user = userEntity;
            userFeatureEntity.feature = featureEntity;

            await this.userFeatureRepository.save(userFeatureEntity);
            return true;
        }

        return false;
    }

    public async findOne(userEntity: UserEntity, featureEntity: FeatureEntity): Promise<UserFeatureEntity | null> {
        return await this.userFeatureRepository.findOne({ where: { user: userEntity, feature: featureEntity } });
    }

    public createUserObject(email: string): UserEntity {
        let userEntity: UserEntity = new UserEntity();
        userEntity.email = email;
        return userEntity;
    }

    public createFeatureObject(name: string): FeatureEntity {
        let featureEntity: FeatureEntity = new FeatureEntity();
        featureEntity.name = name;
        return featureEntity;
    }
}
