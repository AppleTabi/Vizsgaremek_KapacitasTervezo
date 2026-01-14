import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FeladatokController } from './feladatok.controller';

@Module({
  providers: [FeladatokService, PrismaService],
  controllers: [FeladatokController]
})
export class FeladatokModule {}