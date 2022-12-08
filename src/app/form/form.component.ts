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
  
  //  ADD 10,7,3

  sendInfo = (): void => {
    const instruccion = this.text.split(" ")[0];
    const operandos = this.text.split(" ")[1].split(",").slice(0, 2);
    const direccion:string = this.text.split(" ")[1].split(",").slice(2, 3).toString();
    
    this.onInfo.emit(this.text);
    this.onOps.emit(operandos);
    this.onInstruct.emit(instruccion);
    this.onDireccion.emit(direccion);
  };

}
