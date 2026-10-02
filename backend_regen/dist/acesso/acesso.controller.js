"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const acesso_service_1 = require("./acesso.service");
let AcessoController = class AcessoController {
    acessoService;
    constructor(acessoService) {
        this.acessoService = acessoService;
    }
    findAll() {
        return this.acessoService.findAll();
    }
    findOne(id) {
        return this.acessoService.findOne(id);
    }
    findByNumero(numeroAcesso) {
        return this.acessoService.findByNumero(numeroAcesso);
    }
    create(data) {
        return this.acessoService.create(data);
    }
    update(id, data) {
        return this.acessoService.update(id, data);
    }
    remove(id) {
        return this.acessoService.remove(id);
    }
};
exports.AcessoController = AcessoController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os acessos com suas relações' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar acesso por ID (UUID)' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('codigo/:numeroAcesso'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar acesso pelo Código/Número de Acesso (Ex: PLANT0012)' }),
    __param(0, (0, common_1.Param)('numeroAcesso')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "findByNumero", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Cadastrar novo acesso no BAG' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar informações de um acesso' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um acesso' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "remove", null);
exports.AcessoController = AcessoController = __decorate([
    (0, swagger_1.ApiTags)('Acessos BAG'),
    (0, common_1.Controller)('acessos'),
    __metadata("design:paramtypes", [acesso_service_1.AcessoService])
], AcessoController);
//# sourceMappingURL=acesso.controller.js.map