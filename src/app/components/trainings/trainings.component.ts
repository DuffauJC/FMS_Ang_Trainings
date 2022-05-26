import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from '../../model/training.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
})

export class TrainingsComponent implements OnInit, DoCheck {
  listTrainings: Training[] | undefined
  display = false
  error = null

  constructor(private cartService: CartService,
    private router: Router,
    private trainingsService: TrainingsService) { }

  ngOnInit(): void {
    this.getAllTrainings()
  }
  ngDoCheck(): void {
    this.findButton()
  }

  getAllTrainings() {
    this.trainingsService.getTrainings().subscribe({
      next: (data) => this.listTrainings = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null

    })
  }
  onAddToCart(training: Training) {
    //this.display = true
    this.cartService.addTraining(training)
    this.remClick()

  }
  cartClick(this: any) {
    this.button = this;
    this.button.classList.add('clicked');
  }
  remClick() {
    const cartButtons = document.querySelectorAll('.cart-button');
    //console.log(cartButtons)
    cartButtons.forEach(button => {
     setTimeout(() => {
        button.classList.remove('clicked') 
      },1500);
     
    })
  }

  findButton() {
    const cartButtons = document.querySelectorAll('.cart-button');
    //console.log(cartButtons)
    cartButtons.forEach(button => {
      button.addEventListener('click', this.cartClick);
    });
  }
}
