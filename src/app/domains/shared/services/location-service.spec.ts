import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '@env/environment';
import { LocationService } from './location-service';

describe('LocationService', () => {
  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should request the locations without an origin', () => {
    service.getLocationsByOriginObs({}).subscribe();

    httpMock.expectOne(`${environment.apiUrl}/api/v1/locations`).flush([]);
  });

  it('should send the origin when it is known', () => {
    service.getLocationsByOriginObs({ origin: '-2.17,-79.92' }).subscribe();

    const req = httpMock.expectOne(
      (request) =>
        request.url === `${environment.apiUrl}/api/v1/locations` ||
        request.urlWithParams.startsWith(
          `${environment.apiUrl}/api/v1/locations?origin=`,
        ),
    );
    expect(req.request.urlWithParams).toContain('origin=-2.17');
    req.flush([]);
  });
});
