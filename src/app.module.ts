import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './frameworks/database/database.module';
import { WebScrapperModule } from './frameworks/web-scrapper/web-scrapper.module';
import { SchedulersModule } from './schedulers/schedulers.module';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.dev.env'],
      isGlobal: true
    }),
    WebScrapperModule,
    SchedulersModule,
    DatabaseModule
  ],
  controllers: [AppController],
})
export class AppModule {}
