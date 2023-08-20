import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCartInputService {

  constructor() { }

  //imageUrl: string = 'https://i.hizliresim.com/egz3wqw.JPG'; //master
  //https://i.hizliresim.com/bhjrpc1.jpg //visa
  //https://i.hizliresim.com/cn5qout.jpg //discover

  getCardType(cardNumber: string): string | null {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/;
    const discoverRegex = /^(6011[0-9]{12}|64[4-9][0-9]{13}|65[0-9]{14})$/;

    if (visaRegex.test(cardNumber)) {
       // return 'Visa';
       return "https://i.hizliresim.com/bhjrpc1.jpg"
    } else if (mastercardRegex.test(cardNumber)) {
       // return 'Mastercard';
        return "https://i.hizliresim.com/egz3wqw.JPG";
    } else if (discoverRegex.test(cardNumber)) {
        //return 'Discover';
        return "https://i.hizliresim.com/cn5qout.jpg";
    } else {
        return null;
    }
}



}
