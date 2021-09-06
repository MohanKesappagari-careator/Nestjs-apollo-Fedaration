import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Petfood } from './entities/petfood.entity';
import { Injectable } from '@nestjs/common';
import { CreatePetfoodInput } from './dto/create-petfood.input';
import { UpdatePetfoodInput } from './dto/update-petfood.input';

@Injectable()
export class PetfoodService {
  constructor(
    @InjectRepository(Petfood) private petRepo: Repository<Petfood>,
  ) {}
  async create(createPetfoodInput: CreatePetfoodInput) {
    const f = await this.petRepo.create(createPetfoodInput);
    return this.petRepo.save(f);
  }

  findAll() {
    return this.petRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} petfood`;
  }

  update(id: number, updatePetfoodInput: UpdatePetfoodInput) {
    return `This action updates a #${id} petfood`;
  }

  remove(id: number) {
    return `This action removes a #${id} petfood`;
  }
}
