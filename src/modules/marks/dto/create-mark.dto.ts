import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateMarkDto {
    @IsNotEmpty()
  @IsString()
   student: string;

  @IsNotEmpty()
  @IsString()
 subject: string;

  @IsNotEmpty()
  @IsString()
   examType: string;

  @IsNotEmpty()
  @IsNumber()
   marks: number;

  @IsNotEmpty()
  @IsNumber()
   maxMarks: number;

  @IsOptional()
  @IsString()
   remarks?: string;
}
