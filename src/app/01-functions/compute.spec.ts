import { compute } from './compute';

/**
 * Describe is test suit which is collection of individual spec.
 * you can have multiple suit per file
 */
describe('test compute', () => {
  /**
   * it: This is single test.
   * Skip test - prefix with 'x' i.e xit
   */
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if it is positive number', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
