import { getCurrencies } from './getCurrencies';

describe('test currency array', () => {
  /**
   * We are testing if all the currencies listed in currencies = ['USD', 'AUD', 'EUR']
   * is same as result.
   */
  it('should contain all the listed currency', () => {
    const currencies = ['RS', 'AUD', 'EUR'];
    const result = getCurrencies();
    currencies.forEach((curr) => {
      expect(result).toContain(curr);
    });
  });
});
