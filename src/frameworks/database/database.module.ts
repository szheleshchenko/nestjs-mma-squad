import { Module } from '@nestjs/common';
import { MongoDatabaseModule } from './mongo/mongo-database.module';

@Module({
  imports: [MongoDatabaseModule],
  exports: [MongoDatabaseModule]
})
export class DatabaseModule {}