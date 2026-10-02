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
exports.ColetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coleta_entity_1 = require("./entities/coleta.entity");
let ColetaService = class ColetaService {
    coletaRepo;
    constructor(coletaRepo) {
        this.coletaRepo = coletaRepo;
    }
    findAll() {
        return this.coletaRepo.find({ relations: ['acesso'] });
    }
    async findOne(id) {
        const coleta = await this.coletaRepo.findOne({
            where: { id },
            relations: ['acesso'],
        });
        if (!coleta)
            throw new common_1.NotFoundException('Registro de coleta não encontrado.');
        return coleta;
    }
    async create(data) {
        if (data.latitude && data.longitude) {
            data.geom = `ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326)`;
        }
        const coleta = this.coletaRepo.create(data);
        return this.coletaRepo.save(coleta);
    }
    async update(id, data) {
        const coleta = await this.findOne(id);
        if (data.latitude && data.longitude) {
            data.geom = `ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326)`;
        }
        Object.assign(coleta, data);
        return this.coletaRepo.save(coleta);
    }
    async remove(id) {
        const coleta = await this.findOne(id);
        return this.coletaRepo.remove(coleta);
    }
};
exports.ColetaService = ColetaService;
exports.ColetaService = ColetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coleta_entity_1.Coleta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ColetaService);
//# sourceMappingURL=coleta.service.js.map