import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  // declare the varibale of type CounterComponent
  var component: CounterComponent;

  /**
   * Create a new instance of component to prevent any side-effect.
   */
  beforeEach(() => {
    component = new CounterComponent();
  });

  /**
   * We are testing the EventEmitter insatnce of the component.
   * e.g. local variable totalCount will be updated with new value when incrementCount is invoked
   * you can test any other observable instance with similar approach like state change in component,
   * due to side effect.
   */
  it('should emit countChanged event when incremented', () => {
    let totalCount = null;
    component.countChanged.subscribe((count) => (totalCount = count));
    component.incrementCount();
    expect(totalCount).toBe(1);
  });
});
