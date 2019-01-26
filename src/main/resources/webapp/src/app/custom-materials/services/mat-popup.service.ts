import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MatPopupService {

  constructor(private snackBar: MatSnackBar) { }

  showPopUpAction(message: string, actionLabel: string, action: () => void) {
    this.snackBar.open(message, actionLabel)
      .onAction()
      .subscribe(action);
  }
}
