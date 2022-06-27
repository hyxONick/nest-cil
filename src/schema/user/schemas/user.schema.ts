import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  tel: string;

  @Prop({ type: String, required: false })
  email: string;

  @Prop({ type: String, required: false })
  employeeNumber: string;

  @Prop({ type: Boolean, required: false })
  isAdmin: boolean;

  @Prop({ type: String, required: false })
  dept: string;

  @Prop({ type: String, required: false })
  position: string;

  @Prop({ type: String, required: false })
  remarks: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
