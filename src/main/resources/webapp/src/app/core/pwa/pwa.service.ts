import { Injectable } from '@angular/core';

@Injectable()
export class PwaService {

  promptEvent;

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
