import { Component, OnInit, DoCheck } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit,DoCheck {
    customer: Customer | undefined
    name = ""
    firstname = ""
    address = ""
    phoneNumber = ""
    email = ""
    
    constructor(public cartService: CartService) { }
    ngDoCheck(): void {
    }
    ngOnInit() {

    }

    onSaveCustomer(customer: Customer) {
          //console.log(customer)
        this.cartService.setCustomer(customer)
    }
}