import { Body, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";



@Controller('eszkozok')
export class EszkozokController {
       constructor(private readonly eszkozokService: EszkozokService) {}

       @Get()
       async getAllEszkozok() {
              return this.eszkozokService.findAll();
       }

       @Get(':id')
       async getEszkozById(@Param('id') id: string) {
              return this.eszkozokService.findOne(Number(id));
       }

       @Post()
       async createEszkoz(@Body() body: CreateEszkozDto){
              return this.eszkozokService.create(body);
       }

       @Put(':id')
       async updateEszkoz(@Param('id') id: string, @Body() body: UpdateEszkozDto){
              return this.eszkozokService.update(Number(id), body);
       }

       @Delete(':id')
       async deleteEszkoz(@Param('id') id: string){
              return this.eszkozokService.delete(Number(id));
       }
}



