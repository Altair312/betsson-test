import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { searchReducer } from './reducers';
import { MovieEffects } from './effects/search.effects';

import { SearchContainerComponent } from './views/search/container/search-container/search-container.component';
import { SearchInputComponent } from './views/search/components/search-input/search-input.component';
import { SearchListComponent } from './views/search/components/search-list/search-list.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MovieContainerComponent } from './views/movie/container/movie-view/movie-container.component';
import { MovieCardComponent } from './views/movie/component/movie-card/movie-card.component';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchInputComponent,
    SearchListComponent,
    NotFoundComponent,
    MovieContainerComponent,
    MovieCardComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ search: searchReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([MovieEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
