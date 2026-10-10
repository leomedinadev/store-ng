import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from '@shared/models/product';
import { CartService } from '@shared/services/cart-service';
import { ListProducts } from './list-products';

const product: Product = {
  id: 1,
  title: 'Camiseta',
  description: 'Camiseta de algodón',
  price: 20,
  images: ['https://example.com/camiseta.png'],
  creationAt: '2025-01-01T00:00:00.000Z',
  updateAt: '2025-01-01T00:00:00.000Z',
  slug: 'camiseta',
  category: {
    id: 1,
    name: 'Ropa',
    image: 'https://example.com/ropa.png',
    slug: 'ropa',
    creationAt: '2025-01-01T00:00:00.000Z',
    updatedAt: '2025-01-01T00:00:00.000Z',
  },
};

describe('ListProducts', () => {
  let component: ListProducts;
  let fixture: ComponentFixture<ListProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProducts],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProducts);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the product to the shared cart', () => {
    const cartService = TestBed.inject(CartService);

    component.addToCart(product);

    expect(cartService.cart()).toEqual([product]);
    expect(component.cart().length).toBe(1);
  });
});
