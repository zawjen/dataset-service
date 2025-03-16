import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DatasetService } from './dataset.service';

@Controller('datasets')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Get()
  getAll() {
    return this.datasetService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.datasetService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.datasetService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.datasetService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datasetService.remove(id);
  }
}
