import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addTraining(training: Training) {
  
    //Initialisation du local storage (panier)
    let caddy = window.localStorage;

    let key = JSON.stringify(training.id)
    let sum = training.quantity * training.price

    caddy.setItem(key, JSON.stringify({ ref:training.id,name:training.name,qty: training.quantity, sum: sum }))
    
    alert("Votre article a bien été ajouté au panier")
    
  }

  
  
}
