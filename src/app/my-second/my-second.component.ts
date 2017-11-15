import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-second', // this is what is going to be called
  //in the html where i want to display
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MySecondComponent implements OnInit {
  image : string = "https://vetstreet.brightspotcdn.com/dims4/default/1567d53/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F66%2Fe14b90a41e11e087a80050568d634f%2Ffile%2FBasset-Hound-2-645mk062311.jpg";
  constructor() { }

  ngOnInit() {
  }

  isInputDisabled: boolean = false;

    toggleInput() {
        this.isInputDisabled = !this.isInputDisabled;
    }
}
