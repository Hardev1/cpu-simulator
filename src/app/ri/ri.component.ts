import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-ri',
  templateUrl: './ri.component.html',
  styleUrls: ['./ri.component.scss']
})
export class RiComponent implements OnInit {

  @Input() onInfo!: Subject<string>;
  info: string = '';
  estilo: boolean = false;
  myTimeout:any;

  constructor() {}

  ngOnInit() {
    this.onInfo.subscribe((text: string) => {
      this.info = text;
      this.estilo = true;
    });
  }

}
