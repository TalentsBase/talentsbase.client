import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarItemComponent } from './components/layout/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarItemComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    NavbarItemComponent
  ],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
