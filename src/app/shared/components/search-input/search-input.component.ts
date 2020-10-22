import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GetMovies } from 'src/app/actions/search.actions';
import { SearchState } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @ViewChild('button', {read: ElementRef}) buttonElement: ElementRef;

  value = '';
  path = this.route.snapshot.paramMap.get('id');
  constructor(private store: Store<{ search: SearchState }>, private router : Router, private route : ActivatedRoute) {}

  onKeyUp(value: string) {
    this.value = value;
  }

  handleSearch(query: string): void {
    if (this.path) {
      this.router.navigate([`search/${query}`])
    } else {
      this.store.dispatch(GetMovies({payload: query}));
    }
  }

  ngAfterViewInit(): void {
    const inputSubmit = fromEvent(
      this.inputElement.nativeElement,
      'keyup'
    ).pipe(filter((e: KeyboardEvent) => e.key === 'Enter'));
    const buttonSubmit = fromEvent(this.buttonElement.nativeElement, 'click');

    const submit = merge(inputSubmit, buttonSubmit);

    submit.subscribe(() => this.handleSearch(this.value));
  }
}
