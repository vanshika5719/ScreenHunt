import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private idSource = new BehaviorSubject<number>(-1);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: number) {
    this.idSource.next(id);
  }
}
