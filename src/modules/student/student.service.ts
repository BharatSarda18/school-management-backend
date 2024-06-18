import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from 'src/schema/student/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {

  constructor(@InjectModel(Student.name) private StudentModel: Model<Student>) { }
  create(createStudentDto: CreateStudentDto) {
    const newStudent = new this.StudentModel(createStudentDto);
    return newStudent.save();
  }

  async createMany(students: any[]) {
    return this.StudentModel.insertMany(students);
  }

  async getSchema() {
    return Object.keys(this.StudentModel.schema.paths).filter(e => (e !== '_id') && (e !== '__v'));
  }

  findAll() {
    return this.StudentModel.find().exec();
  }

  findOne(id: number) {
    return this.StudentModel.findById(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.StudentModel.findByIdAndUpdate(id, updateStudentDto);
  }

  remove(id: number) {
    return this.StudentModel.findByIdAndDelete(id);
  }
}
