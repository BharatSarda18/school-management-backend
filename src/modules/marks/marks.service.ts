import { MarksDocument } from '../../schema/marks/marks.schema';
import { Injectable } from '@nestjs/common';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Marks } from 'src/schema/marks/marks.schema';
import { Model } from 'mongoose';

@Injectable()
export class MarksService {

  constructor(@InjectModel(Marks.name) private marksModel: Model<MarksDocument>) {}
  create(createMarkDto: CreateMarkDto) {
    const marks=new this.marksModel(createMarkDto);
    return marks.save();
  }

  findAll() {
    return this.marksModel.find().exec();
  }

  findOne(id: number) {
    return this.marksModel.findById(id);
  }

  update(id: number, updateMarkDto: UpdateMarkDto) {
    return this.marksModel.findByIdAndUpdate(id,updateMarkDto);
  }

  remove(id: number) {
    return this.marksModel.findByIdAndDelete(id);
  }
}
