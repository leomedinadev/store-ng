import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductDetail } from './product-detail';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
  });

  it('should create with a product slug', () => {
    fixture.componentRef.setInput('slug', 'camiseta');
    expect(component).toBeTruthy();
    expect(component.slug()).toBe('camiseta');
  });

  it('should change the cover image', () => {
    fixture.componentRef.setInput('slug', 'camiseta');
    component.changeCover('https://example.com/otra.png');
    expect(component.$cover()).toBe('https://example.com/otra.png');
  });
});
