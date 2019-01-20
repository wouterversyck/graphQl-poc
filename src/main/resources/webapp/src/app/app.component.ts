import { Component } from '@angular/core';
import { PwaService } from './core/pwa/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private pwa: PwaService) {}
  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  getPromptEvent(): Event {
    return this.pwa.promptEvent;
  }
}
