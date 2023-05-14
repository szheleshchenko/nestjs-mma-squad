import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true })
  public id: number;

  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public date: string;

  @Prop({ required: true })
  public venue: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
