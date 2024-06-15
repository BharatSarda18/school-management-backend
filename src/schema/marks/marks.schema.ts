import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Student } from '../student/student.schema'; // Adjust the import path as needed

export type MarksDocument = HydratedDocument<Marks>;  

@Schema()
export class Marks {
  @Prop({ type:mongoose.Schema.Types.ObjectId, ref: 'Student', required: true })
  student: Student;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  examType: string; // e.g., Midterm, Final, etc.

  @Prop({ required: true })
  marks: number;

  @Prop({ required: true })
  maxMarks: number;

  @Prop()
  remarks?: string;
}

export const MarksSchema = SchemaFactory.createForClass(Marks);

export const MarksSchemaMoongose={name:Marks.name,schema:MarksSchema};
