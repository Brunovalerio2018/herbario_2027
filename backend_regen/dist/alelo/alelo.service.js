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
exports.AleloService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alelo_entity_1 = require("./entities/alelo.entity");
let AleloService = class AleloService {
    aleloRepo;
    constructor(aleloRepo) {
        this.aleloRepo = aleloRepo;
    }
    findAll() {
        return this.aleloRepo.find({ relations: ['acesso'] });
    }
    async findOne(id) {
        const alelo = await this.aleloRepo.findOne({
            where: { id },
            relations: ['acesso'],
        });
        if (!alelo)
            throw new common_1.NotFoundException('Registro de integração Alelo não encontrado.');
        return alelo;
    }
    create(data) {
        const alelo = this.aleloRepo.create(data);
        return this.aleloRepo.save(alelo);
    }
    async update(id, data) {
        const alelo = await this.findOne(id);
        Object.assign(alelo, data);
        return this.aleloRepo.save(alelo);
    }
    async remove(id) {
        const alelo = await this.findOne(id);
        return this.aleloRepo.remove(alelo);
    }
};
exports.AleloService = AleloService;
exports.AleloService = AleloService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alelo_entity_1.Alelo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AleloService);
//# sourceMappingURL=alelo.service.js.map