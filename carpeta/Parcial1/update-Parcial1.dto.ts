import { PartialType } from '@nestjs/mapped-types';
import { CreateParcial1Dto } from './create-Parcial1.dto';

export class UpdateParcial1Dto extends PartialType(CreateParcial1Dto) {}
