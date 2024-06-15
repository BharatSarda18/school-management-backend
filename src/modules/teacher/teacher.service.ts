import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from 'src/schema/teacher/teacher.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {

  constructor(@InjectModel(Teacher.name) private teacherModel: Model<Teacher>){}
  create(createTeacherDto: CreateTeacherDto) {
    const neweacher=new this.teacherModel(createTeacherDto);
    return neweacher.save();
  }

  findAll() {
    return this.teacherModel.find().exec();
  }

  findOne(id: number) {
    return this.teacherModel.findById(id).exec();
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherModel.findByIdAndUpdate(id);
  }

  remove(id: number) {
    return this.teacherModel.findByIdAndDelete(id).exec();
  }
}
