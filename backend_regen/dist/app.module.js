"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = __importDefault(require("./db/ormconfig"));
const especie_module_1 = require("./especie/especie.module");
const acesso_module_1 = require("./acesso/acesso.module");
const coleta_module_1 = require("./coleta/coleta.module");
const exsicata_module_1 = require("./exsicata/exsicata.module");
const bag_module_1 = require("./bag/bag.module");
const alelo_module_1 = require("./alelo/alelo.module");
const foto_module_1 = require("./foto/foto.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ormconfig_1.default.options,
            }),
            especie_module_1.EspecieModule,
            acesso_module_1.AcessoModule,
            coleta_module_1.ColetaModule,
            exsicata_module_1.ExsicataModule,
            bag_module_1.BagModule,
            alelo_module_1.AleloModule,
            foto_module_1.FotoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map