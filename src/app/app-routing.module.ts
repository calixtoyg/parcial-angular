import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {GenericTableComponent} from './components/generic-table/generic-table.component';
import {AltaActorComponent} from './components/alta-actor/alta-actor.component';
import {ActoresListadoComponent} from './components/actores-listado/actores-listado.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'genericTable', component: GenericTableComponent},
  {path: 'altaActor', component: AltaActorComponent},
  {path: 'actor', component: GenericTableComponent, children: [{path: 'listado', component: ActoresListadoComponent}]}
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


