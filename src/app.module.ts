import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SharedModule } from './shared/shared.module';
import { IndentifierModule } from './indentifier/indentifier.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CatsModule, SharedModule, IndentifierModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
