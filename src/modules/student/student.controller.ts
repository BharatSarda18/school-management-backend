import { Controller, UseInterceptors, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, UploadedFile } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Workbook } from 'exceljs';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as ExcelJS from 'exceljs';
import { extname } from 'path';
import { UploadFileDto } from './dto/upload.dto';
import { capitalizeFirstLetter } from 'src/common/helper/helper.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Post('multi')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))

  async uploadStudents(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(file.path);
      const worksheet = workbook.getWorksheet(1);

      const students = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header row
        // Assuming row.values.slice(1) returns an array of CellValue or string
        const [name, age, fathername, mothername, contactnumber, className] = Object.values(row.values) as string[];

        const student = {
          name,
          age: +age,
          fathername,
          mothername,
          contactnumber,
          class: className,
        };
        students.push(student);
      });

      console.log(students, 'students');

      const savedStudents = await this.studentService.createMany(students);
      res.status(201).json(savedStudents);
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error processing the file.');
    }
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get('download-sample')
  async downloadSample(@Res() res: Response) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Students');

    const newschema = await this.studentService.getSchema();
    const excelColumns = newschema.map(e => { return { 'header': e, 'key': e } })

    worksheet.columns = excelColumns;
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'studentsSample.xlsx',
    );
    await workbook.xlsx.write(res);
    res.end();
  }

  @Get('download')
  async download(@Res() res: Response) {
    const workSheetdata = await this.studentService.findAll();
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Students');

    const newschema = await this.studentService.getSchema();
    const excelColumns = newschema.map(e => { return { 'header': capitalizeFirstLetter(e), 'key': e } })

    console.log(excelColumns,'excelColumns')
    worksheet.columns = excelColumns;
    workSheetdata.forEach((student) => {

      let row={};
      newschema.forEach(e => row[e]=student[e])
      worksheet.addRow(row);
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'students.xlsx',
    );

    await workbook.xlsx.write(res);
    res.end();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }



}
