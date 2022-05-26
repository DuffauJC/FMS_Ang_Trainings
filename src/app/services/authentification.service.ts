import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';

@Injectable({ providedIn: 'root' })

export class CustomerService {

    error = null
    ok=true
    constructor(private http: HttpClient) {
        //this.customer = new Customer("", "","","","","","")
    }

    // save customer in bdd
    public postCustomer(customer: Customer) {
        // console.log(customer);
        let cust = {
            name: customer.name,
            firstName: customer.firstName,
            address: customer.address,
            email: customer.email,
            phoneNumber: customer.phoneNumber,
            password: customer.password,
            role: customer.role
        }
        this.http.post<any>(environment.host + "/customers", cust)
        //     .subscribe(response => {
        //     console.log(response)
        // })
    }

    // login vuerification
    veriFyLogin(data: any) {
       // console.log(data)
        
        this.getCustomer(data.email).subscribe(response => {
            //console.log(response[0])

            // if existant user mail in response
            if (response[0].email === data.email && response[0].password === data.password) {
                this.setCustomerInStorage({
                    email: response[0].email,
                    name: response[0].name,
                    firstName: response[0].firstName,
                    address: response[0].address,
                    phoneNumber:response[0].phoneNumber,
                    role: response[0].role
                })
                this.ok = true
            } else {
                this.ok = false
            }
        })
        if (this.ok) {
            console.log('ok');
            return true
        } else {
            console.log('false');
            return false
        }

    }
    // get customer with mail param
    public getCustomer(email: string) {
        //console.log(email)
        let queryParams = new HttpParams();
        queryParams = queryParams.append("email", email);
        //console.log(queryParams)
        return this.http.get<Customer[]>(environment.host + "/customers", { params: queryParams })


    }
    // set customer in storage
    setCustomerInStorage(data: any) {
        localStorage.setItem('customer', JSON.stringify(data));

    }
    // get customer from storage
    getCustomerFromStorage() {
        let customer = localStorage.getItem('customer');
        if (customer) return JSON.parse(customer);
        return new Customer("","unknown","","","","","")
    }
    removeCustomerFromStorage() {
        localStorage.removeItem('customer')
    }
}