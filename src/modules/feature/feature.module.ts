import { Module } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FeatureController } from './feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureEntity } from './feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureEntity])],
  providers: [FeatureService],
  controllers: [FeatureController]
})
export class FeatureModule { }
