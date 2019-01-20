import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PwaService {
  private promptEventEmitter: EventEmitter<Event> = new EventEmitter();

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEventEmitter.emit(event);
    });
  }

  getPromptEmitter(): EventEmitter<Event> {
    return this.promptEventEmitter;
  }
}
