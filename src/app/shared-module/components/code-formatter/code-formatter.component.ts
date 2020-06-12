import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from './../../services/toast-service';

@Component({
  selector: 'app-code-formatter',
  templateUrl: './code-formatter.component.html',
  styleUrls: ['./code-formatter.component.scss'],
})
export class CodeFormatterComponent implements OnInit {
  // Input code.
  @Input() code: string;
  constructor(public toastService: ToastService) {}

  ngOnInit() {}
  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code);
      await this.toastService.createToast('Copied to clipboard.');
    } catch (error) {
      console.log(error);
    }
  }
}
