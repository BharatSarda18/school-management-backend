import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { getConfiguration } from './config/configration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[getConfiguration],
      envFilePath: [`env/.env.${process.env.NODE_ENV}`],
      expandVariables: true,
    }),
    
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
