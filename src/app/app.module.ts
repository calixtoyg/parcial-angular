import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {NavbarHeaderComponent} from './components/navbar-header/navbar-header.component';
import {FooterComponent} from './components/footer/footer.component';
import {GenericTableComponent} from './components/generic-table/generic-table.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AltaActorComponent} from './components/alta-actor/alta-actor.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {ActoresListadoComponent} from './components/actores-listado/actores-listado.component';
import {ActorCardComponent} from './components/actor-card/actor-card.component';
import {ActorComponent} from './components/actor/actor.component';
import {ActorModalComponent} from './components/actor-modal/actor-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';
import {ModifyActorModalComponent} from './components/modify-actor-modal/modify-actor-modal.component';
import {AltaPeliculaComponent} from './components/alta-pelicula/alta-pelicula.component';
import {ActorPeliculaComponent} from './components/actor-pelicula/actor-pelicula.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import {PeliculasListadoComponent} from './components/peliculas-listado/peliculas-listado.component';
import {MatSelectModule} from '@angular/material/select';
import { WelcomePeliculaActorComponent } from './components/welcome-pelicula-actor/welcome-pelicula-actor.component';
import { ModifyMovieModalComponent } from './components/modify-movie-modal/modify-movie-modal.component';
import { ActoresListadoModalComponent } from './components/actores-listado-modal/actores-listado-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarHeaderComponent,
    FooterComponent,
    GenericTableComponent,
    SpinnerComponent,
    AltaActorComponent,
    ActoresListadoComponent,
    ActorCardComponent,
    ActorComponent,
    ActorModalComponent,
    ConfirmModalComponent,
    ModifyActorModalComponent,
    AltaPeliculaComponent,
    ActorPeliculaComponent,
    PeliculaComponent,
    PeliculasListadoComponent,
    WelcomePeliculaActorComponent,
    ModifyMovieModalComponent,
    ActoresListadoModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
