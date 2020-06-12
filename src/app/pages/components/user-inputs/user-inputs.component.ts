import { Component } from '@angular/core';

class InformationCardInterface {
  type: string;
  syntax: string;
  category: string;
}

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss'],
})
export class UserInputsComponent {
  informationCards: InformationCardInterface[] = [
    {
      type: 'Interpolation Property Attribute Class Style',
      syntax: `
{{expression}}
[target]="expression"
bind-target="expression"`,
      category: 'One-way from data source to view target',
    },
    {
      type: 'Event',
      syntax: `
(target)="statement"
on-target="statement"
      `,
      category: 'One-way from view target to data source',
    },
    {
      type: 'Two-way',
      syntax: `
[(target)]="expression"
bindon-target="expression"
      `,
      category: 'Two-way',
    },
  ];
  titles: string[] = ['Type', 'Syntax', 'Category'];
  constructor() {}
}
