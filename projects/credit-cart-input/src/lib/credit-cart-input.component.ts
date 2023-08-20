import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditCartInputService } from '../public-api';

@Component({
  selector: 'ngx-credit-cart-input',
  template: `
   <div class="container">
  <input type="text" [(ngModel)]="inputValue" (input)="onInputValueChanged()">
  <img [src]="imageUrl" alt="Açıklama" class="aligned-image">
</div>
  `,
  styleUrls:['./credit-cart-input.css']
})
export class CreditCartInputComponent {
  cardType: string | null = "";
  imageUrl: string | null = '';

  constructor(private cdr: ChangeDetectorRef,private service :CreditCartInputService) {}
  
  @Input() inputValue :string = '';
  @Output() inputValueChange = new EventEmitter<string>();
  @Input()  maskPattern:string = '****-****-****-****';

  onInputValueChanged() {
    let model :string = "";
    this.cardType ="";
     const B = this.inputValue.split("").filter((char: string) => !isNaN(parseInt(char)));
    const A= this.maskPattern.split("");

if(B.length >16){
  model ="";
  console.log(this.inputValue);
  model =this.inputValue.slice(0, -1);  
}
else{
     for (let i = 0; i < A.length; i++) {
      let durum = 0;
      for (let s = 0; s < B.length; s++) {
        if (B[s] !== "6yuhdneu8") {
          durum = 1;
        }
      }
      if (A[i] === "*") {
        for (let k = 0; k < B.length; k++) {
          if (B[k] !== "6yuhdneu8") {
            model += B[k];
            B[k] = "6yuhdneu8";
            break;
          }
        }
      } else {
        if (durum === 1) {
          model += A[i];
        }
      }
    }
    //const cardNumber = "6011123456789012";  // Örnek bir Discover kart numarası
   
  } 

  if(this.inputValue.replace(/-/g, '').length >16){
    this.cardType = this.service.getCardType(this.inputValue.replace(/-/g, '').slice(0, -1));
  }
  else{
    this.cardType = this.service.getCardType(this.inputValue.replace(/-/g, ''));
  }
 
  if (this.cardType) {
   console.log(`Bu kart bir ${this.cardType} kartıdır.`);
} else {
   console.log('Bu kartın türü tanımlanamadı.');
}

this.imageUrl = this.cardType ;
debugger

this.inputValue="";
this.cdr.detectChanges();
this.inputValue = model;
this.inputValueChange.emit(this.inputValue);

  }


  
}
