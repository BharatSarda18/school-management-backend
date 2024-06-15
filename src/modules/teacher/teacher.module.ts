import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherSchemaMoongose } from 'src/schema/teacher/teacher.schema';


@Module({
  imports: [
    MongooseModule.forFeature([TeacherSchemaMoongose])
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
