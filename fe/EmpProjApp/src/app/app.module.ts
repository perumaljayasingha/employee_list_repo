import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmpListComponent } from './empAdmin/emp-list/emp-list.component';
import { EmpAdminModule } from './emp-admin/emp-admin.module';
import { EmpDeleteComponent } from './empAdmin/emp-delete/emp-delete.component';
// import { EmpListReadComponent } from './empAdmin/emp-list-read/emp-list-read.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDeleteComponent,
    // EmpListReadComponent,
    // EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
