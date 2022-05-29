import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
    selector: 'app-listtraining',
    templateUrl: 'listTraining.component.html'
})

export class ListTrainingComponent implements OnInit {

    listTrainings: Training[] | undefined
    error = null
    displayStyle = "none";
    displayBlur = "blur(0)"
    display = false

    data = {
        id: 0,
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        imgURL: "",
    }

    id: number
    name: string
    description: string
    price: number
    quantity: number
    imgURL: string

    constructor(private cartService: CartService,
        private trainingsService: TrainingsService,
        private router: Router
    ) {
        this.id = 0
        this.name = ""
        this.description = ""
        this.price = 0
        this.quantity = 1
        this.imgURL = "assets/img/unknown.png"
    }
    ngOnInit() {
        this.getAllTrainings()
    }
   

    getAllTrainings() {
        this.trainingsService.getTrainings().subscribe({
            next: (data) => this.listTrainings = data,
            error: (err) => this.error = err.message,
            complete: () => this.error = null

        })
    }
    delItem(training: Training) {
        this.trainingsService.delItem(training)

        setTimeout(() => {
            this.ngOnInit()
        }, 500)

    }

    openPopup(training: Training) {
        this.displayStyle = "block";
        this.displayBlur = "blur(4px)"

        this.id = training.id
        this.name = training.name
        this.description = training.description
        this.price = training.price
        this.quantity = training.quantity
        this.imgURL = training.imgURL
    }
    closePopup() {
        this.displayStyle = "none";
        this.displayBlur = "blur(0)"
    }
    onUpdateTraining(form: NgForm) {

        //console.log(form.value)

        this.data.id = this.id
        this.data.name = form.value.name
        this.data.description = form.value.description
        this.data.price = form.value.price
        this.data.quantity = this.quantity
        this.data.imgURL = form.value.imgURL

        document.getElementById('modal-btn')?.classList.toggle('is_active')

        this.trainingsService.updateTraining(this.data)
        this.display = true
        
        setTimeout(() => {
            this.display = false
            this.displayStyle = "none";
            this.displayBlur = "blur(0)"
            document.getElementById('modal-btn')?.classList.toggle('is_active')
            this.ngOnInit()
        }, 500)
    }


}