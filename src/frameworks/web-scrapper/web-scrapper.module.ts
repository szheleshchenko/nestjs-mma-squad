import { Module } from '@nestjs/common';
import { CheerioWebScrapperModule } from './cheerio';

@Module({
  imports: [CheerioWebScrapperModule],
  exports: [CheerioWebScrapperModule]
})
export class WebScrapperModule {}
