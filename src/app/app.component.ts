import { Component, DoCheck, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/authentification.service';
import { Customer } from './model/customer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, DoCheck {
  title = 'traingings-front-app';
  customer:Customer|undefined
  name = ""
  display = false
  loggin = true
  logout=false

  constructor(private customerService: CustomerService,
  ) {
  this.customer = new Customer("unknown", "","","","","","")
  }

  ngOnInit(): void {
    this.showName()
  }
  ngDoCheck(): void {
    this.showName()
  }

  showName() {
    this.name= this.customerService.getCustomerFromStorage().name
    if (this.name != "unknown") {
      this.display = true
      this.loggin = false
      this.logout=true
    }
  }
  disconnect() {
    this.customerService.removeCustomerFromStorage()
  }

}
