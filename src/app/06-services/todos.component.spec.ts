import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should initialise todos with api call', () => {
    let toDos = [{ title: '...' }, { title: '../' }];
    spyOn(service, 'getTodos').and.returnValue(of(toDos));

    component.ngOnInit();
    expect(component.todos.length).toBe(2);
    expect(component.todos).toEqual(toDos);
  });

  it('should call the todos post when a new item is added', () => {
    // spyOn(service, 'add').and.returnValue(of());
    let spy = spyOn(service, 'add').and.callFake((t) => of());
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo from server', () => {
    let toDo = { id: 1 };
    let spy = spyOn(service, 'add').and.callFake((t) => of(toDo));
    component.add();
    expect(component.todos.indexOf(toDo)).toBeGreaterThan(-1);
  });

  it('should set the message prop if some error occured', () => {
    let toDoError = 'some error';
    let spy = spyOn(service, 'add').and.callFake((t) => throwError(toDoError));
    component.add();
    expect(component.message).toEqual(toDoError);
  });

  it('should call the server if confirm is clicked', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(of());
    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server if user cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(of());
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
