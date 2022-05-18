import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-caddy',
    templateUrl: 'caddy.component.html'
})

export class CaddyComponent implements OnInit {
    listCaddy: Object[] | undefined

    constructor() { }

    ngOnInit():void {
        //Initialisation du local storage (panier)
        let caddy = window.localStorage;
        let caddySize = caddy.length
        let total = 0
        for (let i = 0; i < caddySize; i++) {
            let obj = JSON.parse(caddy.getItem(caddy.key(i) || "") || "")
            console.log(obj);
            this.listCaddy?.push(obj)
            console.log(this.listCaddy?.length);
            
            total += obj.sum
        }
        console.log('total', total);
        console.log(this.listCaddy?.toString());
        
        // for (let index = 0; index < this.listCaddy?.length; index++) {
        //    console.log(index)
            
        // }
        
    }
 
}