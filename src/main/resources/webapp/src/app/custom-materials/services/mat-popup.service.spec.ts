import { TestBed } from '@angular/core/testing';
import { MatPopupService } from './mat-popup.service';
import { MatSnackBarModule } from '@angular/material';

describe('MatPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MatPopupService,
    ],
    imports: [
      MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const service: MatPopupService = TestBed.get(MatPopupService);
    expect(service).toBeTruthy();
  });
});
