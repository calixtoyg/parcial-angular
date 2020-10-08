import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { ActoresListadoComponent } from './components/actores-listado/actores-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarHeaderComponent,
    FooterComponent,
    GenericTableComponent,
    SpinnerComponent,
    AltaActorComponent,
    ActoresListadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
