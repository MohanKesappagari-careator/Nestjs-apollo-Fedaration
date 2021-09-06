import { PetfoodService } from './petfood.service';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import * as reader from 'xlsx';
import { v4 as uuid } from 'uuid';

import { Petfood } from './entities/petfood.entity';
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePetfoodInput } from './dto/create-petfood.input';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { randomUUID } from 'crypto';

@Controller('petfood')
export class PetfoodController {
  constructor(private petfoodService: PetfoodService) {}

  @Post()
  create(@Body() createPetfoodInput: CreatePetfoodInput) {
    return this.petfoodService.create(createPetfoodInput);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'D:/Nestjs-apolloFedaration/uploads',
        filename: (req: any, file: Express.Multer.File, callback: any) => {
          callback(null, `${uuid()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const f = extname(file.originalname);
    const fi = reader.readFile(file.path);
    const sheets = fi.SheetNames;
    let data: any = [];
    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(fi.Sheets[fi.SheetNames[i]]);
      temp.forEach((res) => data.push(res));
    }
    await this.petfoodService.create(data);
    console.log(data);
  }
}
