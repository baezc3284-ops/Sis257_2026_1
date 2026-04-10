import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity ('artista') 
export class Artista {
  @PrimaryGeneratedColumn('identity') 
  id: number;
 
  @Column('varchar', { length: 50})
 
  nombre : string;
 
  @Column('varchar', { length: 30})

nacionalidad: string;
  
@Column('varchar', { length: 255}) 

fotografia: string;
  

@CreateDateColumn({enumName: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({name: 'fecha_modificacion'})
  fechaModificacion: Date;

  @DeleteDateColumn({name: 'fecha_eliminacion'})
  fechaEliminacion: Date;

}



