import { Body, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";



@Controller('munkak')
export class MunkakController {
       constructor(private readonly munkakService: MunkakService) {}

       @Get()
       async getAllMunkak() {
              return this.munkakService.findAll();
       }

       @Get(':id')
       async getMunkaById(@Param('id') id: string) {
              return this.munkakService.findOne(Number(id));
       }

       @Post()
       async createMunka(@Body() body: CreateMunkaDto){
              return this.munkakService.create(body);
       }

       @Put(':id')
       async updateMunkak(@Param('id') id: string, @Body() body: UpdateMunkaDto){
              return this.munkakService.update(Number(id), body);
       }

       @Delete(':id')
       async deleteMunka(@Param('id') id: string){
              return this.munkakService.delete(Number(id));
       }
}



