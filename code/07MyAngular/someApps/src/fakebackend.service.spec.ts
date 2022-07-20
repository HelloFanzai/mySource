import { TestBed } from '@angular/core/testing';

import { FakebackendService } from './fakebackend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FakebackendService', () => {
  let service: FakebackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [FakebackendService]
    });

    service = TestBed.inject(FakebackendService);
  });


  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
