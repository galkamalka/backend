import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Free, Prisma } from '@prisma/client';

@Injectable()
export class FreeService {
  constructor(private prisma: PrismaService) {}

  async free(
    userWhereUniqueInput: Prisma.FreeWhereUniqueInput,
  ): Promise<Free | null> {
    return this.prisma.free.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async freeList(): Promise<Free[]> {
    return this.prisma.free.findMany();
  }

  async createFree(data: Prisma.FreeCreateInput): Promise<Free> {
    return this.prisma.free.create({
      data,
    });
  }

  async updateFree(params: {
    where: Prisma.FreeWhereUniqueInput;
    data: Prisma.FreeUpdateInput;
  }): Promise<Free> {
    const { where, data } = params;
    return this.prisma.free.update({
      data,
      where,
    });
  }

  async deleteFree(where: Prisma.FreeWhereUniqueInput): Promise<Free> {
    return this.prisma.free.delete({
      where,
    });
  }
}
