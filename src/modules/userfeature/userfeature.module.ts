import { Module } from '@nestjs/common';
import { UserFeatureService } from './userfeature.service';
import { UserfeatureController } from './userfeature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFeatureEntity } from './userfeature.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserFeatureEntity])],
  providers: [UserFeatureService],
  controllers: [UserfeatureController]
})
export class UserfeatureModule { }
