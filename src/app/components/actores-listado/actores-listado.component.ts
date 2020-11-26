import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActorsService} from '../../services/actors.service';
import {Observable, of} from 'rxjs';
import {Actor} from '../../intrefaces/actor';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';
import {ModifyActorModalComponent} from '../modify-actor-modal/modify-actor-modal.component';

@Component({
  selector: 'app-actores-listado',
  templateUrl: './actores-listado.component.html',
  styleUrls: ['./actores-listado.component.css']
})
export class ActoresListadoComponent implements OnInit, OnChanges {
  loading: boolean;
  body: any;
  @Output() actor = new EventEmitter<any>();
  @Input() actores: Observable<Actor[]> | Actor[];
  @Input() asTable: boolean;
  @Input() withoutActions: boolean;
  @Input() withSelect: boolean;
  @Input() selectedCountry: string;

  constructor(public actorsService: ActorsService, private modalService: NgbModal) {
  }


  ngOnInit(): void {
    console.log('asTable   ', this.asTable);
    if (!this.actores) {
      this.actores = this.actorsService.getAll();
    }
  }


  eventoMostrarActor(actor: any): void {
    console.log('no anda');
    this.actor.emit(actor);
  }

  modifyActor(actor: Actor) {
    const modalRef = this.modalService.open(ModifyActorModalComponent);
    modalRef.componentInstance.actor = actor;
    modalRef.componentInstance.modify = true;
  }

  deleteActor(actor: Actor) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.body = 'Si realmente quiere borrar al actor presione confirmar';
    modalRef.componentInstance.title = '¿Queres borrar al actor?';
    modalRef.result.then(value => {
      if (value) {
        this.actorsService.delete(actor);
      }
    });
  }

  deleteActorFromList(actor: Actor): void {
    this.actor.emit(actor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.actores?.currentValue) {
      this.actores = of(changes.actores.currentValue);
    }
  }

}
