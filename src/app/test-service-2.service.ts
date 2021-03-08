import { Injectable } from '@angular/core';
import { NyanModule } from './nyan/nyan.module';
@Injectable()
export class TestService2Service {

  constructor() { }

  myFunction(): void {
    console.log('test');
  }
}
