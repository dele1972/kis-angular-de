import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-breadcrumb></app-breadcrumb><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'kis-angular-de';
}
