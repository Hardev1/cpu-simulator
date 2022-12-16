import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onInfo: EventEmitter<string> = new EventEmitter<string>();
  @Output() onOps: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInstruct: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDireccion: EventEmitter<string> = new EventEmitter<string>();
  text: string = '';

  constructor() { }

  /*ADD 10,7,3
SUB 8,4,9
MPY 1,5,2
DIV 4,2,5*/

  sendInfo = (): void => {
    const programa: string[] = this.text.split("\n");
    let i = 0;
    console.log(programa);
    for (let j = 0; j <= 1; j++) {
      
      if (i == 0) {
        const instruccion = programa[0].split(" ")[0];
        const operandos = programa[0].split(" ")[1].split(",").slice(0, 2);
        const direccion: string = programa[0].split(" ")[1].split(",").slice(2, 3).toString();
  
        this.onInfo.emit(programa[0]);
        this.onOps.emit(operandos);
        this.onInstruct.emit(instruccion);
        this.onDireccion.emit(direccion)
        i = i + 1;
      } else {
        const b = setInterval(() => {
          console.log(i);
          const instruccion = programa[i].split(" ")[0];
          const operandos = programa[i].split(" ")[1].split(",").slice(0, 2);
          const direccion: string = programa[i].split(" ")[1].split(",").slice(2, 3).toString();
          this.onInfo.emit(programa[i]);
          this.onOps.emit(operandos);
          this.onInstruct.emit(instruccion);
          this.onDireccion.emit(direccion);
          i = i + 1;
          if (i == programa.length) {
            clearInterval(b);
          }
        }, 17000);
    }
    }

  };

}
