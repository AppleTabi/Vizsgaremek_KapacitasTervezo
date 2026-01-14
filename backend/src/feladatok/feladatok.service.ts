import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class FeladatokService {
       constructor(private prisma: PrismaService) {}
       async findAll() {
              return this.prisma.feladat.findMany();
       }

       async findOne(id: number) {
              return this.prisma.feladat.findUnique({ 
                     where: { id } 
              });
       }

       async create(data: CreateFeladatDto) {
              return this.prisma.feladat.create({
                     data
              })
       }

       async update(id:number, data: UpdateFeladatDto) {
              return this.prisma.feladat.update({
                     where: { id },
                     data
              })
       }

       async delete(id:number) {
              return this.prisma.feladat.delete({
                     where: { id }
              })
       }

       
}


