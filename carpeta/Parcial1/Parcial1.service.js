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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcial1Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Parcial1_entity_1 = require("./entities/Parcial1.entity");
const typeorm_2 = require("typeorm");
let Parcial1Service = class Parcial1Service {
    artistaRepository;
    constructor(artistaRepository) {
        this.artistaRepository = artistaRepository;
    }
    async create(createParcial1Dto) {
        let parcial1 = await this.parcial1Repository.findOneBy({
            nombre: createParcial1Dto.nombre.trim(),
            nacionalidad: createParcaial1Dto.nacionalidad.trim(),
        });
        if (Parcial1_entity_1.Parcial1)
            throw new common_1.ConflictException('El parcial ya existe');
        parcial1 = new Parcial1_entity_1.Parcial1();
        Object.assign(parcial1, createParcial1Dto);
        return this.parcial1Repository.save(parcial1);
    }
    async findAll() {
        return this.Parcial1Repository.find({ order: { nombre: 'ASC' } });
    }
    async findOne(id) {
        const Parcial1 = await this.aParcial1Repository.findOneBy({ id });
        if (!Parcial1)
            throw new common_1.NotFoundException('El parcial1no existe');
        return Parcial1;
    }
    async update(id, updateArtistaDto) {
        const parcial1 = await this.findOne(id);
        Object.assign(artista, updateparcial1Dto);
        return this.artistaRepository.save(artista);
    }
    async remove(id) {
        const parcicial1 = await this.findOne(id);
        return this.Parcial1Repository.softRemove(Para);
    }
};
exports.Parcial1Service = Parcial1Service;
exports.Parcial1Service = Parcial1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Parciales1)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], Parcial1Service);
//# sourceMappingURL=Parcial1.service.js.map