import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetfoodService } from './petfood.service';
import { Petfood } from './entities/petfood.entity';
import { CreatePetfoodInput } from './dto/create-petfood.input';
import { UpdatePetfoodInput } from './dto/update-petfood.input';

@Resolver(() => Petfood)
export class PetfoodResolver {
  constructor(private readonly petfoodService: PetfoodService) {}

  @Query(() => [Petfood], { name: 'petfoodAll' })
  findAll() {
    return this.petfoodService.findAll();
  }
}
