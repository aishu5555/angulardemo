import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseAPI = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http:HttpClient) {}
    bank(values) {
      let body={
        
      }
      return this.http.post('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI', 
   body,this.httpOptions).pipe(map(data => { })).subscribe(result => {
     console.log("1", result)
   })
 }

}
