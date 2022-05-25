import { Component, OnInit, DoCheck } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/authentification.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit, DoCheck {
    //myForm: FormGroup
    customer: Customer | undefined
    display = false

    constructor(public cartService: CartService,
        private router: Router,
        private customerService: CustomerService) {

        // let customer = this.cartService.getCustomer()
        // this.myForm = new FormGroup({
        //     name: new FormControl(customer.name),
        //     firstName: new FormControl(customer.firstName),
        //     address: new FormControl(customer.address),
        //     phoneNumber: new FormControl(customer.phoneNumber),
        //     email: new FormControl(customer.email),
        // })
    }

    ngDoCheck(): void {
    }
    ngOnInit(): void {

    }

    onSaveCustomer(customer: Customer) {
        this.display = true

        this.customerService.postCustomer(customer)
        setInterval(() => {
            this.display = false
            this.router.navigateByUrl('home')
        }, 1500)

        // if (form.valid) {

        // }


    }
}