import { Component, OnInit, DoCheck } from '@angular/core';
import { Training } from '../../model/training.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/authentification.service';
@Component({
    selector: 'app-caddy',
    templateUrl: 'caddy.component.html'
})

export class CaddyComponent implements OnInit, DoCheck {
    listCaddy: Training[] | undefined
    total = 0
    display = false
    constructor(private cartService: CartService, private router: Router, private customerService: CustomerService) { }

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
    onDelToCart(item: Training) {
        this.cartService.delStorage(item)
    }
    clearCart() {
        this.cartService.clear()
    }
    // valide order from caddy wuith user session
    onToOrder() {
        let customer = this.customerService.getCustomerFromStorage()
        // console.log(customer)
        if (customer !=null) {
            this.router.navigateByUrl('order')

        } else {
            this.router.navigateByUrl('customer')
        }
    }
}