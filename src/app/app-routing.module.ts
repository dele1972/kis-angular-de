import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './showroom/menu/menu.component';
import { Error404Component } from './showroom/error404/error404.component';

/** @ToDo: import parent issue component below */
import { I000AboutComponent } from './issues/i000-about/i000-about.component';
import { I001Parent2childComponent } from './issues/i001-parent2child/i001-parent2child.component';
import { I002Parent2childTsaccessorComponent } from './issues/i002-parent2child-tsaccessor/i002-parent2child-tsaccessor.component';


/** @ToDo: enhance routes with new parent issue component */
const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'about',
    component: I000AboutComponent
  },
  {
    path: 'i001-parent2child',
    component: I001Parent2childComponent
  },
  {
    path: 'i002-parent2child-tsaccessor',
    component: I002Parent2childTsaccessorComponent
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
