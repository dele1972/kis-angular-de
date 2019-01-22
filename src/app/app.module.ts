import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './showroom/menu/menu.component';
import { MeonComponent } from './showroom/meon/meon.component';
import { BreadcrumbComponent } from './showroom/breadcrumb/breadcrumb.component';
import { Error404Component } from './showroom/error404/error404.component';
import { MenuHandler } from './showroom/services/menu-handler/menu-handler.service';
import { I000AboutComponent } from './issues/i000-about/i000-about.component';
import { I002Parent2childTsaccessorComponent } from './issues/i002-parent2child-tsaccessor/i002-parent2child-tsaccessor.component';
import { ChildComponent } from './issues/i002-parent2child-tsaccessor/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MeonComponent,
    BreadcrumbComponent,
    Error404Component,
    I000AboutComponent,
    I002Parent2childTsaccessorComponent,
    ChildComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [MenuHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
