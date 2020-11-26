import { Component, OnInit } from '@angular/core';
import {Actor} from '../../intrefaces/actor';
import {Movie} from '../../intrefaces/movie';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-welcome-pelicula-actor',
  templateUrl: './welcome-pelicula-actor.component.html',
  styleUrls: ['./welcome-pelicula-actor.component.css']
})
export class WelcomePeliculaActorComponent implements OnInit {
  public preSelectedActor: Actor;
  loading: boolean;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  preSelectValues($event: Actor) {
    this.preSelectedActor = $event;
  }

  saveMovie($event: Movie) {
    this.loading = true;
    this.moviesService.save($event).then(value => {
      console.log("Movie saved succesfuly");
    }).catch(console.error).finally(() => {
      this.loading = false
    });
  }
}
