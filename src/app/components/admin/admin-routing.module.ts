import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeRolComponent } from './change-rol/change-rol.component';

const routes: Routes = [
  {
    path: 'change-rol',
    component: ChangeRolComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
