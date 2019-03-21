import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptObservable = new Subject<BeforeInstallPromptEvent >();

  constructor(private swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', e => {
      this.promptObservable.next(event as BeforeInstallPromptEvent );
    });
  }

  /**
   * Notifies if browser allows installation of the PWA
   * @returns Observable of type InstallPrompt
   *          Use prompt() function to launch system install popup
    */
  getPromptObservable(): Observable<BeforeInstallPromptEvent > {
    return this.promptObservable;
  }

  /**
   * Notifies if new version of PWA is available
   *
   * @Returns Observable of type UpdateAvailableEvent
   */
  getUpdateAvailableObservable(): Observable<UpdateAvailableEvent> {
    return this.swUpdate.available;
  }
}

export interface BeforeInstallPromptEvent extends Event{
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}
