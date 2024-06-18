import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Class } from '../class/class.schema';
import { ClassEnum } from 'src/common/constants/enum/class.enum';

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

    @Prop({ required: true, length: 10 })
    contactnumber: number;

    @Prop({ required:true })
    email:string;

    @Prop({ required: true,enum:ClassEnum })
    standard: string;

    @Prop({ required: true })
    section: string;

}

const StudentSchema = SchemaFactory.createForClass(Student);

StudentSchema.virtual('id').get(function (this: StudentDocument) {
    return `${this._id}`;
});

StudentSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
    }
});

// StudentSchema.set('toObject', {
//     virtuals: true,
//     versionKey: false,
//     transform: (doc, ret) => {
//         ret.id = ret._id;
//         delete ret._id;
//         return ret;
//     }
// });

export { StudentSchema };

export const StudentSchemaMoongose = { name: Student.name, schema: StudentSchema };
