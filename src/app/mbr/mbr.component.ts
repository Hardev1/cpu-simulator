import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbr',
  templateUrl: './mbr.component.html',
  styleUrls: ['./mbr.component.scss']
})
export class MbrComponent implements OnChanges {

  memoria_programa: string = "";
  memoria_datos: string = "";
  binaryDirect: string = "";
  @Input() onBinaryDirect: string = "";
  @Input() onBinaryInstruct: string = "";
  @Input() onR1: string = "";
  @Input() onR2: string = "";
  @Input() onRs: string = "";
  @Input() onDireccion: string = "";
  estilo: boolean = false;
  constructor() { }

  ngOnChanges() {
    const a = setTimeout(() => {
      this.binaryDirect = "";
    }, 7999);
    this.showDirect();
  }



  showDirect() {

    if (this.onBinaryDirect.length > 0) {
      //this.opsr1r2(this.onOps);

      const c = setTimeout(() => {
        this.estilo = false;
      }, 7000);
      const a = setTimeout(() => {
        this.memoria_programa = `${this.onBinaryInstruct} ${this.onR1} ${this.onR2} ${this.onBinaryDirect} \n`;
        this.memoria_datos = `${this.onBinaryDirect} ${this.onRs} \n`
        this.estilo = true;
      }, 8000);
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
