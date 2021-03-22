import { greet } from './greet';

describe('test greet', () => {
  /**
   * We are testing if user is part of the message.
   * other way of testing could be .toEqual, .toBe etc.
   */
  it('should include name in messsage', () => {
    expect(greet('user')).toContain('user');

    /**
     * one can assert the test case like this as well,
     * too specific if compoenent is modified the this will fail.
     */

    // expect(greet('user')).toBe('user');
  });
});
