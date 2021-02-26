import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhComponent } from './manh.component';

describe('ManhComponent', () => {
  let component: ManhComponent;
  let fixture: ComponentFixture<ManhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
