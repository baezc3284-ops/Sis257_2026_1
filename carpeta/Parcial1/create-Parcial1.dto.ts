import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, maxLength } from "class-validator";

export class CreateArtistaDto {
    @IsNotEmpty({ message: 'El nombre es obligatorio'})
    @IsString({message: 'El nombre debe ser una cadena de texto'})     
    @MaxLength(50,{message: 'El nombre no puede tener mas de 50 caracteres'})
    @Transform(({ value}): string | undefined => (typeof value === 'string' ? value.trim() : value)) 
    readonly nombre: string | undefined;
   
    @IsNotEmpty({ message: 'La nacionalidad es obligatoria'})
    @IsString({message: 'La nacionalidad debe ser una cadena de texto'})     
    @MaxLength(50,{message: 'La nacionalidad no puede tener mas de 50 caracteres'})
    @Transform(({ value}): string | undefined => (typeof value === 'string' ? value.trim() : value)) 
    readonly nacionalidad: string | undefined;
    
    
     @IsNotEmpty({ message: 'La fotografia es obligatorio'})
    @IsString({message: 'La fotografia debe ser una cadena de texto'})     
    @MaxLength(50,{message: 'La fotografia no puede tener mas de 1000 caracteres'})
    @Transform(({ value}): string | undefined => (typeof value === 'string' ? value.trim() : value)) 
    readonly fotografia: string | undefined;
    
}
