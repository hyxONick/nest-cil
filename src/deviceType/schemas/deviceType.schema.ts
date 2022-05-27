import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeviceType extends Document {
  @Prop({ type: Number, required: true })
  deviceTypeNo: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  remarks: string;
}

export const DeviceTypeSchema = SchemaFactory.createForClass(DeviceType);
