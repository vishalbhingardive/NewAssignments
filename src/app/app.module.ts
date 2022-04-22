import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseComponentComponent } from './warehouse-component/warehouse-component.component';
import { StoreComponentComponent } from './store-component/store-component.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { ToDoFirstAssignmentComponent } from './to-do-first-assignment/to-do-first-assignment.component';
import { InteractionChildComponent } from './interaction-child/interaction-child.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponentComponent,
    StoreComponentComponent,
    SwitchDemoComponent,
    HighlightDirectiveDirective,
    ToDoFirstAssignmentComponent,
    InteractionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
