import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashittonComponent } from './washitton.component';

describe('WashittonComponent', () => {
  let component: WashittonComponent;
  let fixture: ComponentFixture<WashittonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashittonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashittonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
