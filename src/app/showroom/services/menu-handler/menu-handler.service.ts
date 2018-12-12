import ConfMenuItems from '../../../../assets/menu.json';
import { BreadcrumbMenu } from './breadcrumb-menu.model';

export class MenuHandler {
  private _breadcrumbMenu: BreadcrumbMenu[] = [{ "title": "Menu", "url": "../menu" }];
  private _RawJsonMenu: object[] = ConfMenuItems.main;
  private _menuMap = [];
  private _arrCountFirstLevel = 0;
  private _arrCountSecondLevel = 0;

  constructor() {
    for (this._arrCountFirstLevel = 0; this._RawJsonMenu.length > this._arrCountFirstLevel; this._arrCountFirstLevel++) {

      for (
        this._arrCountSecondLevel = 0; 
        this._RawJsonMenu[this._arrCountFirstLevel]['issues'].length > this._arrCountSecondLevel; 
        this._arrCountSecondLevel++) {
          
          this._menuMap[this._RawJsonMenu[this._arrCountFirstLevel]['issues'][this._arrCountSecondLevel]['path']] = 
            this._RawJsonMenu[this._arrCountFirstLevel]['issues'][this._arrCountSecondLevel];
      }

    }
  }

  hasMenuItemForUrl(url: string) {
    return url in this._menuMap;
  }

  getMenuItemForUrl(url: string) {
    return this._menuMap[url];
  }

  initBcMenu() {
    this._breadcrumbMenu = [{ "title": "Menu", "url": "../menu" }];
  }

  addBcItemAsObj(tagName: BreadcrumbMenu) {
    this._breadcrumbMenu.push(tagName);
  }

  getBcMenu() {
    return this._breadcrumbMenu;
  }

}
