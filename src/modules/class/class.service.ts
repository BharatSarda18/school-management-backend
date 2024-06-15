import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from 'src/schema/class/class.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClassService {

  constructor(@InjectModel(Class.name) private classModel: Model<Class>){}
  create(createClassDto: CreateClassDto) {
    const newClass=new this.classModel(createClassDto);
    return newClass.save();
  }

  findAll() {
    return this.classModel.find().exec();
  }

  findOne(id: number) {
    return this.classModel.findById(id).exec();
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.classModel.findByIdAndUpdate(id,updateClassDto);
  }

  remove(id: number) {
    return this.classModel.findByIdAndDelete(id);
  }
}
