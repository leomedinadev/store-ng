import { ReversePipe } from './reverse-pipe';

describe('ReversePipe', () => {
  it('should reverse the text', () => {
    expect(new ReversePipe().transform('roma')).toBe('amor');
  });
});
