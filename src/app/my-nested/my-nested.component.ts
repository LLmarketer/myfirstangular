import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyNestedComponent implements OnInit {
  animals: Array<Object> = [
    {
      id: 1,
      category: 'mammal',
      name: 'Dog'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Duck'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Elephant'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Snake'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
