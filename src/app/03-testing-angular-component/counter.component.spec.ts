import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  // declare the variable of type CounterComponent.
  let component: CounterComponent;

  /**
   *  create the instance of CounterComponent before each test to prevent side-effect.
   */
  beforeEach(() => {
    component = new CounterComponent();
  });

  /**
   * when incrementCounter is invoked the new value should be 1.
   */
  it('should increment count if incemented', () => {
    component.incrementCounter();
    expect(component.count).toBe(1);
  });

  /**
   * when decrementCounter is invoked the new value should be -1.
   * NOTE: Earlier spec has no effect on this one because we created a new instance,
   * before running this spec.
   */
  it('should decrement count if decremented', () => {
    component.decrementCounter();
    expect(component.count).toBe(-1);
  });
});
