import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStudyComponent } from './server-study.component';

describe('ServerStudyComponent', () => {
  let component: ServerStudyComponent;
  let fixture: ComponentFixture<ServerStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
