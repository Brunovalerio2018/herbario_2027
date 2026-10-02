"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_coleta_dto_1 = require("./create-coleta.dto");
class UpdateColetaDto extends (0, swagger_1.PartialType)(create_coleta_dto_1.CreateColetaDto) {
}
exports.UpdateColetaDto = UpdateColetaDto;
//# sourceMappingURL=update-coleta.dto.js.map