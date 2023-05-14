import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FighterDocument = Fighter & Document;

type Record = {
  wins: number;
  draws: number;
  losses: number;
};

@Schema()
export class Fighter {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  record: Record;

  @Prop({ required: true })
  gender: 'male' | 'female';

  @Prop()
  birthDate: string;

  @Prop()
  country: string;

  @Prop()
  nickname: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  reach: number;
}

export const FighterSchema = SchemaFactory.createForClass(Fighter);
