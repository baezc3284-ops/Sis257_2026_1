import { Parcial1 } from './entities/Parcial1.entity';
import { Repository } from 'typeorm';
export declare class Parcial1Service {
    private artistaRepository;
    constructor(artistaRepository: Repository<Artista>);
    create(createParcial1Dto: CreateParcial1Dto): Promise<Parcial1>;
    findAll(): Promise<Parcial1[]>;
    findOne(id: number): Promise<Artista>;
    update(id: number, updateArtistaDto: Updateparcial1Dto): Promise<Parcial1>;
    remove(id: number): Promise<Parcial1>;
}
