import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {GenericTableComponent} from './components/generic-table/generic-table.component';
import {AltaActorComponent} from './components/alta-actor/alta-actor.component';
import {ActoresListadoComponent} from './components/actores-listado/actores-listado.component';
import {ActorComponent} from './components/actor/actor.component';
import {AltaPeliculaComponent} from './components/alta-pelicula/alta-pelicula.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import {PeliculasListadoComponent} from './components/peliculas-listado/peliculas-listado.component';
import {WelcomePeliculaActorComponent} from './components/welcome-pelicula-actor/welcome-pelicula-actor.component';
import {PaisesListadoComponent} from './components/paises-listado/paises-listado.component';

const routes: Routes = [
  {path: 'welcome/pelicula/actor', component: WelcomePeliculaActorComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'genericTable', component: GenericTableComponent},
  {path: 'altaActor', component: AltaActorComponent},
  {path: 'actor', component: ActorComponent, children: [{path: 'listado', component: ActoresListadoComponent}]},
  {path: 'pelicula', component: PeliculaComponent, children: [{path: 'listado', component: PeliculasListadoComponent, data: {animation: 'isRight'}}], data: {animation: 'isRight'}},
  {path: 'pais/listado', component: PaisesListadoComponent},
  {path: 'altaPelicula', component: AltaPeliculaComponent},
  {path: 'altaPeliculaActor', component: WelcomePeliculaActorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}


