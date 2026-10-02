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
exports.Exsicata = void 0;
const typeorm_1 = require("typeorm");
const acesso_entity_1 = require("../../acesso/entities/acesso.entity");
let Exsicata = class Exsicata {
    id;
    numeroRegistro;
    herbario;
    data;
    responsavel;
    observacoes;
    acesso;
};
exports.Exsicata = Exsicata;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Exsicata.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_registro', length: 100, unique: true }),
    __metadata("design:type", String)
], Exsicata.prototype, "numeroRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, default: 'Herbário CNPO' }),
    __metadata("design:type", String)
], Exsicata.prototype, "herbario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Exsicata.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Exsicata.prototype, "responsavel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Exsicata.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => acesso_entity_1.Acesso, (acesso) => acesso.exsicata, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'acesso_id' }),
    __metadata("design:type", acesso_entity_1.Acesso)
], Exsicata.prototype, "acesso", void 0);
exports.Exsicata = Exsicata = __decorate([
    (0, typeorm_1.Entity)('exsicatas')
], Exsicata);
//# sourceMappingURL=exsicata.entity.js.map