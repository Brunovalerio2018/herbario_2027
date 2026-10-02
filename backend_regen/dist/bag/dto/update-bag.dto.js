"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBagDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bag_dto_1 = require("./create-bag.dto");
class UpdateBagDto extends (0, swagger_1.PartialType)(create_bag_dto_1.CreateBagDto) {
}
exports.UpdateBagDto = UpdateBagDto;
//# sourceMappingURL=update-bag.dto.js.map