import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event as RouterEvent } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuHandler } from '../services/menu-handler/menu-handler.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent {

  // Do place private members after public members, alphabetized. (https://angular.io/guide/styleguide#style-05-14)
  public menu: object[];
  public menuHandler: MenuHandler;
  // Avoid prefixing private properties and methods with an underscore. (https://angular.io/guide/styleguide#style-03-04)
  private router: Router;


  constructor(router: Router, menuHandler: MenuHandler) {

    this.router = router;
    this.menuHandler = menuHandler;

    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): boolean => {

            return (event instanceof NavigationEnd);

          }
        )
      )
      .subscribe(
        (event: NavigationEnd): void => {

          const snapshot = this.router.routerState.snapshot.root;

          if (snapshot['_routerState'].url !== '/menu') {

            if (this.menuHandler.hasMenuItemForUrl(snapshot['_routerState'].url)) {

              if (this.menuHandler.getBcMenu().length <= 1) {

                const newItem = this.menuHandler.getMenuItemForUrl(snapshot['_routerState'].url);
                this.menuHandler.addBcItemAsObj(
                  {
                    'title': newItem.title,
                    'url': '..' + newItem.path
                  }
                );
              }
            }
          } else {
            this.menuHandler.initBcMenu();
          }
        }
      );
  }

}
