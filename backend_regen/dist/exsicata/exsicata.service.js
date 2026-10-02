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
exports.ExsicataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exsicata_entity_1 = require("./entities/exsicata.entity");
let ExsicataService = class ExsicataService {
    exsicataRepo;
    constructor(exsicataRepo) {
        this.exsicataRepo = exsicataRepo;
    }
    findAll() {
        return this.exsicataRepo.find({ relations: ['acesso'] });
    }
    async findOne(id) {
        const exsicata = await this.exsicataRepo.findOne({
            where: { id },
            relations: ['acesso'],
        });
        if (!exsicata)
            throw new common_1.NotFoundException('Registro de exsicata não encontrado.');
        return exsicata;
    }
    create(data) {
        const exsicata = this.exsicataRepo.create(data);
        return this.exsicataRepo.save(exsicata);
    }
    async update(id, data) {
        const exsicata = await this.findOne(id);
        Object.assign(exsicata, data);
        return this.exsicataRepo.save(exsicata);
    }
    async remove(id) {
        const exsicata = await this.findOne(id);
        return this.exsicataRepo.remove(exsicata);
    }
};
exports.ExsicataService = ExsicataService;
exports.ExsicataService = ExsicataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exsicata_entity_1.Exsicata)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExsicataService);
//# sourceMappingURL=exsicata.service.js.map