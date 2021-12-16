import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hellosw';
  updateCheckText = '';

  constructor(
    private update: SwUpdate, //
    private logUpdate: LogUpdateService
  ) {}

  updateCheck(): void {
    this.update //
      .checkForUpdate()
      .then(() => (this.updateCheckText = 'resolved'))
      .catch((err) => (this.updateCheckText = `rejected: ${err.message}`));
  }
}
