import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  beforeEach(() => {
    component = new CounterComponent();
  })
  it('should increment count if incemented', () => {
    component.incrementCounter();
    expect(component.count).toBe(1);
  });

  it('should decrement count if decremented', () => {
    component.decrementCounter();
    expect(component.count).toBe(-1);
  });
});
