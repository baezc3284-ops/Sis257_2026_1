import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parcial1 } from './entities/Parcial1.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Parcial1Service {
  constructor(@InjectRepository(Parciales1) private artistaRepository: Repository<Artista>) {}
  
  async create(createParcial1Dto: CreateParcial1Dto): Promise<Parcial1> {
    let parcial1 = await this.parcial1Repository.findOneBy({
      nombre: createParcial1Dto.nombre.trim(),
      nacionalidad: createParcaial1Dto.nacionalidad.trim(),
    });
    if (Parcial1) throw new ConflictException('El parcial ya existe');
    
    parcial1 = new Parcial1();
    Object.assign(parcial1, createParcial1Dto);
    return this.parcial1Repository.save(parcial1);  
  }

  async findAll(): Promise<Parcial1[]> {
    return this.Parcial1Repository.find({order: {nombre: 'ASC'} });
  }

  async findOne(id: number): Promise<Artista> {
    const Parcial1 = await this.aParcial1Repository.findOneBy({ id});
    if (!Parcial1) throw new NotFoundException('El parcial1no existe');
    return Parcial1;
  }

  async update(id: number, updateArtistaDto: Updateparcial1Dto): Promise<Parcial1> {
    const parcial1 = await this.findOne(id);
    Object.assign(artista, updateparcial1Dto);
    return this.artistaRepository.save(artista);
  }


  async remove(id: number): Promise<Parcial1> {
    const parcicial1 = await this.findOne(id);
    return this.Parcial1Repository.softRemove(Para);
  }
}
