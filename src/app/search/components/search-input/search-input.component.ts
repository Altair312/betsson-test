import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  private DEBOUNCE_TIME = 600;

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        pluck('target', 'value'),
        filter((value: string) => value.length >= 2),
        map((value) => value)
      )
      .subscribe((value) => {
        this.search.emit(value);
      });
  }
}
