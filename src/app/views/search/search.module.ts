import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { SearchContainerComponent } from './container/search-container/search-container.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SearchContainerComponent,
    SearchInputComponent,
    SearchListComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SearchContainerComponent,
    SearchInputComponent,
    SearchListComponent,
  ],
})
export class SearchModule {}
