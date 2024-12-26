import { Component } from '@angular/core';
import { EmpListReadSerService } from '../empListRead/emp-list-read-ser.service';

@Component({
  selector: 'app-emp-list-read',
  templateUrl: './emp-list-read.component.html',
  styleUrl: './emp-list-read.component.css'
})
export class EmpListReadComponent {

  employeesList : any[] = [];
  singleEmp : any;
  message : String = "";
  readBox : boolean = true;
  viewBox : boolean = false;

  constructor(private readService : EmpListReadSerService)  {
  }

  readAll() {
     this.readService.read().subscribe(
      r1 => {
        this.employeesList = r1;
        this.message = r1.message;
        this.readBox = true;
        this.viewBox = false;
      }
     )
  }

  onDeleteEmp(id : any) {
    this.readService.delete(id).subscribe(
      response => {
          console.log("delete successful", response);
          this.readAll();
      },
      error => {
        console.error("Error deleting emp");
        this.message = "failed to deleting Emp";
      }
    )
  }

  ngOnInit(){
    this.readAll();
  }

  onViewEmp(id : any) {
    this.readService.view(id).subscribe(
      r1 => {
        this.singleEmp = r1;
        this.message = r1.message;
        this.readBox = false;
        this.viewBox = true;
      }
     )
  }
}
