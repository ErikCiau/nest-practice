import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  /** Exepciones integradas */
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  HttpVersionNotSupportedException,
  PayloadTooLargeException,
  UnsupportedMediaTypeException,
  UnprocessableEntityException,
  InternalServerErrorException,
  NotImplementedException,
  ImATeapotException,
  MethodNotAllowedException,
  BadGatewayException,
  ServiceUnavailableException,
  GatewayTimeoutException,
  PreconditionFailedException,
  UseFilters
} from '@nestjs/common';
import { CustomError } from './errors/CustomError';
import { HttpExceptionFilter } from './filters/http-exception.filter'
/**
 * Nest tiene una clase generica para el manejo de exepciones http
 * llamada "HttpException".
 * Si se requiere usar exepciones personalizadas se recomienda que
 * estas extiendan de la clase "HttpException".
 */
@Controller('posts')
@UseFilters(new HttpExceptionFilter())
export class PostsController {

  @Get('exeption')
  find() {
    throw new HttpException('Mensaje', HttpStatus.BAD_REQUEST)
  }

  /**
   * Exepciones integradas en nest
   */

  @Get('badrequest')
  badRequest() {
    throw new BadRequestException()
  }

  @Get('unauthorized')
  unauthorized() {
    throw new UnauthorizedException()
  }

  @Get('notfound')
  notFound() {
    throw new NotFoundException()
  }

  @Get('forbidden')
  forbidden() {
    throw new ForbiddenException()
  }

  @Get('notacceptable')
  notAceptable() {
    throw new NotAcceptableException()
  }

  @Get('custom')
  customError() {
    throw new CustomError()
  }
  // ...

  /**
   * Para usar nuestros filtros personalizados,
   * debemos usar el decorador @useFilters
   */
  @Get('filters')
  usigFilters() {
    throw new HttpException('', 201)
  }
}
