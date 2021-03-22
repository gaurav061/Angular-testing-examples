import { getCurrencies } from './getCurrencies';

describe('test currency array', () => {
  it('should contain all the listed currency', () => {
    const currencies = ['USD', 'AUD', 'EUR'];
    const result = getCurrencies();
    currencies.forEach((curr) => {
      expect(result).toContain(curr);
    });
  });
});
