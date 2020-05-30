import { Component, OnInit, Input } from '@angular/core';
import { NavigationDataChangeService } from '../services/navigation-data-change.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerInfo;
  toolMenuList: any[] = [
    {
      name: "Feedback",
      
    },
    {
      name: "Projects/Tasks/Goals",
      items: [
        {
          name: "Projects"
        },
        {
          name: "My Tasks"
        },
        {
          name: "Team Tasks"
        },
        {
          name: "My Goal"
        },
        {
          name: "Team Goal"
        }
      ]
    },
    {
      name: "Skills",
      items: [
        {
          name: "My Skills"
        },
        {
          name: "Evaluate Employee Skills"
        }
      ]
    },
    {
      name: "Team",
      items: []
    }
  ];
  userManuList: any[] = [
    {
      name: "Snehal",
      items: [
        {
          name: "Switch Department"
        },
        {
          name: "Logout"
        }
      ]
    }
  ];
  constructor(private navDataChange: NavigationDataChangeService) { }

  ngOnInit(): void {
    this.navDataChange.currentHeaderInfo.subscribe(headerInfo => this.headerInfo = headerInfo);
  }
}
