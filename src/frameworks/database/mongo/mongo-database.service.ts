import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, Fighter } from 'src/core';
import { DatabaseService } from 'src/core/abstracts/database';
import { MongoRepository } from 'src/frameworks/repository/mongo';
import { EventDocument, FighterDocument } from './models';

export class MongoDatabaseService implements DatabaseService, OnApplicationBootstrap {
  public events: MongoRepository<EventDocument>;
  public fighters: MongoRepository<FighterDocument>;

  constructor(
    @InjectModel(Event.name)
    private eventsRepository: Model<EventDocument>,
    @InjectModel(Fighter.name)
    private fightersRepository: Model<FighterDocument>
  ) {}

  public onApplicationBootstrap(): void {
    this.events = new MongoRepository<EventDocument>(this.eventsRepository);
    this.fighters = new MongoRepository<FighterDocument>(this.fightersRepository);
  }
}
