import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NYCComponent } from './nyc.component';

describe('NYCComponent', () => {
  let component: NYCComponent;
  let fixture: ComponentFixture<NYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NYCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
