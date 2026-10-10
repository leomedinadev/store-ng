import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTagsService } from './meta-tags-service';

describe('MetaTagsService', () => {
  let service: MetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(MetaTagsService);
  });

  it('should apply the page meta tags', () => {
    service.updateMetaTags({
      title: 'Camiseta',
      description: 'Camiseta de algodón',
    });

    const meta = TestBed.inject(Meta);
    expect(TestBed.inject(Title).getTitle()).toBe('Camiseta');
    expect(meta.getTag('property="og:title"')?.content).toBe('Camiseta');
    expect(meta.getTag('name="description"')?.content).toBe(
      'Camiseta de algodón',
    );
  });

  it('should keep the default values for the tags that are not given', () => {
    service.updateMetaTags({ title: 'Camiseta' });

    const meta = TestBed.inject(Meta);
    expect(meta.getTag('property="og:url"')?.content).toBe(
      'https://store-ng.vercel.app',
    );
  });
});
