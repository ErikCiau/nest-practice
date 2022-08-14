import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { IndentifierModule } from '../indentifier/indentifier.module'
import { LoggerMiddleware } from './cats.middleware'

@Module({
  controllers: [CatsController],
  // 👀 Se injecta el modulo, no el servicio a usar
  imports: [IndentifierModule]
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController)
  }
}
