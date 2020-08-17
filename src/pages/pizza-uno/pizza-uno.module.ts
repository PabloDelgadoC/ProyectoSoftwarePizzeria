import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaUnoPage } from './pizza-uno';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    //PizzaUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaUnoPage),
  ],
  entryComponents: [
    //PizzaUnoPage
  ],
})
export class PizzaUnoPageModule { }
