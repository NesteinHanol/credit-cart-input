import { Pipe, PipeTransform } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {
  constructor(private cdr: ChangeDetectorRef) {}
  transform(value: any, maskPattern: string, maskChar: string = '*'): string {

     let model :string = "";
    const maxlenght = 16;
     const B = value.split("").filter((char: string) => !isNaN(parseInt(char))); // Sayı değilse filtrele
    const A= maskPattern.split("");

if(B.length >16){
  
  this.cdr.detectChanges();
  return "(1234)-1234-1234-1234"
}
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
    
   // this.cdr.detectChanges();
    //debugger
return model

  }
}
