import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { FeatureModule } from './modules/feature/feature.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserfeatureModule } from './modules/userfeature/userfeature.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    FeatureModule,
    UserfeatureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
