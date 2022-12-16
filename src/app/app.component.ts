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
  binaryInstruct: string = "";
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
      //console.log(`Received from child component: ${text}`);
    });
    this.subjectsService.onRs.subscribe((rs: string) => {
      //console.log(`Received from child component: ${rs}`);
    });
  }

  handleInstruct(instruccion: string) {
    this.handleBinaryInstruct(instruccion);
    return this.instruccion = instruccion;
  };

  handleBinaryInstruct(binaryInstruct: any) {
    switch (binaryInstruct) {
      case "ADD":
        return this.binaryInstruct = "00000001";

      case "SUB":
        return this.binaryInstruct = "00000010"

      case "MPY":
        return this.binaryInstruct = "00000011"

      case "DIV":
        return this.binaryInstruct = "00000100"

      default:
        return "0000"
        break;
    }
  };

  handleBinaryDirect(direct: string) {
    let binaryDirect = this.add(Number(direct).toString(2));
    return this.binaryDirect = binaryDirect;
  };

  handleDirect(direccion: string) {
    return this.add(this.direccion = direccion);
  };

  handleInfo(info: string) {
    this.subjectsService.onInfo.next(info);
  };

  handleOps(ops: string[]) {
    this.r1 = this.add(Number(ops[0]).toString(2));
    this.r2 = this.add(Number(ops[1]).toString(2));
    this.subjectsService.onRs.subscribe((text: string) => {
      console.log(`Received from child component: ${text}`);
    });
    
    return this.ops = ops;
  };

  getOnInfo() {
    return this.subjectsService.onInfo;
  }

  handleR1(r1: string) {
    return r1 = this.add(Number(this.ops[0]).toString(2));
  };
  handleR2(r2: string) {
    return r2 = this.add(Number(this.ops[1]).toString(2));
  };
  handleRs(rs: string) {
    this.subjectsService.onRs.next(rs);
    console.log(rs);
    
    return this.rs = rs;
  };
  add(r: any) {
    r = r.toString(2);
    
    for (let i = r.length - 1; i < 8; i++) {
      if (r.length < 8) {
        r = `0${r}`;
      } else {
        return r
      }
    }
  }

}
