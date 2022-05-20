import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Caddy } from '../model/caddy.model';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Initialisation du local storage (panier)
  caddy = window.localStorage;
  caddySize = this.caddy.length
  listCustomers: Customer[] | undefined
  listCaddy: Caddy[] | undefined
  total = 0

  // customer
  customer = new Customer("", "", "", "", "")

  // order
  orderKey = ""
  constructor(private router: Router) { }

  // add item to locastorafge
  addTraining(training: Training) {
    let key = JSON.stringify(training.id)
    let sum = training.quantity * training.price

    this.caddy.setItem(key, JSON.stringify({ ref: training.id, name: training.name, qty: training.quantity, sum: sum }))

    alert("Votre article a bien été ajouté au panier")

  }
  
  // load caddy from storage
  loadCaddy() {
    this.listCaddy = []
    for (let i = 1; i < this.caddySize; i++) {
      let key = JSON.stringify(i)
      let obj = JSON.parse(this.caddy.getItem(key) || "")
      this.listCaddy.push(obj)
      this.total += obj.sum
    }
    //console.log('total', this.total);
    return this.listCaddy
  }

  // methode return total caddy
  getTotal() {
    this.total = 0
    this.loadCaddy()
    return this.total
  }
  
  // delete item from localstorage
  delStorage(item: Caddy) {
    let key = JSON.stringify(item.ref)
    this.caddy.removeItem(key)
    alert("Votre article a bien été supprimer du panier")

  }

  // valid order from caddy
  onOrder() {
    console.log('click');
    let artStorage = this.loadCaddy()
    let total = this.getTotal()
    let user = this.getCustomer()
    if (user!=null) {
      this.orderKey="Order_"+user.name 
    }
    // add order on storage
    this.caddy.setItem(this.orderKey, JSON.stringify({ orderUser: this.orderKey, listArticles: artStorage, total: total }))
    // delete article form storage
    artStorage.forEach(e => {
      let key = JSON.stringify(e.ref)
      this.caddy.removeItem(key)
    })
    artStorage = []
    // pop up alert order
    let order = JSON.parse(this.caddy.getItem(this.orderKey) || "")
    alert(`Order :${order.orderUser} montant : ${order.total}`)
    this.router.navigateByUrl('trainings')
  }

  // set customer in storage, redirect caddy
  setCustomer(customer: Customer) {
    let key = customer.email
    this.caddy.setItem(key, JSON.stringify(customer))
    alert("Utilisateur enregistré")
    this.router.navigateByUrl('caddy')
  }

  // get customer from storage
  getCustomer() {
    let customer
    let cust = this.caddy.getItem('jcd@fr') || "" 
    if (cust) {
     customer = JSON.parse(cust) 
    }
    //console.log(customer)
    
    if (customer===null) {
      return null
    }
    return customer
  }


  // // get order from storage
  // getOrder() {
  //   let key = this.orderKey
  //   let order = JSON.parse(this.caddy.getItem(key) || "")
  //    console.log(order)
  //   return order
  // }

}
