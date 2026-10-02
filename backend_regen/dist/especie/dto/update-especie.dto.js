"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEspecieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_especie_dto_1 = require("./create-especie.dto");
class UpdateEspecieDto extends (0, swagger_1.PartialType)(create_especie_dto_1.CreateEspecieDto) {
}
exports.UpdateEspecieDto = UpdateEspecieDto;
//# sourceMappingURL=update-especie.dto.js.map