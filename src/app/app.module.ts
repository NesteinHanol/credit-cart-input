import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaskPipe } from 'projects/credit-cart-input/src/lib/generic-mask';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditCartInputComponent, CreditCartInputModule } from 'projects/credit-cart-input/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CreditCartInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
