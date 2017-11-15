import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mytemplatevariable',
  templateUrl: './mytemplatevariable.component.html',
  styleUrls: ['./mytemplatevariable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MytemplatevariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onKey(valuename) {
          console.log(`Input value: ${valuename}`);
      }
}
