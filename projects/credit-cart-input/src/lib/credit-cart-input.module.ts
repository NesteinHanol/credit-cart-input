import { NgModule } from '@angular/core';
import { CreditCartInputComponent } from './credit-cart-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CreditCartInputComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CreditCartInputComponent
  ]
})
export class CreditCartInputModule { }
