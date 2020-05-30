import { Component, OnInit } from '@angular/core';
// import { FlatTreeControl } from '@angular/cdk/tree';
// import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { NavigationDataChangeService } from '../../services/navigation-data-change.service';

export interface SideMenuNode {
    name: string;
    iconClass: string;
    route: string;
    isLanding?: boolean,
    children?: any[];
}

interface FlatNode {
    expandable: boolean;
    name: string;
    iconClass: string;
    level: number;
}

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    
    constructor(
        private router: Router,
        private navDataChange: NavigationDataChangeService
    ) {}
    // private transformFunc = (node: SideMenuNode, level:number) => {
    //     return {
    //         expandable: !!node.children && node.children.length > 0,
    //         name: node.name,
    //         iconClass: node.iconClass,
    //         level: level
    //     };
    // }
    // treeControl = new FlatTreeControl<FlatNode>( node => node.level, node => node.expandable);

    // treeFlattener = new MatTreeFlattener(
    //     this.transformFunc, node => node.level, node => node.expandable, node => node.children
    // )

    // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    // hasChild = (_: number, node: FlatNode) => node.expandable;

    sideMenuItems: SideMenuNode[] = [
        {
            "name": "Feedback",
            "iconClass": "icon-feedback",
            "route": "feedback",
            "children": [
                {
                    "name": "My Feedback"
                },
                {
                    "name": "Team Feedback"
                }
            ]
        },
        {
            "name": "Projects / Tasks / Goals",
            "iconClass": "icon-goals",
            "route": "projects-tasks-goals",
            "isLanding": false,
            "children": [
                {
                    "name": "Project List"
                },
                {
                    "name": "Task List"
                },
                {
                    "name": "Goals List"
                }
            ]
        },
        {
            "name": "Skills and Competency",
            "iconClass": "icon-skills",
            "route": "skills",
            "children": [
                {
                    "name": "Skills and Competency"
                },
                {
                    "name": "Skills and Competency"
                }
            ]
        },
        {
            "name": "Team",
            "iconClass": "icon-team",
            "route": "team",
            "children": [
                {
                    "name": "Team List"
                }
            ]
        },
        {
            "name": "Add Employee",
            "iconClass": "icon-team",
            "route": "employee",
            "children": [
                {
                    "name": "Add Employee",
                    "route": "add-employee"
                }
            ]
        },
        {
            "name": "Create Department",
            "iconClass": "icon-team",
            "route": "department",
            "isLanding": true,
            "children": [
                {
                    "name": "Create Department",
                    "route": "create-department"
                }
            ]
        }
    ]

    selectClick = (index) => {
        let routeInfo = this.sideMenuItems[index];
        if(routeInfo && routeInfo.route) {
            this.router.navigate([routeInfo.route]);
            this.navDataChange.changeHeaderInfo(routeInfo);
        }
    }
    ngOnInit(): void {
        let lendingModuleInfo = this.sideMenuItems.filter(_routerInfo => _routerInfo.isLanding)[0];
        if(lendingModuleInfo) {
            this.navDataChange.changeHeaderInfo(lendingModuleInfo);
            this.router.navigate([lendingModuleInfo.route]);
        }
    }
}
