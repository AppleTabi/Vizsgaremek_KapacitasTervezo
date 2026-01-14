import { Body, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";



@Controller('comments')
export class CommentsController {
       constructor(private readonly commentsService: CommentsService) {}

       @Get()
       async getAllComments() {
              return this.commentsService.findAll();
       }

       @Get(':id')
       async getCommentById(@Param('id') id: string) {
              return this.commentsService.findOne(Number(id));
       }

       @Post()
       async createComment(@Body() body: CreateCommentDto){
              return this.commentsService.create(body);
       }

       @Put(':id')
       async updateComment(@Param('id') id: string, @Body() body: UpdateCommentDto){
              return this.commentsService.update(Number(id), body);
       }

       @Delete(':id')
       async deleteComment(@Param('id') id: string){
              return this.commentsService.delete(Number(id));
       }
}



