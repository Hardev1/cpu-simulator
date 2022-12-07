import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alu',
  templateUrl: './alu.component.html',
  styleUrls: ['./alu.component.scss']
})
export class AluComponent implements OnChanges {
  @Input() onInstruct: string = "";
  binaryInstruct: string = "";
  @Input() onOps: string[] = [];
  r1: string = "";
  r2: string = "";
  rs: string = "";
  estilo: boolean = false;
  myTimeout: any;

  constructor() { }

  ngOnChanges() {
    this.opsr1r2();
  }

  opsr1r2() {
    if (this.onOps.length > 0) {
      //this.opsr1r2(this.onOps);
      const a = setTimeout(() => {
        this.r1 = this.add(Number(this.onOps[0]).toString(2));
        this.r2 = this.add(Number(this.onOps[1]).toString(2));
        /* console.log(this.r1 = this.addcero(this.r1));
        console.log(this.r2 = this.addcero(this.r2)); */
        console.log(Number(this.onOps[0]) + Number(this.onOps[1]));
        console.log(this.onInstruct);
        this.rs = this.add(this.instructToBinary(Number(this.onOps[0]), Number(this.onOps[1])))
        this.estilo = true;
      }, 4000);
    }
  }

  addCero(r: string): string {
    if (r.length === 4) {
      return r
    }

    return this.addCero(`0${r}`)
  }

  add(r: any) {
    for (let i = r.length - 1; i < 8; i++) {
      if (r.length < 8) {
        r = `0${r}`;
      } else {
        return r
      }
    }
  }

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