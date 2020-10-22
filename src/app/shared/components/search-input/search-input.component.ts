import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @ViewChild('button', {read: ElementRef}) buttonElement: ElementRef;

  value = '';
  path = this.route.snapshot.params.id;
  constructor(private router : Router, private route : ActivatedRoute) {}

  onKeyUp(value: string) {
    this.value = value;
  }

  handleSearch(query: string): void {
    if (query.length)  {
        this.router.navigate([`search/${query}`])
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
