import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EszkozokController } from './eszkozok.controller';


@Module({
  providers: [EszkozokService, PrismaService],
  controllers: [EszkozokController]
})
export class EszkozokModule {}