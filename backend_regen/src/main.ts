import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swagConfig } from './utils/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swagConfig);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      apisSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  app.enableCors({
    credentials: true,
  });

  const port = process.env.PORT || 3335;
  await app.listen(port);

  console.log('\n================================================--');
  console.log('🟢 [BACK-END STATUS: OK] - Servidor NestJS no ar!');
  console.log('🟢 [DATABASE STATUS: OK] - Migrations aplicadas e PostgreSQL conectado!');
  console.log(`🚀 API rodando na porta: http://localhost:${port}`);
  console.log(`📚 Swagger rodando em: http://localhost:${port}/docs`);
  console.log('================================================--\n');
}
bootstrap();
