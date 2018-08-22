import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorksComponent } from './allworks.component';

describe('AllWorksComponent', () => {
  let component: AllWorksComponent;
  let fixture: ComponentFixture<AllWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
