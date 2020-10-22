import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from 'src/app/shared/interfaces';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
  let router: Router;
  let compiled: any;

  const testData: Movie[] = [
    {
      imdbID: 'tt1494185',
      Poster: 'www.test.com',
      Title: 'Test title',
      Year: 1939,
      Type: 'movie',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchListComponent],
      imports: [RouterTestingModule.withRoutes([]), BrowserAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SearchListComponent);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    component.movies = testData;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should be working', () => {
    expect(component).toBeTruthy();
  });

  it('should create a single movie card', () => {
    expect(compiled.querySelector('.movie-card')).toBeTruthy();
  });

  it('should have movie card link to movie view', () => {
    const link = compiled.querySelector('.movie-link');
    expect(link).toBeTruthy();
    expect(link.href).toEqual(
      `http://localhost:9876/movie/${testData[0].imdbID}`
    );
  });
});
