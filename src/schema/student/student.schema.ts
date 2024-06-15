import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Class } from '../class/class.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    fathername: string;

    @Prop({ required: true })
    mothername: string;

    @Prop({ required: true,length:10 })
    contactnumber: number;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Class" ,required: true })
    class:Class;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

export const StudentSchemaMoongose={name:Student.name,schema:StudentSchema};
