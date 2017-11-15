import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mytwowaybinding',
  templateUrl: './mytwowaybinding.component.html',
  styleUrls: ['./mytwowaybinding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MytwowaybindingComponent implements OnInit {
  username: string = "";
  constructor() { }

  ngOnInit() {
  }

}
