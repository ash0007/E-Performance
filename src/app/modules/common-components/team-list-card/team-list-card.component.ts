import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-list-card',
  templateUrl: './team-list-card.component.html',
  styleUrls: ['./team-list-card.component.css']
})
export class TeamListCardComponent implements OnInit {

  @Input() listConfig: any;
  constructor() { }

  ngOnInit(): void {
  }

}
