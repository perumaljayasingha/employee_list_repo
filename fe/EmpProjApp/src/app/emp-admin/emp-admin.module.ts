import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpAdminRoutingModule } from './emp-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { EmpListComponent } from '../empAdmin/emp-list/emp-list.component';
import { EmpListReadComponent } from '../empAdmin/emp-list-read/emp-list-read.component';


@NgModule({
  declarations: [
    EmpListComponent,
    EmpListReadComponent
  ],
  imports: [
    CommonModule,
    EmpAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()]
})
export class EmpAdminModule { }
