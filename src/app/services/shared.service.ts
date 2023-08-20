import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,Subject } from 'rxjs';
import {subscriptions} from './../login-page/subscriptions.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  subs:subscriptions ={
    fname:'noUserLogged',
    lname:'noUserLogged',
    interest:'Drama',
    Disney: '0',
        HBO: '0',
        Netflix: '0',
        Prime: '0',
  }
  private idSource = new BehaviorSubject<number>(-1);
  private subscriptionsSource = new BehaviorSubject<subscriptions>(this.subs);
  getSubs(): Observable<subscriptions> {
    return this.subscriptionsSource.asObservable();
  }
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: number) {
    this.idSource.next(id);
  }

  changeSubscription(subs:subscriptions){
    this.subscriptionsSource.next(subs);
  }
}
