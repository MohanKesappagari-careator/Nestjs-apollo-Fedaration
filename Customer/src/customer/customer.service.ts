import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Model } from 'mongoose';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer, CustomerDocument } from './schema/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
  ) {}
  async create(createCustomerInput: CreateCustomerInput) {
    let c = new this.customerModel(createCustomerInput);
    return await c.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.customerModel.findOne({ _id: id });
  }

  async update(id: any, updateCustomerInput: UpdateCustomerInput) {
    return await this.customerModel
      .findByIdAndUpdate(
        { _id: updateCustomerInput._id },
        updateCustomerInput,
        {
          new: true,
        },
      )
      .exec();
  }

  async remove(_id: string) {
    try {
      return await this.customerModel.findByIdAndRemove(_id);
    } catch (err) {
      console.log(err);
    }
  }
}
