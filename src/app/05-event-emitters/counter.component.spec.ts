import { CounterComponent } from './counter.component'; 

describe('CounterComponent', () => {
  var component: CounterComponent; 

  beforeEach(() => {
    component = new CounterComponent();
  });

  it('should emit countChanged event when incremented', () => {
    let totalCount = null;
    component.countChanged.subscribe(count => totalCount = count);
    component.incrementCount();
    expect(totalCount).toBe(1);
  });
});