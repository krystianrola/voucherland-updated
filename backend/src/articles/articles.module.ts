import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './entities/article.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [SequelizeModule.forFeature([Article])],
})
export class ArticlesModule {}
