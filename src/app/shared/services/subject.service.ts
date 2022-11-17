import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  showEmitter = new Subject<boolean>();

  constructor() { }
}
