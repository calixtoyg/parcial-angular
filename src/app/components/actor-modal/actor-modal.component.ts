import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actor-modal',
  templateUrl: './actor-modal.component.html',
  styleUrls: ['./actor-modal.component.css']
})
export class ActorModalComponent {

  @Input() actor: any;

  constructor(public activeModal: NgbActiveModal) {
  }

}
