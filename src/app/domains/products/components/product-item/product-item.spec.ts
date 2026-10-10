import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from '@shared/models/product';
import { ProductItem } from './product-item';

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

describe('ProductItem', () => {
  let component: ProductItem;
  let fixture: ComponentFixture<ProductItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItem],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItem);
    component = fixture.componentInstance;
  });

  it('should render the product title', () => {
    fixture.componentRef.setInput('product', product);
    fixture.detectChanges();
    const title = (fixture.nativeElement as HTMLElement).querySelector('h3');
    expect(title?.textContent).toContain('Camiseta');
  });

  it('should emit the product when it is added to the cart', () => {
    fixture.componentRef.setInput('product', product);
    const emitted: Product[] = [];
    component.addToCart.subscribe((value) => emitted.push(value));

    component.addToCartHandler();

    expect(emitted).toEqual([product]);
  });
});
