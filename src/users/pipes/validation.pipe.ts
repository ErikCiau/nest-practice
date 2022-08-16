import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { ObjectSchema } from 'joi'

/**
 * Los pipes pueden tanto validar la informacion, como transformala
 * la gracia de esto, es que tienen acceso al contexto de su implementacion,
 * es decir pueden acceder a las propiedades donde son declaradas.
 * Nest incluye un propio pipe de validacion de dtos, el cual funciona en 
 * conjunto con la libreria `class-validator`
 * el pipe que utiza se llama `ValidationPipe`
 */
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(
    private schema: ObjectSchema
  ) { }
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value)
    if (error) {
      throw new BadRequestException(error.message)
    }
    return value
  }
}