import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  @Input() onInstruct: string = "";
  binaryInstruct: string = "";
  estilo: boolean = false;

  constructor() { }

  instructToBinary(r1: any, r2: any) {
    switch (this.onInstruct) {
      case "ADD":
        this.binaryInstruct = "0001";
        return (r1 + r2).toString(2);

      case "SUB":
        this.binaryInstruct = "0010"
        return (r1 - r2).toString(2);

      case "MPY":
        this.binaryInstruct = "0011"
        return (r1 * r2).toString(2);

      case "DIV":
        this.binaryInstruct = "0100"
        return (r1 / r2).toString(2);

      default:
        break;
    }
    this.estilo = true;
  }
}
