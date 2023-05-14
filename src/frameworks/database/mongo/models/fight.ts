import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Event } from './event';
import { Fighter } from './fighter';

export type FightDocument = Fight & Document;

@Schema()
export class Fight {
  @Prop({ required: true })
  public id: number;

  @Prop({ required: true })
  public event: Event;

  @Prop({ required: true })
  public fighters: Array<Fighter>;
}

export const FightSchema = SchemaFactory.createForClass(Fight);
