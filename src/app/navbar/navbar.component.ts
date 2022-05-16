import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab:number;

  constructor() {
    this.tab=0;
  }

  ngOnInit(): void {
  }

  isSelected (num:number) : string{
    return this.tab == num ? "active" : "";
  }

  selectTab(num:number){
    this.tab=num
  }


}
