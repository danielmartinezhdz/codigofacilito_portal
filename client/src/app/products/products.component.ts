import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
	selector: 'product.com',
	templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit{
	products : Product[];
	constructor(private servidor : ProductService){}

	ngOnInit(){
		this.getProducts();
	}

	getProducts(){
		this.servidor.getProducts()
					 .subscribe(data => this.products = data)
	}
}