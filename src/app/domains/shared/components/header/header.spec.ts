import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CartService } from '@shared/services/cart-service';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  it('should toggle the side menu', () => {
    expect(component.hideSideMenu()).toBeTrue();
    component.toggleSideMenu();
    expect(component.hideSideMenu()).toBeFalse();
  });

  it('should show the number of products in the cart', () => {
    TestBed.inject(CartService).cart.set([]);
    fixture.detectChanges();
    const badge = (fixture.nativeElement as HTMLElement).querySelector(
      'nav button div',
    );
    expect(badge?.textContent?.trim()).toBe('0');
  });
});
