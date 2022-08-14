import { Module, Global } from '@nestjs/common';
import { SharedService } from './shared.service';

@Global()
@Module({
  providers: [SharedService],
  // es necesario exportar el servicio (en este caso) para que este disponible para su injeccion
  exports: [SharedService]
})
export class SharedModule { }
