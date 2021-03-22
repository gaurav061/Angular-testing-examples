import { greet } from './greet';

describe('test greet', () => {
  it('should include name in messsage', () => {
    expect(greet('user')).toContain('user');
    // This is too specific if compoenent is modified the this will fail.
    // expect(greet('user')).toBe('user');
  });
});
