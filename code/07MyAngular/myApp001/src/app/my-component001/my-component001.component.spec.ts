import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent001Component } from './my-component001.component';

describe('MyComponent001Component', () => {
  let component: MyComponent001Component;
  let fixture: ComponentFixture<MyComponent001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
