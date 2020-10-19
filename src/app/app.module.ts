import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieContainerComponent } from './movie/container/movie-view/movie-container.component';
import { searchReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchInputComponent,
    SearchListComponent,
    NotFoundComponent,
    MovieContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({movies: searchReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
