import { TimeAgoPipe } from './time-ago-pipe';

describe('TimeAgoPipe', () => {
  it('should describe the distance from the date to now', () => {
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    expect(new TimeAgoPipe().transform(twoDaysAgo.toISOString())).toBe(
      '2 days',
    );
  });
});
