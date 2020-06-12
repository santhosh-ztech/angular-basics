import { Component, OnInit } from '@angular/core';
import { MenuItem } from './item-type';

@Component({
  selector: 'app-side-menu-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class SideMenuItemsComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Introduction',
      link: '/',
    },
    {
      label: 'Event & User Input Bindings',
      link: '/user-inputs',
    },
  ];
  selectedMenuItemLabel: string;
  constructor() {}

  ngOnInit() {}
  onSelectedMenuItem(label: string): void {
    this.selectedMenuItemLabel = label;
  }
}
