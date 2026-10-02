"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFotoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_foto_dto_1 = require("./create-foto.dto");
class UpdateFotoDto extends (0, swagger_1.PartialType)(create_foto_dto_1.CreateFotoDto) {
}
exports.UpdateFotoDto = UpdateFotoDto;
//# sourceMappingURL=update-foto.dto.js.map