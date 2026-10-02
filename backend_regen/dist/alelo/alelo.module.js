"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AleloModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alelo_entity_1 = require("./entities/alelo.entity");
const alelo_service_1 = require("./alelo.service");
const alelo_controller_1 = require("./alelo.controller");
let AleloModule = class AleloModule {
};
exports.AleloModule = AleloModule;
exports.AleloModule = AleloModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alelo_entity_1.Alelo])],
        controllers: [alelo_controller_1.AleloController],
        providers: [alelo_service_1.AleloService],
        exports: [alelo_service_1.AleloService],
    })
], AleloModule);
//# sourceMappingURL=alelo.module.js.map