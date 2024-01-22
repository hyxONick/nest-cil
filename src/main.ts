import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
      .setTitle('shopping_day Api')
      .setDescription('Api-description')
      .setVersion('1.1')
      .addBasicAuth() //auth，can input token
      .build();

  //创建swagger
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  //启动swagger
  SwaggerModule.setup('doc', app, document);


  await app.listen(configService.get('port'));
}
bootstrap();
