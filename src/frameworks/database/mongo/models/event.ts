import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  public id: number;

  @Prop()
  public name: string;

  @Prop()
  public date: string;

  @Prop()
  public venue: string;

  @Prop({ required: true })
  public sherdogUrl: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
