import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-store-component',
  templateUrl: './store-component.component.html',
  styleUrls: ['./store-component.component.css']
})
export class StoreComponentComponent implements OnInit {

@Output()

orderSomething:EventEmitter<Order>=new EventEmitter<Order>();


  constructor() { }

  ngOnInit(): void {
  }

  orderPlace($event:any)
  {
    let productName=$event.target['productName'].value;
    let quantity=$event.target['productName'].value;

    this.orderSomething.emit(new Order(productName,quantity));

  }
}



export class Order{
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public get ProductName(): string {
    return this._ProductName;
  }
  public set ProductName(value: string) {
    this._ProductName = value;
  }
  constructor(private _ProductName: string, private _quantity: number){}
}
