import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-myeventbinding',
  templateUrl: './myeventbinding.component.html',
  styleUrls: ['./myeventbinding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyeventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  recordAllTheKeyStrokes(someevent) {
          console.log(`Key inserted: ${someevent.key}`);
          //console.log(`Input value: ${event.currentTarget.value}`);
      }
}
