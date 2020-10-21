import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { searchReducer } from './reducers/search.reducers';
import { MovieEffects } from './effects/search.effects';

import { environment } from '../environments/environment';
import { ViewsModule } from './views/views.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot({ search: searchReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([MovieEffects]),
    BrowserAnimationsModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
