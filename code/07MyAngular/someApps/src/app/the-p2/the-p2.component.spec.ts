import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheP2Component } from './the-p2.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TheP2Component', () => {
  let component: TheP2Component;
  let fixture: ComponentFixture<TheP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ TheP2Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TheP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
