import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ColorComponent } from './pages/color/color.component';
import { NavbarAdminLateralComponent } from './components/navbar-admin-lateral/navbar-admin-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    ColorComponent,
    NavbarAdminLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
