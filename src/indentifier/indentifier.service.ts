import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class IndentifierService {
  generate(): string {
    return v4()
  }
}
