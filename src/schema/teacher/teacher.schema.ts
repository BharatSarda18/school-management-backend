import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Class } from '../class/class.schema';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    age: number;

    @Prop({ required: true,length:10 })
    contactnumber: number;

    @Prop({ required: true })
    subject: string;

    @Prop({ required: true })
    isClassTeacher: boolean;

    @Prop({ required: function() { return this.isClassTeacher; },type:mongoose.Schema.Types.ObjectId,ref:'Class' })  
    classOfTeacher: Class;

}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);

export const TeacherSchemaMoongose={name:Teacher.name,schema:TeacherSchema};
