import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study2Component } from './study2.component';

describe('Study2Component', () => {
  let component: Study2Component;
  let fixture: ComponentFixture<Study2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Study2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Study2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
