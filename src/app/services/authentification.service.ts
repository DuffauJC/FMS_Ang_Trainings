import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';

@Injectable({ providedIn: 'root' })

export class CustomerService {
    constructor(private http: HttpClient) { }

    public postCustomer(customer: Customer) {
        this.http.post<Customer>(environment.host + "/customers", customer)
    }
    public getCustomer(email:string) {
        return this.http.get<Customer>(environment.host + "/customers",).subscribe(data => {
           
        })
    }
}