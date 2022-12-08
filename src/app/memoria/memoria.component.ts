import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.scss']
})
export class MemoriaComponent implements OnChanges {

  memoria_programa: string = "";
  memoria_datos: string = "";
  binaryDirect: string = "";
  @Input() onBinaryDirect: string = "";
  @Input() onBinaryInstruct: string = "";
  @Input() onR1: string = "";
  @Input() onR2: string = "";
  @Input() onRs: string = "";
  estilo: boolean = false;

  constructor() { }

  ngOnChanges() {
    this.showDirect();
  }



  showDirect() {

    if (this.onBinaryDirect.length > 0) {
      //this.opsr1r2(this.onOps);
      const a = setTimeout(() => {
        console.log(this.onBinaryInstruct);
        console.log(this.onBinaryDirect);
        console.log(this.onR1);
        console.log(this.onR2);
        console.log(this.onRs);
        this.memoria_programa = `${this.onBinaryInstruct} ${this.onR1} ${this.onR2} ${this.onRs} \n`
        this.estilo = true;
      }, 6000);
    }
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

}
