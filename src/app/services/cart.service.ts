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
  name: string = ''
  firstname: string = ''
  address: string = ''
  phoneNumber: string = ""
  email: string = ""


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
  // valid commande from caddy
  onOrder() {
    console.log('click');

  }
  // set customer
  setCustomer(customer: Customer) {

    let key = JSON.stringify(customer.email)
    this.caddy.setItem(key, JSON.stringify(customer))
    alert("Utilisateur enregistré")

    // this.customer = new Customer(customer.name, customer.firstname, customer.address, customer.phoneNumber, customer.email)
    // console.log('this customer',this.customer);
    //this.listCustomers.push(this.customer)
    this.router.navigateByUrl('caddy')
  }
  // get customer form form
  getCustomer() {

    //    this.customer = JSON.parse(this.caddy.getItem("jcd@fr") || "")
    //  console.log(this.customer)
    return this.customer
  }
  getTheCustomer() {
    let key = 'jcd@fr'
    this.customer = JSON.parse(this.caddy.getItem(key) || "")
    console.log(this.customer)
    //return this.customer
  }

}
