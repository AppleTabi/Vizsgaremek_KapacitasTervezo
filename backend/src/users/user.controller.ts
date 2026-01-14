import { Body, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";



@Controller('users')
export class UserController {
       constructor(private readonly userService: UserService) {}

       @Get()
       async getAllUsers() {
              return this.userService.findAll();
       }

       @Get(':id')
       async getUserById(@Param('id') id: string) {
              return this.userService.findOne(Number(id));
       }

       @Post()
       async createUser(@Body() body: CreateUserDto){
              return this.userService.create(body);
       }

       @Put(':id')
       async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
              return this.userService.update(Number(id), body);
       }

       @Delete(':id')
       async deleteUser(@Param('id') id: string){
              return this.userService.delete(Number(id));
       }
}



