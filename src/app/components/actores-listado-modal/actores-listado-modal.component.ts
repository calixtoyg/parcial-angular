import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Actor} from '../../intrefaces/actor';

@Component({
  selector: 'app-actores-listado-modal',
  templateUrl: './actores-listado-modal.component.html',
  styleUrls: ['./actores-listado-modal.component.css']
})
export class ActoresListadoModalComponent implements OnInit, OnChanges {

  @Input() actors: Actor[];
  @Input() selectedCountry: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.selectedCountry + 'is selected')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.actors.currentValue) {
      this.actors = changes.actors.currentValue;
    }
  }

}
