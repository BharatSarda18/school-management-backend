import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ClassEnum } from 'src/common/constants/enum/class.enum';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
    @Prop({ required: true,enum:ClassEnum })
    standard: string;
  
    @Prop({ required: true })
    section: string;

    @Prop({ required: true })
    strength:number;

    @Prop({ required: true })
    classTeacher: string;   
}

export const ClassSchema = SchemaFactory.createForClass(Class);

export const ClassSchemaMoongose={name:Class.name,schema:ClassSchema};
