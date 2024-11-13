import {Component, OnInit} from '@angular/core';
import sidebarItem from '../../models/sidebarItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  // Les différents items de la sidebar
  sidebarItems! : sidebarItem[]
  ngOnInit() {
    this.sidebarItems = [
      {
        id : 1,
        title : "Dashboard",
        icon : "pi pi-chart-line",
        active: false,
        activeColor: "text-yellow-300",
        linkForRouter: ""
      },
      {
        id : 2,
        title : "Projects",
        icon : "pi pi-box",
        active: false,
        activeColor: "text-yellow-300",
        linkForRouter: "projects"
      },
      {
        id : 3,
        title : "Talents",
        icon : "pi pi-address-book",
        active: false,
        activeColor: "text-yellow-300",
        linkForRouter: "talents"
      },
      {
        id : 4,
        title : "Clients",
        icon : "pi pi-wallet",
        active: false,
        activeColor: "text-yellow-300",
        linkForRouter: "clients"
      },
    ]
  }

  setActive(id: number){
    this.sidebarItems.forEach(item => {
      item.active = false;
    })
    this.sidebarItems.find(item => item.id == id)!.active = true
  }
}
