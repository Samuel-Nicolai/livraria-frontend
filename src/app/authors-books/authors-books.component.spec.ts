import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsBooksComponent } from './authors-books.component';

describe('AuthorsBooksComponent', () => {
  let component: AuthorsBooksComponent;
  let fixture: ComponentFixture<AuthorsBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
