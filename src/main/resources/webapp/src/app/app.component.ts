import { Component } from '@angular/core';
import { MatPopupService } from './custom-materials/services/mat-popup.service';
import { PwaService } from './core/pwa/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private pwaService: PwaService, private snackBar: MatPopupService) {
    this.pwaService.getPromptObservable()
      .subscribe(event => {

        this.snackBar.showPopUpAction(
          'Add this application to the home menu',
          'Install',
          () => event.prompt()
          );
      });

    this.pwaService.getUpdateAvailableObservable()
      .subscribe(event => {
        this.snackBar.showPopUpAction(
          'There is an update available',
          'Install',
          () => window.location.reload());
      });
  }
}
