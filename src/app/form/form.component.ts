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
  @Output() onBinaryDirect: EventEmitter<any> = new EventEmitter<any>();
  text: string = '';

  constructor() { }
  
  //  ADD 10,7,3

  sendInfo = (): void => {
    const instruccion = this.text.split(" ")[0];
    const operandos = this.text.split(" ")[1].split(",").slice(0, 2);
    const direccion:any = this.text.split(" ")[1].split(",").slice(2, 3).toString();
    const binaryDirect = direccion.toString(2);
    
    this.onInfo.emit(this.text);
    this.onOps.emit(operandos);
    this.onInstruct.emit(instruccion);
    this.onDireccion.emit(direccion);
    this.onBinaryDirect.emit(binaryDirect);
  };

}
