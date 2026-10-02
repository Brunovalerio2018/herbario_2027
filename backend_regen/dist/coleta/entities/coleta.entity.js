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
exports.Coleta = void 0;
const typeorm_1 = require("typeorm");
const acesso_entity_1 = require("../../acesso/entities/acesso.entity");
let Coleta = class Coleta {
    id;
    data;
    local;
    municipio;
    estado;
    latitude;
    longitude;
    geom;
    coletor;
    observacoes;
    acesso;
};
exports.Coleta = Coleta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Coleta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Coleta.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Coleta.prototype, "local", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Coleta.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2, nullable: true }),
    __metadata("design:type", String)
], Coleta.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], Coleta.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 11, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], Coleta.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'geometry',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    }),
    __metadata("design:type", String)
], Coleta.prototype, "geom", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Coleta.prototype, "coletor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Coleta.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => acesso_entity_1.Acesso, (acesso) => acesso.coleta, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'acesso_id' }),
    __metadata("design:type", acesso_entity_1.Acesso)
], Coleta.prototype, "acesso", void 0);
exports.Coleta = Coleta = __decorate([
    (0, typeorm_1.Entity)('coletas')
], Coleta);
//# sourceMappingURL=coleta.entity.js.map