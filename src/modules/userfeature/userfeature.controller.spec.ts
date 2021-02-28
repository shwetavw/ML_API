import { Test, TestingModule } from '@nestjs/testing';
import { UserfeatureController } from './userfeature.controller';

describe('UserfeatureController', () => {
  let controller: UserfeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserfeatureController],
    }).compile();

    controller = module.get<UserfeatureController>(UserfeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
