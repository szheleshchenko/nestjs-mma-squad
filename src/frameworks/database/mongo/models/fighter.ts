import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FighterDocument = Fighter & Document;

// TODO: Mock
@Schema()
export class Fighter {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  weightClass: string;

  @Prop({ required: true })
  record: string;

  @Prop({ required: true })
  height: string;

  @Prop({ required: true })
  reach: string;

  @Prop({ required: true })
  stance: string;
}

export const FighterSchema = SchemaFactory.createForClass(Fighter);
