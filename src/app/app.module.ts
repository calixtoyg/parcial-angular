import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarHeaderComponent,
    FooterComponent,
    GenericTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
