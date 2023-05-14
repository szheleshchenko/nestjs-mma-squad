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
  public id: number;

  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public record: Record;

  @Prop({ required: true })
  public gender: 'male' | 'female';

  @Prop()
  public birthDate: string;

  @Prop()
  public country: string;

  @Prop()
  public nickname: string;

  @Prop()
  public height: number;

  @Prop()
  public weight: number;

  @Prop()
  public reach: number;
}

export const FighterSchema = SchemaFactory.createForClass(Fighter);
