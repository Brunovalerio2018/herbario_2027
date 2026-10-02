"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swagConfig = new swagger_1.DocumentBuilder()
    .setTitle('Plataforma Integrada BAG + CNPO Brunbapa')
    .setDescription('API para gestão, integração e consulta do Banco Ativo de Germoplasma de Forrageiras e Herbário CNPO.')
    .setVersion('1.0')
    .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
}, 'access-token')
    .build();
//# sourceMappingURL=swagger-config.js.map