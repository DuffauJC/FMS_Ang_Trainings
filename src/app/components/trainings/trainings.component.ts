import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from '../../model/training.model';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
})

export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined
  display = false
  error=null
  
  constructor(private cartService: CartService,
    private router: Router,
    private trainingsService: TrainingsService) { }

  ngOnInit(): void {
  this.getAllTrainings()
  }

  getAllTrainings() {
    this.trainingsService.getTrainings().subscribe({
      next: (data) => this.listTrainings = data,
      error: (err) => this.error = err.message,
      complete:()=>this.error=null
      
    })
  }
  onAddToCart(training: Training) {
    //alert("Votre article a bien été ajouté au panier")
    this.display=true
    this.cartService.addTraining(training)
    setInterval(() => {
      this.display=false
    },1500)
    
  }

  
}
