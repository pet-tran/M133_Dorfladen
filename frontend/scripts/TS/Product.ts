"use strict";

export class Product {
    ID:number;
    Price:number;
    Name: string;

    constructor(id:number,price:number, task:string){
        this.ID = id;
        this.Price = price;
        this.Name = task;
    }
}