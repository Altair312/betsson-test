import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display 'Page not found'", () => {
    expect(compiled.querySelector('h1').innerHTML).toContain(
      'Error 404 - Page Not found'
    );
  });

  it('should contain a link to main page', () => {
    expect(compiled.querySelector('a').href).toEqual('');
    expect(compiled.querySelector('a').innerHTML).toContain(
      'Back to main page'
    );
  });
});
