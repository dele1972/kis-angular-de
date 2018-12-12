import { Component } from '@angular/core';

import MenuItems from '../../../assets/menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public menu: object[];

  constructor() {
    this.menu = MenuItems.main;
  }

}
