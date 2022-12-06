import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cpu-simulator';
  ops: string[] = [];
  instruccion: string = "";
  binaryDirect: string = "";
  direccion: string = "";
  r1: string = "";
  r2: string = "";
  rs: string = "";

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    // ---Multicasting via subject---
    // Podemos escuchar, también, a los eventos
    // (desde cualquier punto)
    /**Es útil si se necesita notificar a muchos componentes a la vez, de un cambio particular sin seguir una regla de jerarquía definida
      O sea, componentes que no necesariamente son padres/hijos */
    this.subjectsService.onInfo.subscribe((text: string) => {
      console.log(`Received from child component: ${text}`);
    });
  }

  handleInstruct(instruccion: string) {
    return this.instruccion = instruccion;
  };

  handleBinaryDirect(binaryDirect: string) {
    return this.binaryDirect = binaryDirect;
  };

  handleDirect(direccion: string) {
    return this.direccion = direccion;
  };

  handleInfo(info: string) {
    this.subjectsService.onInfo.next(info);
  };

  handleOps(ops: string[]) {
    return this.ops = ops;
  };

  getOnInfo() {
    return this.subjectsService.onInfo;
  }

  handleR1(r1: string) {
    return this.r1 = r1;
  };
  handleR2(r2: string) {
    return this.r2 = r2;
  };
  handleRs(rs: string) {
    return this.rs = rs;
  };

}
