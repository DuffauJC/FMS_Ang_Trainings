import { Component, OnInit, DoCheck } from '@angular/core';
import { CustomerService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: 'homeAdmin.component.html'
})

export class HomeAdminComponent implements OnInit, DoCheck {
    problemAdmin = false
    constructor(private router: Router, public customerService: CustomerService) { }

    ngOnInit() { }

    ngDoCheck(): void {
        this.verifySession()
    }

    verifySession() {
        let customer = this.customerService.getCustomerFromStorage()
        // console.log(customer)
        if (customer.role != "admin") {
            this.problemAdmin = true
            setTimeout(() => {
                this.problemAdmin = false
                this.router.navigateByUrl('login')
            }, 1500)
        }
    }
    addTraining() {
        this.router.navigateByUrl('addTraining')
    }
    showTrainings() {
        this.router.navigateByUrl('listTrainings')
    }

}