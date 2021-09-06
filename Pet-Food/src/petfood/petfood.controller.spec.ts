import { Test, TestingModule } from '@nestjs/testing';
import { PetfoodController } from './petfood.controller';

describe('PetfoodController', () => {
  let controller: PetfoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetfoodController],
    }).compile();

    controller = module.get<PetfoodController>(PetfoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
