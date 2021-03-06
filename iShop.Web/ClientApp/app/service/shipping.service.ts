﻿import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';
import { Shipping } from "../model/shipping";


@Injectable()
export class ShippingService {
    Url: string;
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.Url = baseUrl;
    }
     // get shoppingcart  with Id user
    createShipping(shipping:Shipping) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
     
        return this.http.post(this.Url + 'api/shippings/', JSON.stringify(shipping), options )
            .map(res => res.json(),
                (err: any)=>console.log(err)
        );
    }
    // change state for item shipping 
    ChangeStateShipping(id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.Url + 'api/shippings/state/' + id ,null, options)
            .map(res => res.json(),
                (err: any) => console.log(err)
            );
    }

}