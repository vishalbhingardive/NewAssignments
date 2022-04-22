import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-component',
  templateUrl: './warehouse-component.component.html',
  styleUrls: ['./warehouse-component.component.css']
})
export class WarehouseComponentComponent implements OnInit {

  warehouse=false;
  productQuantity=new Map
  products:Array<Warehouse>=[
    new Warehouse("HP","Laptop",500),
    new Warehouse("DELL","Pc",500),
  ]

  warehouseShow()
  {
    this.warehouse=!this.warehouse;
  }

  ngOnInit(): void {
   
  }

  RemainQuantity($event:any)
  {

  }
  constructor() { 

    this.productQuantity.set(new Warehouse("HP","Laptop",2383),45);
    this.productQuantity.set(new Warehouse("Pc","Laptop",2383),45)
  }

 
}

export class Warehouse
{
public get brand(): String {
  return this._brand;
}
public set brand(value: String) {
  this._brand = value;
}
public get ProductName(): string {
  return this._ProductName;
}
public set ProductName(value: string) {
  this._ProductName = value;
}
public get quantity(): number {
  return this._quantity;
}
public set quantity(value: number) {
  this._quantity = value;
}



constructor( private _brand: String, private _ProductName: string, private _quantity: number ){}
}




