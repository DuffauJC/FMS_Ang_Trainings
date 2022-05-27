import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
    selector: 'app-listtraining',
    templateUrl: 'listTraining.component.html'
})

export class ListTrainingComponent implements OnInit, DoCheck {
    listTrainings: Training[] | undefined
    error = null

    constructor(private cartService: CartService,
        private router: Router,
        private trainingsService: TrainingsService) { }

    ngOnInit(): void {
        this.getAllTrainings()
    }
    ngDoCheck(): void {

    }

    getAllTrainings() {
        this.trainingsService.getTrainings().subscribe({
            next: (data) => this.listTrainings = data,
            error: (err) => this.error = err.message,
            complete: () => this.error = null

        })
    }

}