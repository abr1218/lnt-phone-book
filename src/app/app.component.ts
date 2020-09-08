import { Component } from '@angular/core';
//Decorator 
@Component({
  selector: 'app-root', // element selector Mandatory 
  templateUrl: './app.component.html', // html also mandatory -- only one 
  styleUrls: ['./app.component.css'] // css optional & can be multiple
})
export class AppComponent {
  title = 'lnt-phone-book';
}
