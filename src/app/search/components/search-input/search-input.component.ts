import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @ViewChild('button') buttonElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  
  value = '';
  
  onKeyUp(value: string) {
    this.value = value;
  }

  
  ngAfterViewInit(): void {
    const inputSubmit = fromEvent(this.inputElement.nativeElement, "keyup").pipe(filter((e: KeyboardEvent) => e.key === "Enter"));
    const buttonSubmit = fromEvent(this.buttonElement.nativeElement, "click");

    const submit = merge(inputSubmit, buttonSubmit);

    submit.subscribe(() => this.search.emit(this.value));
  }
}
