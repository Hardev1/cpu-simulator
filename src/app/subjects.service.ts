import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  onInfo = new Subject<string>();
  onRs = new Subject<string>();

  constructor() { }
}
