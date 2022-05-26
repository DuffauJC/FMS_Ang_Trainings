import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit, DoCheck {
  dateOrder: Date = new Date();
  problemOrder = false
  constructor(public cartService: CartService,
    private router: Router,
    public customerService: CustomerService) { }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    this.verifySession()
  }
  onOrder() {
    if (confirm("Aujourd'hui c'est gratuit, merci de votre visite :)")) {
      this.cartService.clear();
      this.router.navigateByUrl('');
    }
  }
  verifySession() {
    let customer = this.customerService.getCustomerFromStorage()
    // console.log(customer)
    if (customer.firstName === "unknown") {
      this.problemOrder = true
      setTimeout(() => {
        this.problemOrder = false
        this.router.navigateByUrl('login')
      }, 1500)
    } else {
      //this.router.navigateByUrl('order')
    }

  }
}
