import { Petfood } from './entities/petfood.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetfoodService } from './petfood.service';
import { PetfoodResolver } from './petfood.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Petfood])],
  providers: [PetfoodResolver, PetfoodService],
})
export class PetfoodModule {}
