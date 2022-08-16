import { Body, Controller, Get, ParseBoolPipe, Post, Query, UsePipes } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { JoiValidationPipe } from './pipes/validation.pipe'
import { createUserSchema } from './schemas/CreateUser.schema'

@Controller('users')
export class UsersController {

  /**
   * Los pipes pueden transformar o validar datos dependiendo
   * del caso.
   * Los parametos que llegan a travez de HTTP
   * llegan en formato de texto, es por eso que se haya la necesitad
   * de poder parsear los datos dependiendo del tipo de dato que sea necesrio
   */
  @Get()
  find(@Query('id', ParseBoolPipe) id: boolean) {
    return typeof id.valueOf()
  }

  /**
   * Joivalidation es un custom pipe de validacion que se encarga de validar
   * los datos de entrada en el cuerpo de la funcion
   * Joi recibe schema para validar los datos, en caso 
   * de que no se cumpla maneja un error HTTPException
   */
  @Post('c')
  @UsePipes(new JoiValidationPipe(createUserSchema))
  create(@Body() userDto: UserDto) {
    return userDto
  }
}
