import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActorsService} from '../../services/actors.service';
import {filter, map} from 'rxjs/operators';
import {ActoresListadoModalComponent} from '../actores-listado-modal/actores-listado-modal.component';
import {PeliculaListadoModalComponent} from '../pelicula-listado-modal/pelicula-listado-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import {PaisModalComponent} from '../pais-modal/pais-modal.component';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  constructor(private moviesService: MoviesService, private actorsService: ActorsService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.forEach(value => value.unsubscribe());
  }

  showMoviesForCountry($event: string) {
    const modalRef = this.modalService.open(PeliculaListadoModalComponent);
    modalRef.componentInstance.selectedCountry = $event;

  }

  showActorsForCountry($event: string) {
    const modalRef = this.modalService.open(ActoresListadoModalComponent);
    modalRef.componentInstance.selectedCountry = $event;
  }

  showCountry($event: any) {
    console.log($event)
    const modalRef = this.modalService.open(PaisModalComponent);
    modalRef.componentInstance.country = $event;

  }
}
