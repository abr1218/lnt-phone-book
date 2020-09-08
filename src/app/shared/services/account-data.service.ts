import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
// 1
  accountName = 'ABR';
// 2.Create Behaviour subject with default value

private myAccount = new BehaviorSubject<any>(this.accountName);

// 3. create observable for BehaviorSubject
latestAccountName: Observable<any> = this.myAccount.asObservable();
// latest account name is subscriable
  constructor() {
  }
  updateAccountName(newName): void{
    console.log(newName);
    this.myAccount.next(newName);
  }
}