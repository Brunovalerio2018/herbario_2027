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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acesso = void 0;
const typeorm_1 = require("typeorm");
const especie_entity_1 = require("../../especie/entities/especie.entity");
const coleta_entity_1 = require("../../coleta/entities/coleta.entity");
const exsicata_entity_1 = require("../../exsicata/entities/exsicata.entity");
const foto_entity_1 = require("../../foto/entities/foto.entity");
const bag_entity_1 = require("../../bag/entities/bag.entity");
const alelo_entity_1 = require("../../alelo/entities/alelo.entity");
let Acesso = class Acesso {
    id;
    numeroAcesso;
    situacao;
    observacoes;
    especie;
    coleta;
    exsicata;
    bag;
    alelo;
    fotos;
    createdAt;
    updatedAt;
};
exports.Acesso = Acesso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Acesso.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_acesso', unique: true, length: 50 }),
    __metadata("design:type", String)
], Acesso.prototype, "numeroAcesso", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Acesso.prototype, "situacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Acesso.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => especie_entity_1.Especie, (especie) => especie.acessos, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'especie_id' }),
    __metadata("design:type", especie_entity_1.Especie)
], Acesso.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coleta_entity_1.Coleta, (coleta) => coleta.acesso, { cascade: true }),
    __metadata("design:type", coleta_entity_1.Coleta)
], Acesso.prototype, "coleta", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exsicata_entity_1.Exsicata, (exsicata) => exsicata.acesso, { cascade: true }),
    __metadata("design:type", exsicata_entity_1.Exsicata)
], Acesso.prototype, "exsicata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bag_entity_1.Bag, (bag) => bag.acesso, { cascade: true }),
    __metadata("design:type", bag_entity_1.Bag)
], Acesso.prototype, "bag", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => alelo_entity_1.Alelo, (alelo) => alelo.acesso, { cascade: true }),
    __metadata("design:type", alelo_entity_1.Alelo)
], Acesso.prototype, "alelo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => foto_entity_1.Foto, (foto) => foto.acesso, { cascade: true }),
    __metadata("design:type", Array)
], Acesso.prototype, "fotos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Acesso.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Acesso.prototype, "updatedAt", void 0);
exports.Acesso = Acesso = __decorate([
    (0, typeorm_1.Entity)('acessos')
], Acesso);
//# sourceMappingURL=acesso.entity.js.map