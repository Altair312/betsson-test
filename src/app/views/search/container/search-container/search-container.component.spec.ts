import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SearchContainerComponent } from './search-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { SearchState } from 'src/app/shared/interfaces';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;
  let router: Router;
  let store: MockStore<SearchState>;

  const initialState: SearchState = {
    movies: [],
    loading: false,
    totalResults: 0,
    query: 'test',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchContainerComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        SharedModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
  });

  afterEach(() => fixture.destroy());

  it('should be working', () => {
    expect(component).toBeTruthy();
  });
});
