import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnChanges {

  estilod:boolean = false;
  estiloda:boolean = false;
  @Input() onDireccion: string = "";

  constructor() { }

  ngOnChanges() {
    this.showDirect();
  }

  showDirect() {
    if (this.onDireccion.length > 0) {
      //this.opsr1r2(this.onOps);
      const cd = setTimeout(() => {
        this.estilod = false;
        this.estiloda = false;
      }, 4000);
      const a = setTimeout(() => {
        this.estilod = true;
      }, 5000);
      const b = setTimeout(() => {
        
        this.estiloda = true;
      }, 7000);
      const e = setTimeout(() => {
      }, 10000);
      const c = setTimeout(() => {
        this.estilod = true;
      }, 15000);
      const d = setTimeout(() => {
        
        this.estiloda = true;
      }, 15000);
    }
  }

}
