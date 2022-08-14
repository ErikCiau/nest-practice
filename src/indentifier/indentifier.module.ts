import { Module } from '@nestjs/common';
import { IndentifierService } from './indentifier.service';

/**
 * Para exportar un servicio (en este caso)
 * es necesario usar la matriz "exports"
 * para ser compartido entre los demás modulos
 */
@Module({
  providers: [IndentifierService],
  exports: [
    IndentifierService
  ]
})
export class IndentifierModule { }
