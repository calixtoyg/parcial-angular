import {Component, Input, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ActorsService} from '../../services/actors.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../../intrefaces/actor';

@Component({
    selector: 'app-alta-actor',
    templateUrl: './alta-actor.component.html',
    styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
    @Input() country: string;
    @Input() actor: Actor;
    date: NgbDateStruct;
    name: string;
    lastname: string;
    actorForm: FormGroup;
    sex: string;
    sexs = ['M', 'F'];
    @Input() birthDate: string | { year: number, month: number, day: number };
    @Input() save: boolean;
    @Input() modify: boolean;

    constructor(private actorsService: ActorsService) {
    }

    ngOnInit(): void {
        console.log(this.actor);
        if (this.actor?.birthDate) {
            const birthDate = new Date(this.actor.birthDate);
            this.birthDate = {year: birthDate.getFullYear(), month: birthDate.getMonth() + 1, day: birthDate.getDate()};
        }
        this.actorForm = new FormGroup({
            name: new FormControl(this.actor?.name, [Validators.required]),
            lastname: new FormControl(this.actor?.lastname, [Validators.required]),
            birthDate: new FormControl(this.birthDate, [Validators.required]),
            // sex: new FormControl(this.getSex(this.actor?.sex), [Validators.required]),
            sex: new FormControl(this.actor?.sex === 'M' ? 'Masculino' : 'Femenino', [Validators.required]),
        });
        console.log('actorForm: ', {...this.actorForm.value});
        if (this.actor) {
            this.country = this.actor.country;

        }

    }

    public saveActor() {
        // this.actorsService.save({name: })
        if (this.actorForm.valid) {
            const actor: Actor = this.getActor();
            console.log(actor);
            return this.actorsService.save(actor);
        }
    }

    public modifyActor() {
        if (this.actorForm.valid) {
            const actor = this.getActor();
            console.log(actor);
            return this.actorsService.update(actor);

        }
    }

    private getActor(): Actor {
        const actor: Actor = {...this.actorForm.value};
        actor.country = this.country;
        actor.sex = this.getSex(this.actorForm.get('sex').value);
        // @ts-ignore
        actor.birthDate = new Date(actor.birthDate.year, actor.birthDate.month - 1, actor.birthDate.day).toISOString();
        return actor;
    }

    private getSex(sex: string): 'M' | 'F' {
        if (sex) {
            return (sex === 'Masculino' || sex === 'M') ? 'M' : 'F';
        }
    }
}
