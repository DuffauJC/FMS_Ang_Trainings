import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Caddy } from '../model/caddy.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//Initialisation du local storage (panier)
   caddy = window.localStorage;
  constructor() { }

  addTraining(training: Training) {
    let key = JSON.stringify(training.id)
    let sum = training.quantity * training.price

    this.caddy.setItem(key, JSON.stringify({ ref:training.id,name:training.name,qty: training.quantity, sum: sum }))
    
    alert("Votre article a bien été ajouté au panier")
    
  }

  delStorage(item: Caddy) {
    let key = JSON.stringify(item.ref)
    this.caddy.removeItem(key)
  }
  
}
