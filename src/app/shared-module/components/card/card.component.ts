import { Component, Input, OnInit } from '@angular/core';

export interface CardInput {
  title: string;
  description: string;
  buttonLabel: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // Card Title.
  @Input() title: string;

  // Card Description.
  @Input() description: string;

  // Card Action Button Label.
  @Input() buttonLabel: string;

  constructor() {}

  ngOnInit() {}
}
