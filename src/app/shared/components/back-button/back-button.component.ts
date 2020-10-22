import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'shared-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.sass']
})
export class BackButtonComponent  {

  constructor(private location: Location) { }

  onClick() {
    this.location.back();
  }

}
