import { Component, OnInit, DoCheck } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit, DoCheck {
    customer: Customer | undefined
    display = false
    constructor(public cartService: CartService, private router: Router) { }
    ngDoCheck(): void {
    }
    ngOnInit() {

    }

    onSaveCustomer(customer: Customer) {
        this.display = true

        setInterval(() => {
            this.display = false
            this.cartService.setCustomer(customer)
            this.router.navigateByUrl('caddy')
        }, 1500)

    }
}