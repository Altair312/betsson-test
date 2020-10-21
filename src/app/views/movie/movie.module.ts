import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from './container/movie-view/movie-container.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MovieContainerComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MovieCardComponent,
    MovieContainerComponent
  ]
})
export class MovieModule { }
