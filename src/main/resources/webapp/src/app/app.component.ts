import { Component } from '@angular/core';
import { PwaService } from './core/pwa/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showInstall = false;
  private promptEvent;

  constructor(private pwaService: PwaService) {
    this.pwaService.getPromptEmitter()
      .subscribe(event => {
        this.promptEvent = event;
        this.showInstall = true;
      });
  }

  installPwa(): void {
    this.promptEvent.prompt();
  }
}
