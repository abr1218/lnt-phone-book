import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class = 'text-centre'>
      <ng-component></ng-component>
      <hr>
      <app-menu>
          <li class="nav-item" backToTop>
                        <a class="nav-link" href="#">Back to top</a>
       </li>
      </app-menu>      
    <p class = "redText">
    EIP © 2020 L&T Construction, All rights reserved
    </p>
   </div>`
  ,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
