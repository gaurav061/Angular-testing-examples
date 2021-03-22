import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  /**
   * create an instance of TodoService and TodosComponent to avoid side-effect.
   */
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  /**
   * we are testing ngOnInit to be called and set local todos list with recieved value.
   * spy: it is used to intercept the method of any dependencies eternal to component and we can
   * alter the actual behaviour of the method
   */
  it('should initialise todos with api call', () => {
    let toDos = [{ title: '...' }, { title: '../' }];

    // Intercept getTodos of TodoService and return local todos list
    spyOn(service, 'getTodos').and.returnValue(of(toDos));

    component.ngOnInit();
    expect(component.todos.length).toBe(2);
    expect(component.todos).toEqual(toDos);
  });

  /**
   * Intercept post request and fake the API call.
   */
  it('should call the todos post when a new item is added', () => {
    // spyOn(service, 'add').and.returnValue(of());
    let spy = spyOn(service, 'add').and.callFake((t) => of());
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  /**
   * Another way to test the post API, by checking the instance to added todo in list.
   */
  it('should add new todo from server', () => {
    let toDo = { id: 1 };
    let spy = spyOn(service, 'add').and.callFake((t) => of(toDo));
    component.add();
    expect(component.todos.indexOf(toDo)).toBeGreaterThan(-1);
  });

  /**
   * Testing API error scenario, by mocking the erorr.
   */
  it('should set the message prop if some error occured', () => {
    let toDoError = 'some error';
    let spy = spyOn(service, 'add').and.callFake((t) => throwError(toDoError));
    component.add();
    expect(component.message).toEqual(toDoError);
  });

  /**
   * Testing the browser alert, by adding a spy on window object and mocking the response.
   */
  it('should call the server if confirm is clicked', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(of());
    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  /**
   * Testing alert box if cancel is clicked.
   */
  it('should NOT call the server if user cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(of());
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
