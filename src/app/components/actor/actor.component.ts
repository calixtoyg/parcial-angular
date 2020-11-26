import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActorModalComponent} from '../actor-modal/actor-modal.component';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  loading: boolean;
  mostrarActor: boolean;
  public actor: any;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  loadActor($event: any) {
    this.mostrarActor = true;
    this.actor = $event;
    const modalRef = this.modalService.open(ActorModalComponent);
    modalRef.componentInstance.actor = $event;
  }
}
