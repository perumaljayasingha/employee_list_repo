import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from '../empAdmin/emp-list/emp-list.component';
import { EmpListReadComponent } from '../empAdmin/emp-list-read/emp-list-read.component';

const routes: Routes = [
  {path: "addEmps", component : EmpListComponent},
  {path: "readEmps", component : EmpListReadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpAdminRoutingModule { }
