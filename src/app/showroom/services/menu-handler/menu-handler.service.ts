import ConfMenuItems from '../../../../assets/menu.json';
import { BreadcrumbMenu } from './breadcrumb-menu.model';

export class MenuHandler {
  // Do place private members after public members, alphabetized. (https://angular.io/guide/styleguide#style-05-14)
  // Avoid prefixing private properties and methods with an underscore. (https://angular.io/guide/styleguide#style-03-04)
  private arrCountFirstLevel = 0;
  private arrCountSecondLevel = 0;
  private breadcrumbMenu: BreadcrumbMenu[] = [{ 'title': 'Menu', 'url': '../menu' }];
  private menuMap = [];
  private RawJsonMenu: object[] = ConfMenuItems.main;

  constructor() {
    for (this.arrCountFirstLevel = 0; this.RawJsonMenu.length > this.arrCountFirstLevel; this.arrCountFirstLevel++) {

      for (
        this.arrCountSecondLevel = 0;
        this.RawJsonMenu[this.arrCountFirstLevel]['issues'].length > this.arrCountSecondLevel;
        this.arrCountSecondLevel++) {

          this.menuMap[this.RawJsonMenu[this.arrCountFirstLevel]['issues'][this.arrCountSecondLevel]['path']] =
            this.RawJsonMenu[this.arrCountFirstLevel]['issues'][this.arrCountSecondLevel];
      }

    }
  }

  hasMenuItemForUrl(url: string) {
    return url in this.menuMap;
  }

  getMenuItemForUrl(url: string) {
    return this.menuMap[url];
  }

  initBcMenu() {
    this.breadcrumbMenu = [{ 'title': 'Menu', 'url': '../menu' }];
  }

  addBcItemAsObj(tagName: BreadcrumbMenu) {
    this.breadcrumbMenu.push(tagName);
  }

  getBcMenu() {
    return this.breadcrumbMenu;
  }

}
