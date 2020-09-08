import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;
  duplicateAccountName: any;
  randomText = 'THis is my first program';

  //myProfile: '';
  today: Date = new Date();

  constructor( private AccountDataService: AccountDataService)
  {

  }
  ngOnInit(): void {
    this.AccountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name;
      this.duplicateAccountName = name;
    });
  }
  updateAccountHandler(): void {
    console.log(this.duplicateAccountName);
    this.AccountDataService.updateAccountName(this.duplicateAccountName);
  }

}
