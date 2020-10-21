import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BackButtonComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedModule { }
