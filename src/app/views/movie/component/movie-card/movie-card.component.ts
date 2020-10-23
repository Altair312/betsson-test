import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/components/animations/fadeIn';
import { Movie } from 'src/app/shared/interfaces';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
  animations: fadeInAnimation
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}

