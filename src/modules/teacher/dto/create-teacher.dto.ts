import { IS_LENGTH, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateTeacherDto {

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsNumber()
    @IsNotEmpty()
    @Length(10)
    contactnumber: number;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsBoolean()
    isClassTeacher: boolean;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    classOfTeacher: string;
}
