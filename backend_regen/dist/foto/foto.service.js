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
exports.FotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const foto_entity_1 = require("./entities/foto.entity");
let FotoService = class FotoService {
    fotoRepo;
    constructor(fotoRepo) {
        this.fotoRepo = fotoRepo;
    }
    findAll() {
        return this.fotoRepo.find({ relations: ['acesso'] });
    }
    async findOne(id) {
        const foto = await this.fotoRepo.findOne({
            where: { id },
            relations: ['acesso'],
        });
        if (!foto)
            throw new common_1.NotFoundException('Foto não encontrada.');
        return foto;
    }
    create(data) {
        const foto = this.fotoRepo.create(data);
        return this.fotoRepo.save(foto);
    }
    async update(id, data) {
        const foto = await this.findOne(id);
        Object.assign(foto, data);
        return this.fotoRepo.save(foto);
    }
    async remove(id) {
        const foto = await this.findOne(id);
        return this.fotoRepo.remove(foto);
    }
};
exports.FotoService = FotoService;
exports.FotoService = FotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(foto_entity_1.Foto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FotoService);
//# sourceMappingURL=foto.service.js.map