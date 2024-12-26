import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmpServiceService } from '../empList/emp-service.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  empForm : FormGroup;  
  message : String = "";


  constructor(private formbuilder : FormBuilder, private service : EmpServiceService)  {
    this.empForm = formbuilder.group({
      empName : new FormControl(),
      empMobNumber : new FormControl(),
      empEMailId : new FormControl(),
      empRole : new FormControl(),
    });
  }

  empSave() {
    this.service.save(this.empForm).subscribe(
      r1 => {
        this.message = r1.message;
      }
    )
    this.empForm.reset();
  }
}
