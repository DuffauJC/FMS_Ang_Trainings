import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'traingings-front-app';
  name = ""
  display = false
  

  constructor(private customerService: CustomerService,
  ) {

  }

  ngOnInit(): void {
    this.name = this.customerService.getCustomerFromStorage().firstName
    if (this.name !=null) {
      this.display=true
    }
  }

}
