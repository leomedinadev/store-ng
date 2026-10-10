import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
  });

  it('should double the duration', () => {
    fixture.componentRef.setInput('$duration', 400);
    fixture.componentRef.setInput('$message', 'Hola');

    expect(component.$doubleDuration()).toBe(800);
  });

  it('should replace the message', () => {
    fixture.componentRef.setInput('$duration', 400);
    fixture.componentRef.setInput('$message', 'Hola');

    component.setMessage();

    expect(component.$message()).not.toBe('Hola');
  });
});
