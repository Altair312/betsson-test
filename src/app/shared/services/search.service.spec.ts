import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let injector: TestBed;
  let service: SearchService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    injector = getTestBed();
    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject(    
    [SearchService], (service: SearchService) => {    
    expect(service).toBeTruthy();    
    })); 
  
  it('getMovies() should return a list of movies', () => {
    const query = "john";
    service.getMovies(query).subscribe((res) => {
      expect(res).toContain("Response");
    })
    const req = httpMock.expectOne(`http://www.omdbapi.com/?apikey=f79aeba3&s=${query}`);
    expect(req.request.method).toBe('GET');
  })

  it('getMovies() should return an error', () => {
    const query = "johngasdfasa";
    service.getMovies(query).subscribe((res) => {
      expect(res).toContain("Response", "False");
      expect(res).toContain("Error");
    })
    const req = httpMock.expectOne(`http://www.omdbapi.com/?apikey=f79aeba3&s=${query}`);
    expect(req.request.method).toBe('GET');
  })

  it('getSingleMovie() should return a single movie', () => {
    const query = "tt2911666";
    service.getSingleMovie(query).subscribe((res) => {
      expect(res).toContain("Response", "True");
    })
    const req = httpMock.expectOne(`http://www.omdbapi.com/?apikey=f79aeba3&i=${query}`);
    expect(req.request.method).toBe('GET');
  })
});
