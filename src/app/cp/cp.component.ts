import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.scss']
})
export class CpComponent implements OnChanges {
  @Input() onDireccion: string = "";
  @Output() onBinaryDirect: EventEmitter<string> = new EventEmitter<string>();
  binaryDirect: string = "";
  estilo: boolean = false;

  constructor() { }

  ngOnChanges() {
    const a = setTimeout(() => {
      this.binaryDirect = "";
    }, 2499);
    this.showDirect();
  }



  showDirect() {
    if (this.onDireccion.length > 0) {
      //this.opsr1r2(this.onOps);
      
      const c = setTimeout(() => {
        this.estilo = false;
      }, 1000);
      const a = setTimeout(() => {
        this.binaryDirect = this.add(Number(this.onDireccion[0]).toString(2));
        this.estilo = true;
      }, 2500);
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
