import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSquareComponent } from './home-square.component';

describe('HomeSquareComponent', () => {
  let component: HomeSquareComponent;
  let fixture: ComponentFixture<HomeSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
