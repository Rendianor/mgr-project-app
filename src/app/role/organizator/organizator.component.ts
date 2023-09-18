import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.scss']
})
export class OrganizatorComponent implements OnInit {
  isVisible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
