import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pelicula-listado-modal',
  templateUrl: './pelicula-listado-modal.component.html',
  styleUrls: ['./pelicula-listado-modal.component.css']
})
export class PeliculaListadoModalComponent implements OnInit {
  @Input() selectedCountry: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
