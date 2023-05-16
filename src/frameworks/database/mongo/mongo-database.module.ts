import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Fighter } from 'src/core';
import { DatabaseService } from 'src/core/abstracts/database';
import {
  Event,
  EventSchema,
  Fight,
  FightSchema,
  FighterSchema
} from './models';
import { MongoDatabaseService } from './mongo-database.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Fighter.name, schema: FighterSchema },
      { name: Event.name, schema: EventSchema },
      { name: Fight.name, schema: FightSchema }
    ]),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_CONNECTION')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    {
      provide: DatabaseService,
      useClass: MongoDatabaseService
    }
  ],
  exports: [DatabaseService]
})
export class MongoDatabaseModule {}
