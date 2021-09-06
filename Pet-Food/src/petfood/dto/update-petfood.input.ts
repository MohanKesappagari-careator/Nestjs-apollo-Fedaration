import { CreatePetfoodInput } from './create-petfood.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetfoodInput extends PartialType(CreatePetfoodInput) {
  @Field(() => Int)
  id: number;
}
