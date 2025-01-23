import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TravelAppService } from './travel-app.service';

describe('TravelAppService', () => {
  let service: TravelAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TravelAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
