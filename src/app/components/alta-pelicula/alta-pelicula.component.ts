import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Movie} from '../../intrefaces/movie';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../../intrefaces/actor';
import {Observable, Subscription} from 'rxjs';
import {MatSelectChange} from '@angular/material/select';
import {ActorsService} from '../../services/actors.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit, OnChanges, OnDestroy {
  subs: Subscription[] = [];

  genres = ['Action', 'Adventure', 'Family', 'Comedy', 'Comedy drama', 'Crime', 'Drama', 'Fantasy', 'Sci/fi', 'Horror', 'Romance', 'Thriller', 'War', 'Western'];
  @Input() save: boolean;
  @Input() modify: boolean;
  @Input() movie: Movie;
  peliculaForm: FormGroup;
  possibleActors: Observable<Actor[]>;
  selectedActors: Actor[] = [];
  @Input() preSelectedActor: Actor;
  @Output() movieToSave = new EventEmitter<Movie>();
  countries = [
    'Argentina',
    'Russia',
    'Canada',
    'United States',
    'China'
  ];


  constructor(private actorsService: ActorsService) {
  }

  ngOnDestroy(): void {
    this.subs.forEach(value => value.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.preSelectedActor?.currentValue && this.selectedActors.findIndex(value => value.id === this.preSelectedActor.id) === -1) {
      this.selectedActors.push(this.preSelectedActor);
    }
  }

  ngOnInit(): void {

    if (this.movie?.actors) {
      this.subs.push(this.actorsService.getByIds(this.movie.actors).subscribe(value => {
          this.selectedActors = value;
        }
      ));
    }

    this.possibleActors = this.actorsService.getAll();

    this.peliculaForm = new FormGroup({
      title: new FormControl(this.movie?.title, [Validators.required]),
      genre: new FormControl(this.movie?.genre, [Validators.required]),
      releaseDate: new FormControl(this.movie?.releaseDate, [Validators.required]),
      audience: new FormControl(this.movie?.audience, [Validators.required]),
      country: new FormControl(this.movie?.country, [Validators.required]),
      actors: new FormControl(this.movie?.actors, []),
    });
  }

  modifyMovie() {

  }

  saveMovie() {
    if (this.peliculaForm.valid) {
      this.movie = {...this.peliculaForm.value};
      const {actors, releaseDate} = this.peliculaForm.value;
      this.movie.actors = actors.map(eachActor => 'actors/' + eachActor.id);
      this.movie.releaseDate = new Date(releaseDate.year, releaseDate.month - 1, releaseDate.day).toISOString();
      this.movieToSave.emit(this.movie);
    }

  }

  setSelectedActors($event: MatSelectChange) {
    this.selectedActors = $event.value;
    this.peliculaForm.patchValue({actors: this.selectedActors});
    this.peliculaForm.get('actors').setErrors(null);

  }

  compareActors(actor1: any, actor2: any) {
    console.log('Esta entrando a la comparacion');
    if (actor1 && actor2) {
      return actor1.id === actor2.id;
    }
  }

  private byId(value: Actor[]) {
    value.filter(actor => this.movie.actors.includes('actors/' + actor.id));
  }
}
