"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const acesso_entity_1 = require("./entities/acesso.entity");
const acesso_service_1 = require("./acesso.service");
const acesso_controller_1 = require("./acesso.controller");
let AcessoModule = class AcessoModule {
};
exports.AcessoModule = AcessoModule;
exports.AcessoModule = AcessoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([acesso_entity_1.Acesso])],
        controllers: [acesso_controller_1.AcessoController],
        providers: [acesso_service_1.AcessoService],
        exports: [acesso_service_1.AcessoService],
    })
], AcessoModule);
//# sourceMappingURL=acesso.module.js.map