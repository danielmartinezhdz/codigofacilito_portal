import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product'; 


@Injectable()

export class ProductService{
	private server = 'http://localhost:3000/products';
	headers : Headers;
	options : RequestOptions;

	constructor(private http :Http){
		this.headers = new Headers({'Content-Type':'application/json'});
		this.options = new RequestOptions({headers: this.headers});
	}

	getProducts():Observable<Product[]>{
		return this.http.get(this.server)
						.map((response : Response) => <Product[]>response.json())
	}

}