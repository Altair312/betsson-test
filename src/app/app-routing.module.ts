import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './views/search/container/search-container/search-container.component';
import { NotFoundComponent } from './views/not-found/container/not-found.component';
import { MovieContainerComponent } from './views/movie/container/movie-view/movie-container.component';

const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: 'search/:query', component: SearchContainerComponent },
  { path: 'movie/:id', component: MovieContainerComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
