import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemformsComponent } from './temforms.component';

describe('TemformsComponent', () => {
  let component: TemformsComponent;
  let fixture: ComponentFixture<TemformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
