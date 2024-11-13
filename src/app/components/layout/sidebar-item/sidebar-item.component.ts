import {Component, Input} from '@angular/core';
import sidebarItem from '../../../../models/sidebarItem';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {
  @Input("item") item! : sidebarItem
}
