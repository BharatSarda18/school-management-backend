import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swager-setup';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  app.enableCors({
    origin: configService.get<string | string[]>('application.cors.origin'),
    methods: configService.get<string>('application.cors.methods'),
  });

  setupSwagger(app);

  await app.listen(configService.get<number>('application.port'));
}
bootstrap();
