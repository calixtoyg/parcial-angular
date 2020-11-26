import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Movie} from '../../intrefaces/movie';
import {MoviesService} from '../../services/movies.service';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyMovieModalComponent} from '../modify-movie-modal/modify-movie-modal.component';
import {ActoresListadoModalComponent} from '../actores-listado-modal/actores-listado-modal.component';
import {ActorsService} from '../../services/actors.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit, OnDestroy {
  movies: Observable<Movie[]>;
  subs: Subscription[] = [];
  @Input() selectedCountry: string;
  @Input() actions: boolean;


  constructor(public moviesService: MoviesService, private modalService: NgbModal, private actorsService: ActorsService) {
  }

  ngOnDestroy(): void {
    this.subs.forEach(value => value.unsubscribe());
  }

  ngOnInit(): void {
    this.movies = this.moviesService.getAll();
  }

  eventoShowMovie(row: Movie) {

  }

  modifyMovie(movie: Movie) {
    const modalRef = this.modalService.open(ModifyMovieModalComponent);
    modalRef.componentInstance.movie = movie;
    modalRef.componentInstance.modify = true;
  }

  deleteMovie(movie: Movie) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.body = 'Si realmente quiere borrar la pelicula presione confirmar';
    modalRef.componentInstance.title = '¿Queres borrar la pelicula?';
    modalRef.result.then(value => {
      if (value) {
        this.moviesService.delete(movie);
      }
    });
  }

  showActor(row: Movie) {
    const modalRef = this.modalService.open(ActoresListadoModalComponent);
    this.subs.push(this.actorsService.getByIds(row.actors).subscribe(actors => {
      modalRef.componentInstance.actors = actors;
    }));
  }

  getGenre(genre: string[]) {
    if (Array.isArray(genre)) {
      return genre.join(', ');
    }
    return '';
  }

}
