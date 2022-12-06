import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnChanges {

  estilo:boolean = false;
  @Input() onDireccion: string = "";

  constructor() { }

  ngOnChanges() {
    this.showDirect();
  }

  showDirect() {
    if (this.onDireccion.length > 0) {
      //this.opsr1r2(this.onOps);
      const a = setTimeout(() => {
        this.estilo = true;
      }, 3000);
    }
  }

}
