import { Component } from '@angular/core';
import { CardInput } from './../shared-module/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cardItems: CardInput[] = [
    {
      title: 'Get Started',
      description: 'Check Form & Input Event Bindings',
      buttonLabel: 'Explore More...',
    },
    {
      title: 'Learn & Explore',
      description:
        'Learn about the fundamental design concepts of Angular app.',
      buttonLabel: 'Explore More...',
    },
    {
      title: 'Take a look',
      description:
        'Learn about the fundamental design concepts of Angular app.',
      buttonLabel: 'Explore More...',
    },
    {
      title: 'Learn & Explore',
      description:
        'Learn about the fundamental design concepts of Angular app.',
      buttonLabel: 'Explore More...',
    },
    {
      title: 'Take a look',
      description:
        'Learn about the fundamental design concepts of Angular app.',
      buttonLabel: 'Explore More...',
    },
    {
      title: 'Get Started',
      description: 'Check Form & Input Event Bindings',
      buttonLabel: 'Explore More...',
    },
  ];
  constructor() {}
}
