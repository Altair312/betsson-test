import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './container/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NotFoundComponent
  ],
})
export class NotFoundModule { }
