import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
      .setTitle('ez-DeviceLib-文档')  //文档标题
      .setDescription('DeviceLib-api-说明')  //文档描述
      .setVersion('1.0')  //文档版本
      .addBasicAuth() //鉴权，可以输入token
      .build(); //创建

  //创建swagger
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  //启动swagger
  SwaggerModule.setup('doc', app, document);


  await app.listen(configService.get('port'));
}
bootstrap();
