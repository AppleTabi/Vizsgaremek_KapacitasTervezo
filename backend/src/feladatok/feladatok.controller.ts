import { Body, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";



@Controller('feladatok')
export class FeladatokController {
       constructor(private readonly feladatokService: FeladatokService) {}

       @Get()
       async getAllFeladatok() {
              return this.feladatokService.findAll();
       }

       @Get(':id')
       async getFeladatById(@Param('id') id: string) {
              return this.feladatokService.findOne(Number(id));
       }

       @Post()
       async createFeladat(@Body() body: CreateFeladatDto){
              return this.feladatokService.create(body);
       }

       @Put(':id')
       async updateFeladat(@Param('id') id: string, @Body() body: UpdateFeladatDto){
              return this.feladatokService.update(Number(id), body);
       }

       @Delete(':id')
       async deleteFeladat(@Param('id') id: string){
              return this.feladatokService.delete(Number(id));
       }
}



