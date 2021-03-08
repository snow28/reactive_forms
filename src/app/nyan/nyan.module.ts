import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NyanRoutingModule } from './nyan-routing.module';
import { NyanComponent } from './nyan.component';
import {TestService2Service} from '../test-service-2.service';

import {AppConfigToken, dataToProvide } from '../app.config';

@NgModule({
  declarations: [NyanComponent],
  imports: [
    CommonModule,
    NyanRoutingModule
  ],
  providers: [TestService2Service , { provide: AppConfigToken, useValue: dataToProvide }]
})
export class NyanModule {
  constructor() {
  }
}
