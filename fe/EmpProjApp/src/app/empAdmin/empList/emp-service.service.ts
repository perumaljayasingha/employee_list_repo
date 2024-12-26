import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  url : string = "http://localhost:9090/emp"
  constructor(private client : HttpClient) {   }

  save(empForm : FormGroup)  {
    return this.client.post<any>(this.url + '/save', empForm.value);
  }

}
