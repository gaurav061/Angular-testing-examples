import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() initialCount = 0;
  @Input() myCount = 0;

  @Output() count = new EventEmitter();

  incrementCount() {
    if (this.myCount == 1)
        return;

    this.myCount++;

    this.count.emit({ myCount: this.myCount });
  }

  decrementCount() {
    if (this.myCount == -1)
        return;
        
    this.myCount--;

    this.count.emit({ myCount: this.myCount });
  }

  get totalCount() {
    return this.initialCount + this.myCount;
  } 
}
