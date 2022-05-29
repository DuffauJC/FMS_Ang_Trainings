import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/authentification.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit, DoCheck {

    data = {
        name: "",
        firstName: "",
        address: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""
    }
    name: string
    firstName: string
    address: string
    email: string
    phoneNumber: string
    password: string
    role: string

    display = false

    constructor(public cartService: CartService,
        private router: Router,
        private customerService: CustomerService) {
        this.name = ""
        this.firstName = ""
        this.address = ""
        this.email = ""
        this.phoneNumber = ""
        this.password = ""
        this.role = "customer"

    }

    ngDoCheck(): void {
    }
    ngOnInit(): void {

    }

    onSaveCustomer(form: NgForm) {
        //console.log(form.value)

        this.display = true

        this.data.name = form.value.name
        this.data.firstName = form.value.firstName
        this.data.address = form.value.address
        this.data.email = form.value.email
        this.data.phoneNumber = form.value.phoneNumber
        this.data.role = this.role
        
        // encode password
        this.data.password = window.btoa(form.value.password);
       

        this.customerService.postCustomer(this.data)
        setTimeout(() => {
            this.display = false
            this.router.navigateByUrl('home')
        }, 1500)

    }
}