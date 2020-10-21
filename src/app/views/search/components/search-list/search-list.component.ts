import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces';

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
