import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  beforeEach(() => {
    // This is main utility for testing similar to NgModule it will resolve the dependency.
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });

    // fixture has the access to debugElement and have helper functions like detectChange()
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should render total count', () => {
    // instance of the component created in beforeEach block.
    component.initialCount = 10;
    component.myCount = 1;
    fixture.detectChanges();
    // expect(component.totalCount).toBe(11);
    let debugElement = fixture.debugElement.query(By.css('.total-count'));
    let element: HTMLElement = debugElement.nativeElement;
    expect(element.innerText).toContain('11');
  });

  it('should increse total count by 1 when upVote is clicked', () => {
    let button = fixture.debugElement.query(By.css('.menu-up'));
    button.triggerEventHandler('click', null);
    // component.incrementCount();

    expect(component.totalCount).toBe(1);
  });
});
