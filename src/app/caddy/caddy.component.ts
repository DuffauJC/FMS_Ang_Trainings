import { Component, OnInit } from '@angular/core';
import { Caddy } from '../model/caddy.model';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-caddy',
    templateUrl: 'caddy.component.html'
})

export class CaddyComponent implements OnInit {
    listCaddy: Caddy[] | undefined
    total = 0
    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        
        this.listCaddy = []
        
        //Initialisation du local storage (panier)
        let caddy = window.localStorage;
        let caddySize = caddy.length
     
        for (let i = 0; i < caddySize; i++) {
            let obj = JSON.parse(caddy.getItem(caddy.key(i) || "") || "")
            //console.log(obj);
            this.listCaddy.push(obj)
           
            this.total += obj.sum
        }
        //console.log('total', this.total);
     
    }

    onDelToCart(item:Caddy) {
        this.cartService.delStorage(item)

    }
 
}