import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load toDos from server', () => {
    let items = [
      { id: 1, title: 'title-1' },
      { id: 2, title: 'title-2' },
      { id: 3, title: 'title-3' },
    ];
    let service = TestBed.inject(TodoService);
    // let service = fixture.debugElement.injector.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(of(items));
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
    expect(component.todos.indexOf(items[0])).toBeGreaterThan(-1);
  });

  it('should get todos from promise', async(() => {
    let items = [
      { id: 1, title: 'title-1' },
      { id: 2, title: 'title-2' },
      { id: 3, title: 'title-3' },
    ];
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosWithPromise').and.returnValue(
      Promise.resolve(items)
    );
    component.getTodosByPromise();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
      expect(component.todos.indexOf(items[0])).toBeGreaterThan(-1);
    });
  }));

  it('should get todos from promise using fakeAsync', fakeAsync(() => {
    let items = [
      { id: 1, title: 'title-1' },
      { id: 2, title: 'title-2' },
      { id: 3, title: 'title-3' },
    ];
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosWithPromise').and.returnValue(
      Promise.resolve(items)
    );
    component.getTodosByPromise();
    tick();
    expect(component.todos.length).toBe(3);
    expect(component.todos.indexOf(items[0])).toBeGreaterThan(-1);
  }));
});
