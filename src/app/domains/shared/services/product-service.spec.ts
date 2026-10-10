import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '@env/environment';
import { ProductService } from './product-service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should request all the products', () => {
    service.getProducts({}).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/api/v1/products`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should filter the products by category slug', () => {
    service.getProducts({ category_slug: 'ropa' }).subscribe();

    httpMock
      .expectOne(`${environment.apiUrl}/api/v1/products?categorySlug=ropa`)
      .flush([]);
  });

  it('should request one product by slug', () => {
    service.getOne({ product_slug: 'camiseta' }).subscribe();

    httpMock
      .expectOne(`${environment.apiUrl}/api/v1/products/slug/camiseta`)
      .flush({});
  });

  it('should fail when no product identifier is given', () => {
    expect(() => service.getOne({})).toThrowError();
  });
});
