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
  @Input() onDireccion: string = "";
  estilo: boolean = false;
  columnaDirecciones : string = "00000000 00000001 00000010 00000011 00000100 00000101 00000110 00000111 00001000 00001010 00001011 00001100 00001101 00001110 00001111";
  programa: string[] = this.columnaDirecciones.split(" ");
  contador: number = -1;

  constructor() { }

  ngOnChanges() {
    this.showDirect();
  }

  showDirect() {

    if (this.onBinaryDirect.length > 0) {
      //this.opsr1r2(this.onOps);
      const a = setTimeout(() => {
        this.contador ++;
        this.memoria_programa = `${this.onBinaryInstruct} ${this.onR1} ${this.onR2} ${this.onRs} \n`;
        this.memoria_datos =`${this.onBinaryDirect} ${this.onRs} \n`
        this.estilo = true;
      }, 2000);
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
