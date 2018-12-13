import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event as RouterEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { MenuHandler } from '../services/menu-handler/menu-handler.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent {

  private router: Router;

  private menuHandler: MenuHandler;
  public menu: object[];

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

          var snapshot = this.router.routerState.snapshot.root;

          if (snapshot['_routerState'].url != "/menu") {

            if (this.menuHandler.hasMenuItemForUrl(snapshot['_routerState'].url)) {

              if (this.menuHandler.getBcMenu().length <= 1) {

                var newItem = this.menuHandler.getMenuItemForUrl(snapshot['_routerState'].url);
                this.menuHandler.addBcItemAsObj(
                  {
                    "title": newItem.title,
                    "url": ".." + newItem.path
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
