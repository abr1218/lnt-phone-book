import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  // Sep 1: create custom event -- Create an boj for eventEmitter
  @Output() profileLoaded: EventEmitter<any>  = new EventEmitter<any>(); // step 2 @Output() will make profileLoaded as cutome event
  sendabledata = 'ABR';
  constructor() {
    console.log('inside constructor');
   }

  ngOnInit(): void {
    console.log('inside ngOnInit');
    // ideal place for ajax
    // step 3 : emit the custom event .
    this.profileLoaded.emit(this.sendabledata); // sending ABR to parent component
  }

  sendDataHandler(): void{

this.profileLoaded.emit('ABR'); // step 4: sending ABR to parent comp
  }

}
