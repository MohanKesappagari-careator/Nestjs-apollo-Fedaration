import { Test, TestingModule } from '@nestjs/testing';
import { PetfoodService } from './petfood.service';

describe('PetfoodService', () => {
  let service: PetfoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetfoodService],
    }).compile();

    service = module.get<PetfoodService>(PetfoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
