import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Store } from './entities/store.entity';

@Module({
  controllers: [StoresController],
  providers: [StoresService],
  imports: [SequelizeModule.forFeature([Store])],
})
export class StoresModule {}
