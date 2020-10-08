import {Component, Input, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ActorsService} from '../../services/actors.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  @Input() country: string;
  date: NgbDateStruct;
  name: string;
  lastname: string;
  actorForm: FormGroup;
  sex: string;
  sexs = ['M', 'F'];

  constructor(private actorsService: ActorsService) {
  }

  ngOnInit(): void {
    this.actorForm = new FormGroup({
      name: new FormControl(this.name, [Validators.required]),
      lastname: new FormControl(this.lastname, [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
      sex: new FormControl(this.sex, [Validators.required]),
    });
  }

  public saveActor() {
    // this.actorsService.save({name: })
    let actor = {...this.actorForm.value};
    actor.date = new Date(actor.date.year, actor.date.month - 1, actor.date.year).getTime();
    // this.actorsService.save(actor);
    this.actorsService.save(actor);

  }
}
