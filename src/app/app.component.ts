import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parentData: string = "";
//   constructor(private cdr: ChangeDetectorRef) {}
  
//   title = 'credit-cart';

//   inputValue = '';
//   maskPattern:string = '****-****-****-****';
//   onInputValueChanged() {
//     let model :string = "";
//      const B = this.inputValue.split("").filter((char: string) => !isNaN(parseInt(char))); // Sayı değilse filtrele
//     const A= this.maskPattern.split("");

// if(B.length >16){
//   model ="";
//   console.log(this.inputValue);
//   model =this.inputValue.slice(0, -1);
// }
// else{
//      for (let i = 0; i < A.length; i++) {
//       let durum = 0;
//       for (let s = 0; s < B.length; s++) {
//         if (B[s] !== "6yuhdneu8") {
//           durum = 1;
//         }
//       }
//       if (A[i] === "*") {
//         for (let k = 0; k < B.length; k++) {
//           if (B[k] !== "6yuhdneu8") {
//             model += B[k];
//             B[k] = "6yuhdneu8";
//             break;
//           }
//         }
//       } else {
//         if (durum === 1) {
//           model += A[i];
//         }
//       }
//     }
//   } 
//    // this.cdr.detectChanges();
//     //debugger
// //return model
// this.inputValue="";
// this.cdr.detectChanges();
// this.inputValue = model;
// console.log('Input değeri değişti:', model);

//   }

  
}
