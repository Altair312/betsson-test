import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../../shared/models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.sass'],
})
export class SearchListComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() {}

  ngOnInit(): void {}
}
