import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import { MovieView } from 'src/app/shared/models/search.interface';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.sass'],
})
export class MovieContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}
  id = '';
  movie: MovieView;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchService.getSingleMovie(this.id).subscribe((response: any) => {
      this.movie = response.Movie;
    });
  }
}
