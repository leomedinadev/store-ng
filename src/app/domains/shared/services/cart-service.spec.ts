import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Product } from '@shared/models/product';
import { CartService } from './cart-service';

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

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(CartService);
  });

  it('should start empty', () => {
    expect(service.cart()).toEqual([]);
    expect(service.total()).toBe(0);
  });

  it('should add products and compute the total', () => {
    service.addToCart(product);
    service.addToCart({ ...product, id: 2, price: 15 });

    expect(service.cart().length).toBe(2);
    expect(service.total()).toBe(35);
  });
});
