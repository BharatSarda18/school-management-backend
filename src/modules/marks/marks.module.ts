import { Module } from '@nestjs/common';
import { MarksService } from './marks.service';
import { MarksController } from './marks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MarksSchemaMoongose } from 'src/schema/marks/marks.schema';

@Module({
  imports:[
    MongooseModule.forFeature([MarksSchemaMoongose]) 
  ],
  controllers: [MarksController],
  providers: [MarksService],
})
export class MarksModule {}
