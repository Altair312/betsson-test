import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BackButtonComponent, SearchInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  exports: [
    BackButtonComponent,
    SearchInputComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedModule { }
