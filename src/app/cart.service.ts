import { Injectable } from '@angular/core';
import { Training } from './model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addTraining(training: Training) {
    let key = JSON.stringify(training.id)
    let obj=JSON.stringify(training)
    window.localStorage.setItem( key,obj)

  }
}
