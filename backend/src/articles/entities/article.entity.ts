import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

interface ArticleCreationAttr {
  title: string;
  description: string;
  content: string;
  sub_title: string;
  sub_content: string;
  article_image: string;
  read_time: string;
  status: string;
}

@Table
export class Article extends Model<Article, ArticleCreationAttr> {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column
  sub_title: string;

  @AllowNull(false)
  @Column
  sub_content: string;

  @Column
  article_image: string;

  @Column
  read_time: string;

  @Column
  status: string;
}
