import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WaveAudio } from './wave-audio';

describe('WaveAudio', () => {
  let component: WaveAudio;
  let fixture: ComponentFixture<WaveAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveAudio],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WaveAudio);
    component = fixture.componentInstance;
  });

  it('should start paused', () => {
    fixture.componentRef.setInput('audioUrl', 'audio.mp3');
    expect(component).toBeTruthy();
    expect(component.isPlaying()).toBeFalse();
  });
});
