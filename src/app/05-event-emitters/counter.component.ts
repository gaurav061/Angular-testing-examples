
import { EventEmitter } from '@angular/core'; 

export class CounterComponent { 
  totalCount = 0; 
  countChanged = new EventEmitter();

  incrementCount() { 
    this.totalCount++;
    this.countChanged.emit(this.totalCount);
  }
}