import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { ClassSchemaMoongose } from 'src/schema/class/class.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([ClassSchemaMoongose])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
