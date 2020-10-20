import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../../shared/models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.sass'],
})
export class SearchListComponent implements OnInit {
  @Input() movies: Movie[];

  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{movies: Movie[]}>) {}

  ngOnInit(): void {}
}
