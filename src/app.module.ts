import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { FreeController } from './free/free.controller';
import { FreeService } from './free/free.service';
import { SchoolPostController } from './school-post/school-post.controller';
import { SchoolPostService } from './school-post/school-post.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, UserController, FreeController, SchoolPostController],
  providers: [AppService, UserService, FreeService, SchoolPostService],
})
export class AppModule {}
