import { Test, TestingModule } from '@nestjs/testing';
import { PetfoodResolver } from './petfood.resolver';
import { PetfoodService } from './petfood.service';

describe('PetfoodResolver', () => {
  let resolver: PetfoodResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetfoodResolver, PetfoodService],
    }).compile();

    resolver = module.get<PetfoodResolver>(PetfoodResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
