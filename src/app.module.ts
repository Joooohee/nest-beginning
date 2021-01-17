import { Module } from '@nestjs/common';
import { MoviesController } from './moives/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
