import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../intrefaces/actor';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modify-actor-modal',
  templateUrl: './modify-actor-modal.component.html',
  styleUrls: ['./modify-actor-modal.component.css']
})
export class ModifyActorModalComponent implements OnInit {
  @Input() actor: Actor;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
