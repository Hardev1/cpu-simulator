import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alu',
  templateUrl: './alu.component.html',
  styleUrls: ['./alu.component.scss']
})
export class AluComponent implements OnChanges {
  @Input() onInstruct: string = "";
  binaryInstruct: string = "";
  @Output() onBinaryInstruct: EventEmitter<string> = new EventEmitter<string>();
  @Input() onOps: string[] = [];
  @Output() onRs: EventEmitter<string> = new EventEmitter<string>();
  r1: string = "";
  r2: string = "";
  rs: string = "";
  estilo: boolean = false;
  myTimeout: any;

  constructor() { }

  ngOnChanges() {
    const a = setTimeout(() => {
      this.r1 = "";
      this.r2 = "";
    }, 11999);
    this.opsr1r2();
  }

  opsr1r2() {
    if (this.onOps.length > 0) {
      //this.opsr1r2(this.onOps);
      const cd = setTimeout(() => {
        this.estilo = false;
      }, 11000);
      const a = setTimeout(() => {
        this.r1 = this.add(Number(this.onOps[0]).toString(2));
        this.r2 = this.add(Number(this.onOps[1]).toString(2));
        /* console.log(this.r1 = this.addcero(this.r1));
        console.log(this.r2 = this.addcero(this.r2)); */
        this.estilo = true;
        this.onBinaryInstruct.emit(this.binaryInstruct);
      }, 12000);
      const c = setTimeout(() => {
        this.estilo = false;
      }, 13000);
      const b = setTimeout(() => {
        let asd:string = this.add(this.instructToBinary(Number(this.onOps[0]), Number(this.onOps[1])))
        this.rs = asd
        this.onRs.emit(asd);
        this.estilo = true;
      }, 14000);
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