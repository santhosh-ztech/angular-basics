import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-formatter',
  templateUrl: './code-formatter.component.html',
  styleUrls: ['./code-formatter.component.scss'],
})
export class CodeFormatterComponent implements OnInit {
  // Input code.
  @Input() code: string;
  constructor() {}

  ngOnInit() {}
  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code);
    } catch (error) {
      console.log(error);
    }
  }
}
