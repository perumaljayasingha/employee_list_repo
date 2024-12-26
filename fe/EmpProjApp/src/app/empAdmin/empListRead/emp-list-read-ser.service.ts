import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmpListReadSerService {

  url : String = "http://localhost:9090/emp/";
  
  constructor(private readClient : HttpClient) { }

  read() {
    return this.readClient.get<any>(this.url + "readAll");
  }

  delete(id:any){
   return this.readClient.delete(this.url + id);
  }

  view(id : any)  {
    return this.readClient.get<any>(this.url + id);
  }
}
