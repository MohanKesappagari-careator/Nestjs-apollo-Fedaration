import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetfoodInput {
  @Field()
  name: string;

  @Field()
  amount: number;
}
