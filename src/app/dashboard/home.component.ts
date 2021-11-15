import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import {Product} from './product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products!: Product[];
	
  responsiveOptions: { 
    breakpoint: string; 
    numVisible: number; 
    numScroll: number;
   }[];

	constructor(private productService: ProductService) {
    debugger; 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }
}

