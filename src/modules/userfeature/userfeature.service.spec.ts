import { Test, TestingModule } from '@nestjs/testing';
import { UserfeatureService } from './userfeature.service';

describe('UserfeatureService', () => {
  let service: UserfeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserfeatureService],
    }).compile();

    service = module.get<UserfeatureService>(UserfeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
