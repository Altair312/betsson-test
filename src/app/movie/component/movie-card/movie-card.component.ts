import { Component, OnInit, Input } from '@angular/core';
import { MovieView } from 'src/app/shared/models/search.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieView;

  constructor() {}

  ngOnInit(): void {}
}
