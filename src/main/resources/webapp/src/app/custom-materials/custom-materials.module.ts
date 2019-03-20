import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatTableModule, MatMenuModule, MatSnackBarModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPopupService } from './services/mat-popup.service';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
  ],
  providers: [
    MatPopupService
  ],
  declarations: []
})
export class CustomMaterialsModule { }
