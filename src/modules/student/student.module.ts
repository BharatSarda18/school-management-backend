import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchemaMoongose } from 'src/schema/student/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([StudentSchemaMoongose])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule { }
