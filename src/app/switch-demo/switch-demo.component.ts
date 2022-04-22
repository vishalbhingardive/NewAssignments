import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent implements OnInit {

  people: Array<any>;
peopleByCity: Array<any>;
  constructor() {
    this.people=[{name:'Vivek',age:49},{name:'Yogesh', age:45},{name:'Ashmita', age:52}, {name:'Geeta', age:47}];
    this.peopleByCity=[
      {
        city:'pune',people:[{name:'Vivek',age:49}, {name:'Yogesh',age:45}]
      },
      {
        city:'Belgaum',people:[{name:'Ashmita',age:52}, {name:'Geeta',age:47}]
      }
    ];
  }
  ngOnInit(): void {
  }

}
