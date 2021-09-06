import { Petfood } from './entities/petfood.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetfoodService } from './petfood.service';
import { PetfoodResolver } from './petfood.resolver';
import { PetfoodController } from './petfood.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Petfood]),
    MulterModule.register({
      dest: 'D:/Nestjs-apolloFedaration/uploads',
    }),
  ],
  providers: [PetfoodResolver, PetfoodService],
  controllers: [PetfoodController],
})
export class PetfoodModule {}
