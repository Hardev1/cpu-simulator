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
        
        this.estilo = true;
        console.log(this.memoria_programa);
        console.log(this.memoria_datos);
      }, 2000);
    }
  }

}
