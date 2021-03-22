import { compute } from './compute';

// Describe is test suit, i.e all the test of file should go under this.
describe('test compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if it is posative number', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
