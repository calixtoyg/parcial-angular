import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public actor: string;


  constructor() { }

  ngOnInit(): void {
  }

  elevateActor(actor: string) {
    this.actor = actor;
  }
}
