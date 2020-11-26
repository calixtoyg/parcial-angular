import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../intrefaces/actor';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() actor: Actor;
  @Input() body: string;
  @Input() title: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  borrarActor(actor: Actor) {
    this.activeModal.close(true);
  }
}
