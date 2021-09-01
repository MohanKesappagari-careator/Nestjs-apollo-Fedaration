import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CustomerDocument = Customer & Document;
@ObjectType()
@Schema()
export class Customer {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop()
  city: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
