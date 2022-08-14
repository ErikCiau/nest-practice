import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomError extends HttpException {
  constructor() {
    super('Error customizado', HttpStatus.CREATED)
  }
}