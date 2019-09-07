import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  constructor(public http:ServiceService) { 
   }

  ngOnInit() {
  }
  func(values) {
    console.log(values)
    this.http.bank(values).add(data => {
      console.log("1", data)
    })
  }
  
}
