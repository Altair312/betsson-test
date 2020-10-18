import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
