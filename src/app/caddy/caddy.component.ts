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
    display = false
    constructor(private cartService: CartService, private router: Router) { }

    // on load componenent
    ngOnInit(): void {
        this.listCaddy = []
        this.display = false
        this.listCaddy = this.cartService.loadCaddy()
        if (this.listCaddy.length != 0) {
            this.display = true
            this.total = this.cartService.getTotal()
        }
    }

    // after change vue
    ngDoCheck(): void {
        this.listCaddy = []
        this.display = false
        this.listCaddy = this.cartService.loadCaddy()
        if (this.listCaddy.length != 0) {
            this.display = true
            this.total = this.cartService.getTotal()
        }

    }
   
    // delete item from caddy
    onDelToCart(item: Caddy) {
        this.cartService.delStorage(item)
    }
    // valide order from caddy wuith user session
    onToOrder() {
        let customer = this.cartService.getCustomer()
        // console.log(customer)
        if (customer) {
            this.cartService.onOrder()

        } else {
            this.router.navigateByUrl('customer')
        }
    }
}