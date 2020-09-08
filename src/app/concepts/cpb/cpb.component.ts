import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

    //step 1: creaet a custom property 
    exp = 10;
  @Input() age = 25; // @Input() -- makes as custom property

  constructor() { }

  ngOnInit(): void {
  }

}
