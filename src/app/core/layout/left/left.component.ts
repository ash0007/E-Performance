import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Output() headerInfo = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
}
