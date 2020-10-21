import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { MovieModule } from './movie/movie.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchModule,
    MovieModule,
    NotFoundModule
  ],
  exports: [
    SearchModule,
    MovieModule,
    NotFoundModule
  ]
})
export class ViewsModule { }
