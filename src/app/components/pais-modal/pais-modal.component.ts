import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pais-modal',
  templateUrl: './pais-modal.component.html',
  styleUrls: ['./pais-modal.component.css']
})
export class PaisModalComponent implements OnInit {

  @Input() country: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
