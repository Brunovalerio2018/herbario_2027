import { DocumentBuilder } from '@nestjs/swagger';

export const swagConfig = new DocumentBuilder()
  .setTitle('Plataforma Integrada BAG + CNPO Brunbapa')
  .setDescription(
    'API para gestão, integração e consulta do Banco Ativo de Germoplasma de Forrageiras e Herbário CNPO.',
  )
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    'access-token',
  )
  .build();
