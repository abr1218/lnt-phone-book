import { Component, OnInit } from '@angular/core';
//import { AnyARecord } from 'dns';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText
    {
      color: green;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpritation
  appName = 'Phone book App!!!';
  exp = 20; // todo : work boolien, array, obj

  // Property bindind
  companyName = 'Lnt Construction';
  // Two way binding

courseName = 'Angular';
profileName: any;
skillsList: string[] = ['html', 'css', 'js'];
constructor() { }
  ngOnInit(): void {
  }

  getExp(): number{
    return this.exp;
  }
  clickHandler(evt): void{
    console.log(evt);
    alert('clicked');
  }

  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }
}
