import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../side-menu/items/item-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerItems: MenuItem[] = [
    {
      label: 'Features',
    },
    {
      external: true,
      label: 'Docs',
      link: 'https://angular.io/docs',
    },
    {
      label: 'Resource',
    },
    {
      label: 'Events',
    },
    {
      label: 'Blogs',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
