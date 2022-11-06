import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetAdviceComponent } from './set-advice/set-advice.component';
import { StudentRoutingModule } from './student-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListAdvicesComponent } from './list-advices/list-advices.component';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SetAdviceComponent,
    ListAdvicesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  
})
export class StudentModule { }
