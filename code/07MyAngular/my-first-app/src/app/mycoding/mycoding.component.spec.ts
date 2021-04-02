import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycodingComponent } from './mycoding.component';

describe('MycodingComponent', () => {
  let component: MycodingComponent;
  let fixture: ComponentFixture<MycodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
