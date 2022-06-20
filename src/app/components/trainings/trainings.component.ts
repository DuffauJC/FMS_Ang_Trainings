import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState} from 'src/app/ngrx/app.state';
import { Training } from '../../model/training.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
})

export class TrainingsComponent implements OnInit, DoCheck {

  trainings$: Observable<AppState> | null = null
  versionState$: Observable<any> | null = null
  error = null
 

  constructor(private cartService: CartService,
    private store: Store<any>, private router: Router
  ) {

  }

  ngOnInit(): void {
    this.trainings$ = this.store.pipe(
      map((state) => state.trainings));
  }
  ngDoCheck(): void {
    this.findButton()
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
      }, 3000);

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
