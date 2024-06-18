import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";


export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    fathername: string;

    
    @IsString()
    @IsNotEmpty()
    mothername: string;

    @IsNumber()
    @Length(10)
    @IsNotEmpty()
    contactnumber: number;


    @IsEmail()
    email:string;
}
