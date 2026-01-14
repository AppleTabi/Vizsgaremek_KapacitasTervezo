import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MunkakController } from './munkak.controller';

@Module({
  providers: [MunkakService, PrismaService],
  controllers: [MunkakController]
})
export class MunkakModule {}