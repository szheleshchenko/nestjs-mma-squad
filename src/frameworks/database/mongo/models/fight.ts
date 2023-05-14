import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Event } from './event';
import { Fighter } from './fighter';

export type FightDocument = Fight & Document;

// TODO: Mock
@Schema()
export class Fight {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  event: Event;

  @Prop({ required: true })
  fighters: Array<Fighter>;
}

export const FightSchema = SchemaFactory.createForClass(Fight);
