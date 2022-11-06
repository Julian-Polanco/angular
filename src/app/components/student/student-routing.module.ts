import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetAdviceComponent } from './set-advice/set-advice.component';
import { ListAdvicesComponent } from './list-advices/list-advices.component';

const routes: Routes = [
  {
    path: 'set-advice',
    component: SetAdviceComponent,
  },
  {
    path: 'list-advices',
    component: ListAdvicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
