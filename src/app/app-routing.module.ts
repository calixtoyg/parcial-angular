import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {GenericTableComponent} from './components/generic-table/generic-table.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'genericTable', component: GenericTableComponent},
  {path: 'parent', component: GenericTableComponent, children: [{path: 'children', component: GenericTableComponent}]}
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


