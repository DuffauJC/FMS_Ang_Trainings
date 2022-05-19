import { Component, OnInit, DoCheck } from '@angular/core';
import { Caddy } from '../model/caddy.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-caddy',
    templateUrl: 'caddy.component.html'
})

export class CaddyComponent implements OnInit, DoCheck {
    listCaddy: Caddy[] | undefined
    total = 0
    constructor(private cartService: CartService, private router: Router) { }

    // after vue change
    ngDoCheck(): void {
        this.listCaddy = []
        this.listCaddy = this.cartService.loadCaddy()
        this.total=this.cartService.getTotal()
    }
    // on load componenent
    ngOnInit(): void {
        this.listCaddy = []
        this.listCaddy=this.cartService.loadCaddy()
        this.total = this.cartService.getTotal()
    }

   
    // delete item from caddy
    onDelToCart(item: Caddy) {
        this.cartService.delStorage(item)

    }

    // valide order from caddy
    onToOrder() {
        this.router.navigateByUrl('customer')
        this.cartService.onOrder()
    }

}