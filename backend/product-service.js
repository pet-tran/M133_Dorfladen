'use strict'
import { Product } from '../frontend/scripts/TS/Product.ts';

export class ProductService {

    constructor() {
        this.Products = [];
        this.Products.push(new Product(1, 0, "Pan"));
        this.Products.push(new Product(2, 0, "Ringo"));
        this.Products.push(new Product(3, 0, "Ichigo"));
        this.Products.push(new Product(4, 0, "Niku"));
    }

    getProducts() {
        console.log(this.Products);
        return this.Products;
    }

}