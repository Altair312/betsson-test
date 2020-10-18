import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieContainerComponent } from './movie/container/movie-view/movie-container.component';

const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: 'movie/:id', component: MovieContainerComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
