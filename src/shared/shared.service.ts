import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  public getGreet(name: string): string {
    return `Hello, ${name}`
  }
}
