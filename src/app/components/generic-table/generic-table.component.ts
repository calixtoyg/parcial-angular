import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  @Output() messageToEmit = new EventEmitter<string>()
  @Input() headers = [
    {name: '#'},
    {name: 'Country'},
    {name: 'Area'},
    {name: 'Population'},
  ];
  @Input() body = [
    {
      name: 'Argentina',
      flag: '1/1a/Flag_of_Argentina.svg',
      area: 278000000,
      population: 44490000
    },
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }
  ];
  loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  actorEvent(country: string) {
    this.messageToEmit.emit(country);
  }
}
