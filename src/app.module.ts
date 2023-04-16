import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { WebScrapperModule } from './frameworks/web-scrapper/web-scrapper.module';

@Module({
  imports: [
    HttpModule,
    WebScrapperModule
  ],
  controllers: [AppController],
})
export class AppModule {}
