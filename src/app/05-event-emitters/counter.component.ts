import { EventEmitter } from '@angular/core';

export class CounterComponent {
  totalCount = 0;
  // EventEmitters are of type observables it takes type of value to be emitted.
  countChanged = new EventEmitter<number>();

  incrementCount() {
    this.totalCount++;
    this.countChanged.emit(this.totalCount);
  }
}
