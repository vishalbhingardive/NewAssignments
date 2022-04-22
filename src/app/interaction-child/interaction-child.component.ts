// import { Component, OnInit,Input } from '@angular/core';

// @Component({
//   selector: 'app-interaction-child',
//   templateUrl: './interaction-child.component.html',
//   styleUrls: ['./interaction-child.component.css']
// })
// export class InteractionChildComponent implements OnInit {

//   ngOnInit(): void {
//   }
  
//   productCategory:string;

// //  Product= function(name,description,price,category){
// //   name = name;
// //   description=description;
// //   price=price;
// //   category=category;
// //   return name+": "+description+": "+price;
// //       this.name = name;
// //       this.description = description;
// //       this.price = price;
// //       this.category = category;
// //       this.toString=function(){
// //         return this.name+" : "+this.description+" : "+this.price;
// //  }
// //  constructor()
// // {
// //   let p1 = new this.Product('RC_Car','Remote Car',1000,'Toys');
// //   let p2 = new this.Product('DOll','Chhan Mazi Bahuli ',100,'Toys');
// //  let p3 = new this.Product('TShirt','Cotton T-Shirt',700,'Mens');
// //  let p4 = new this.Product('Trouser','Casual Trouser',1700,'Mens');
// //   let p5 = new this.Product('Chappal','Casual Kolhapuri',2700,'FootWear');
// //   let p6 = new this.Product('Joggers','Casual Nike Shoes',5700,'FootWear');
// // }
// } 


// class Product
// {
//   public get productCategory(): string {
//     return this._productCategory;
//   }
//   public set productCategory(value: string) {
//     this._productCategory = value;
//   }
//   public get name(): string {
//     return this._name;
//   }
//   public set name(value: string) {
//     this._name = value;
//   }
//   public get description(): string {
//     return this._description;
//   }
//   public set description(value: string) {
//     this._description = value;
//   }
//   public get price(): number {
//     return this._price;
//   }
//   public set price(value: number) {
//     this._price = value;
//   }
 
//   constructor(private _name: string,private _description: string, private _price: number, private _productCategory: string){}
// }