"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const ormconfig_1 = __importDefault(require("./ormconfig"));
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            if (!ormconfig_1.default.isInitialized) {
                return await ormconfig_1.default.initialize();
            }
            return ormconfig_1.default;
        },
    },
];
//# sourceMappingURL=db.providers.js.map