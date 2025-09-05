import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Voucher } from './entities/voucher.entity';

@Module({
  controllers: [VouchersController],
  providers: [VouchersService],
  imports: [SequelizeModule.forFeature([Voucher])],
})
export class VouchersModule {}
