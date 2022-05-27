import { Component, OnInit,DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Training } from 'src/app/model/training.model';
import { TrainingsService } from 'src/app/services/trainings.service';


@Component({
    selector: 'app-addtraining',
    templateUrl: 'addTraining.component.html'
})

export class AddTrainingComponent implements OnInit,DoCheck{
    display = false

    defaultImgUrl ="assets/img/unknown.png"
    data = {
        name: "",
        description:"",
        price: 0,
        quantity: 0,
        imgURL: "",
    }
    name: string
    description: string
    price: number
    quantity: number
    imgURL:string
    
    constructor(private trainingsService: TrainingsService,
    ) {
        this.name = ""
        this.description = ""
        this.price = 0
        this.quantity = 1
        this.imgURL=""


         }

    ngOnInit() { }

    ngDoCheck(): void {
        
    }
    onSaveTraining(form: NgForm) {
        
       // console.log(form.value)
        
        this.data.name = form.value.name
        this.data.description = form.value.description
        this.data.price = form.value.price
        this.data.quantity = this.quantity
        this.data.imgURL = form.value.imgURL
        
        this.display = true

        this.trainingsService.postTraining(this.data)
        setInterval(() => {
            this.display = false
            
        }, 1500)
    }
}