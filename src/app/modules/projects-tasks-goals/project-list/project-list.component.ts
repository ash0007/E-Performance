import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from '../service/project-management.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectsList: any;
  taskStatusConfig: any;
  teamListCardConfig: any;
  constructor(
    private pmService: ProjectManagementService
  ) {}

  ngOnInit(): void {
    this.pmService.getProjectsList().subscribe(data => {
      this.projectsList = data;
    });
    this.taskStatusConfig = {
      title: "Task Status",
      type: 'Pie',
      total: {
        title: "Total Task"
      },
      data: [25, 30, 20, 25],
      options: {
        donut: true,
        donutWidth: 40,
        showLabel: true,
        startAngle: 0,
        total: 100,
        plugins: [
          // Chartist.plugins.legend({
          //   position: 'bottom'
          // })
        ]
      }
    };
    this.teamListCardConfig = {
      title: "My Team",
      list: [
        {
          name: "Amanda Kherr",
          designation: "Designer",
          iconImage: "assets/img/faces/face-1.jpg"
        },
        {
          name: "Angel Johnson",
          designation: "Designer",
          iconImage: "assets/img/faces/face-2.jpg"
        },
        {
          name: "Babak Kherr",
          designation: "Designer",
          iconImage: "assets/img/faces/face-3.jpg"
        },
        {
          name: "Baha Johnson",
          designation: "Designer",
          iconImage: "assets/img/faces/face-4.jpg"
        },
        {
          name: "Angel Johnson",
          designation: "Designer",
          iconImage: "assets/img/faces/face-5.jpg"
        },
        {
          name: "Babak Kherr",
          designation: "Designer",
          iconImage: "assets/img/faces/face-6.jpg"
        }
      ]
    }
  }



}
