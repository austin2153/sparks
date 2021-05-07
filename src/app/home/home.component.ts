import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public testVal: string;
  
  constructor() { 
    this.testVal = '';
  }

  ngOnInit(): void {
    this.testVal = 'Data from testVal';
  }

}
