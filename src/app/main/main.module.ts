import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiService } from '../api.service';

import { MainComponent } from './main.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'movies', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieDetialsComponent,
    MovieFormComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
