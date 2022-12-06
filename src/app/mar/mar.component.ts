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
    this.showDirect();
  }



  showDirect() {
    if (this.onDireccion.length > 0) {
      //this.opsr1r2(this.onOps);
      const a = setTimeout(() => {
        console.log(this.binaryDirect = Number(this.onDireccion[0]).toString(2));
        /* console.log(this.r1 = this.addcero(this.r1));
        console.log(this.r2 = this.addcero(this.r2)); */
        this.estilo = true;
        console.log(this.onDireccion);
      }, 2000);
    }
  }

}
