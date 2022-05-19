import { Component, OnInit, DoCheck } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit {
    customer: Customer | undefined

    constructor(public cartService: CartService) { }
    // ngDoCheck(): void {
    //     this.customer = this.cartService.getCustomer()
    // }
    ngOnInit() {
this.cartService.getTheCustomer()
    }

    onSaveCustomer(customer: Customer) {
        //  console.log(customer)
        this.cartService.setCustomer(customer)
    }
}