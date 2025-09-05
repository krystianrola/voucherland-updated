import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { StoresModule } from './stores/stores.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    UsersModule,
    VouchersModule,
    StoresModule,
    ArticlesModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db',
      port: 5432,
      username: 'test_user',
      password: 'test123',
      database: 'vouchland_db',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
