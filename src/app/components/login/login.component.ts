import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/authentification.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    customer: Customer | undefined
    data={email: "",
            password:""}

    email: string
    password: string
    display = false
    problemLogin = false

    constructor(private customerService: CustomerService,
     private router: Router) {
        this.email = ""
        this.password = ""
    }

    ngOnInit() {

    }

    onLogin(form: NgForm): void {
        //console.log(form.value);
        
        this.data.email = form.value.email
        this.data.password = form.value.password
        
        //console.log(this.data)
      
        let ok = this.customerService.veriFyLogin(this.data)
        if (ok) {
             this.display = true 
        } else {
            this.problemLogin=true
        }
        setInterval(() => {
            this.display = false
            this.problemLogin=false
            this.router.navigateByUrl('home')
        }, 1500)
    }


}