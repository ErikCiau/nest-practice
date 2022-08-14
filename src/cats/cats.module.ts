import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { IndentifierModule } from '../indentifier/indentifier.module'

@Module({
  controllers: [CatsController],
  // 👀 Se injecta el modulo, no el servicio a usar
  imports: [IndentifierModule]
})
export class CatsModule { }
