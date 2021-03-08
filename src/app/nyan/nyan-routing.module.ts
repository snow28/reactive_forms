import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NyanComponent } from './nyan.component';

const routes: Routes = [{ path: '', component: NyanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NyanRoutingModule { }
