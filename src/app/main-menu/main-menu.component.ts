import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {name: 'Info', link: 'info'},
    {name: 'Map', link: 'map'},
  ];


  constructor() { }

  ngOnInit() {
  }
}

interface MenuItem {
  name: string;
  link: string;
}
