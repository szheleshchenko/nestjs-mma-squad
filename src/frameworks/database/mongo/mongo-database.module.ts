import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Fighter } from 'src/core';
import { DatabaseService } from 'src/core/abstracts/database';
import { Event, EventSchema, FighterSchema } from './models';
import { MongoDatabaseService } from './mongo-database.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Fighter.name, schema: FighterSchema },
      { name: Event.name, schema: EventSchema }
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: 'UFC events',
        useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('MONGODB_URI'),
          useNewUrlParser: true,
          useUnifiedTopology: true
        }),
        inject: [ConfigService]
      }
    ])
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
