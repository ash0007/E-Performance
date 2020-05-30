import { Component, OnInit, Input } from '@angular/core';
import { NavigationDataChangeService } from '../../services/navigation-data-change.service';

@Component({
  selector: 'app-subhead-content',
  templateUrl: './subhead-content.component.html',
  styleUrls: ['./subhead-content.component.css']
})
export class SubheadContentComponent implements OnInit {

  subheadInfo;
  constructor(private navDataChange: NavigationDataChangeService) { }

  ngOnInit(): void {
    this.navDataChange.currentHeaderInfo.subscribe(headerInfo => {
      if(headerInfo && headerInfo.children && headerInfo.children.length > 0) {
        this.subheadInfo = headerInfo.children[0];
      } else {
        this.subheadInfo = {
          name: ""
        }
      }
    });
  }

}
