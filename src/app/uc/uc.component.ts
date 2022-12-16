import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-uc',
  templateUrl: './uc.component.html',
  styleUrls: ['./uc.component.scss']
})
export class UcComponent implements OnChanges {

  memoria_programa: string = "";
  memoria_datos: string = "";
  binaryDirect: string = "";
  @Input() onBinaryDirect: string = "";
  @Input() onBinaryInstruct: string = "";
  @Input() onR1: string = "";
  @Input() onR2: string = "";
  @Input() onDireccion: string = "";
  estilo: boolean = false;
  columnaDirecciones: string = "0000 0001 0010 0011 0100 0101 0110 0111 1000 1010 1011 1100 1101 1110 1111";
  @Input() onInfo!: Subject<string>;
  info: string = '';

  constructor() { }

  ngOnChanges() {
    this.onInfo.subscribe((text: string) => {
      this.memoria_programa = "";
      this.memoria_programa = text;
      this.estilo = true;
      const c = setTimeout(() => {
        this.estilo = false;
      }, 1000);
    })
    this.showDirect();
  }



  showDirect() {

    if (this.onBinaryDirect.length > 0) {
      //this.opsr1r2(this.onOps);

      const c = setTimeout(() => {
        this.estilo = false;
      }, 1000);
      const a = setTimeout(() => {
        this.memoria_programa = `${this.onBinaryInstruct} ${this.onR1} ${this.onR2} ${this.onBinaryDirect} \n`;
        this.estilo = true;
      }, 1500);
      const d = setTimeout(() => {
        this.estilo = false;
      }, 3500);
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
