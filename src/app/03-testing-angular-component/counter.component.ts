/**
 * Counter component with intial count set to 0.
 */
export class CounterComponent {
  // initial value of counter.
  count = 0;

  /**
   * Method to increment the counter.
   */
  incrementCounter() {
    this.count++;
  }

  /**
   * Method to decrement the counter.
   */
  decrementCounter() {
    this.count--;
  }
}
