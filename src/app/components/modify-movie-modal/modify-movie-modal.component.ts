import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../intrefaces/movie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modify-movie-modal',
  templateUrl: './modify-movie-modal.component.html',
  styleUrls: ['./modify-movie-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModifyMovieModalComponent implements OnInit {
  movie: Movie;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
