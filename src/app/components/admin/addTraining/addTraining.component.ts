import { Component, OnInit,DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/authentification.service';
import { TrainingsService } from 'src/app/services/trainings.service';


@Component({
    selector: 'app-addtraining',
    templateUrl: 'addTraining.component.html'
})

export class AddTrainingComponent implements OnInit,DoCheck {
    display = false
    problemAdmin = false
    data = {
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        imgURL: "",
    }
    name: string
    description: string
    price: number
    quantity: number
    imgURL: string

    constructor(private trainingsService: TrainingsService,
        private router: Router, public customerService: CustomerService
    ) {
        this.name = ""
        this.description = ""
        this.price = 0
        this.quantity = 1
        this.imgURL = "assets/img/unknown.png"
    }

    ngOnInit() {
        this.name = ""
        this.description = ""
        this.price = 0
        this.quantity = 1
        this.imgURL = "assets/img/unknown.png"
    }
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
    onSaveTraining(form: NgForm) {

        //console.log(form.value)

        this.data.name = form.value.name
        this.data.description = form.value.description
        this.data.price = form.value.price
        this.data.quantity = this.quantity
        this.data.imgURL = form.value.imgURL

        document.getElementById('modal-btn')?.classList.toggle("is_active")

        this.trainingsService.postTraining(this.data)
        this.display = true
        setTimeout(() => {
            this.display = false
            document.getElementById('modal-btn')?.classList.toggle("is_active")
            this.ngOnInit()
        }, 1500)
    }
}