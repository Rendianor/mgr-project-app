import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspirator',
  templateUrl: './inspirator.component.html',
  styleUrls: ['./inspirator.component.scss']
})
export class InspiratorComponent implements OnInit {
  isVisible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
