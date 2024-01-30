import { Component, OnInit } from '@angular/core';
import { Product, products } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  
  product: Product | undefined;

  ngOnInit(): void {
    // Get the product id from the current route ( ActivatedRoute)
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    
    
    // Find the product that correspond with the id provided
    
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  constructor(private route: ActivatedRoute){
    
  }  

}
