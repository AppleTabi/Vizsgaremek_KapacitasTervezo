import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class EszkozokService {
       constructor(private prisma: PrismaService) {}
       async findAll() {
              return this.prisma.eszkoz.findMany();
       }

       async findOne(id: number) {
              return this.prisma.eszkoz.findUnique({ 
                     where: { id } 
              });
       }

       async create(data: CreateEszkozDto) {
              return this.prisma.eszkoz.create({
                     data
              })
       }

       async update(id:number, data: UpdateEszkozDto) {
              return this.prisma.eszkoz.update({
                     where: { id },
                     data
              })
       }

       async delete(id:number) {
              return this.prisma.eszkoz.delete({
                     where: { id }
              })
       }

       
}


