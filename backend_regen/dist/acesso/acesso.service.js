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
exports.AcessoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const acesso_entity_1 = require("./entities/acesso.entity");
let AcessoService = class AcessoService {
    acessoRepo;
    constructor(acessoRepo) {
        this.acessoRepo = acessoRepo;
    }
    findAll() {
        return this.acessoRepo.find({
            relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
        });
    }
    async findOne(id) {
        const acesso = await this.acessoRepo.findOne({
            where: { id },
            relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
        });
        if (!acesso)
            throw new common_1.NotFoundException('Acesso não encontrado.');
        return acesso;
    }
    async findByNumero(numeroAcesso) {
        const acesso = await this.acessoRepo.findOne({
            where: { numeroAcesso },
            relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
        });
        if (!acesso)
            throw new common_1.NotFoundException(`Acesso ${numeroAcesso} não encontrado.`);
        return acesso;
    }
    create(data) {
        const acesso = this.acessoRepo.create(data);
        return this.acessoRepo.save(acesso);
    }
    async update(id, data) {
        const acesso = await this.findOne(id);
        Object.assign(acesso, data);
        return this.acessoRepo.save(acesso);
    }
    async remove(id) {
        const acesso = await this.findOne(id);
        return this.acessoRepo.remove(acesso);
    }
};
exports.AcessoService = AcessoService;
exports.AcessoService = AcessoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(acesso_entity_1.Acesso)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AcessoService);
//# sourceMappingURL=acesso.service.js.map