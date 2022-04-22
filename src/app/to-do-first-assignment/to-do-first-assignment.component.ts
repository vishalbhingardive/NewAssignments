import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-first-assignment',
  //template: #1 Iterate over categories pass category to <interactionc-child>  
  // <interaction-child *ngFor="let category of categories" [productCategory]="category"></interaction-child>
  // TODO #2  give grey colour to all odd rows and lightblue to every even rows 
  // TODO #3 print no of products for a first and last category by accessing childCOmponent's template ref variable 
  //  TODO #4 try to access template ref. var of child component outside of ngFor scope . WHat happens ? 
  //       </div>`
})
export class ToDoFirstAssignmentComponent implements OnInit {

  categories: string[] = ['Toys','FootWear','Mens','Sports'];
  constructor() { }

  ngOnInit(): void {
  }

}
