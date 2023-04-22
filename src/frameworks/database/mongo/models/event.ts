import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

// TODO: Mock
@Schema()
export class Event {
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

export const EventSchema = SchemaFactory.createForClass(Event);
