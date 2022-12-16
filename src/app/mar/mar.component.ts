import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mar',
  templateUrl: './mar.component.html',
  styleUrls: ['./mar.component.scss']
})
export class MarComponent implements OnChanges {

  @Input() onDireccion: string = "";
  @Output() onBinaryDirect: EventEmitter<string> = new EventEmitter<string>();
  binaryDirect: string = "";
  estilo: boolean = false;

  constructor() { }

  ngOnChanges() {
    const a = setTimeout(() => {
      this.binaryDirect = "";
    }, 3999);
    this.showDirect();
  }



  showDirect() {
    if (this.onDireccion.length > 0) {
      //this.opsr1r2(this.onOps);

      const c = setTimeout(() => {
        this.estilo = false;
      }, 3000);
      const a = setTimeout(() => {
        this.binaryDirect = this.add(Number(this.onDireccion[0]).toString(2));
        this.estilo = true;
      }, 4000);
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
