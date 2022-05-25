import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  dateOrder : Date = new Date();
  constructor(public cartService: CartService,
    private router: Router,
    public customerService: CustomerService) { }

  ngOnInit(): void {
    
  }

  onOrder(){
    if(confirm("Aujourd'hui c'est gratuit, merci de votre visite :)")){
        this.cartService.clear();
        this.router.navigateByUrl('');
    }
  }
}
