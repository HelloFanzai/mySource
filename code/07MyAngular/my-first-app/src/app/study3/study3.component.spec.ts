import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study3Component } from './study3.component';

describe('Study3Component', () => {
  let component: Study3Component;
  let fixture: ComponentFixture<Study3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Study3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Study3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
