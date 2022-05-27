import { Component, OnInit, DoCheck } from '@angular/core';
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
        private trainingsService: TrainingsService) {
    }
    ngOnInit() {
        this.getAllTrainings()
    }
    ngDoCheck() {

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
        let item = document.getElementById('item-' + training.id)
        if (item) {
          item.style.display="none"  
        }
    }

}