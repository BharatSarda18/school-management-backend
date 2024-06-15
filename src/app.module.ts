import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { getConfiguration } from './config/configration';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { ClassModule } from './modules/class/class.module';
import { MarksModule } from './modules/marks/marks.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[getConfiguration],
      envFilePath: [`env/.env.${process.env.NODE_ENV}`],
      expandVariables: true,
    }),
    DatabaseModule,
    StudentModule,
    TeacherModule,
    ClassModule,
    MarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
