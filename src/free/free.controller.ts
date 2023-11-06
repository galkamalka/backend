import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common'
import { FreeService } from './free.service';
import { Free as FreeModel } from '@prisma/client'


@Controller('api/free')
export class FreeController {
  constructor(
    private readonly freeService: FreeService,
  ) {}

  @Get(':id')
  async getFreeById(@Param('id') id: string): Promise<FreeModel> {
    return this.freeService.free({ id })
  }

  @Post()
  async createFree(
    @Body() freeData,
  ): Promise<FreeModel> {
    return this.freeService.createFree(freeData)
  }

  @Get()
  async getAllFree(): Promise<FreeModel[]> {
    return this.freeService.freeList()
  }
}
