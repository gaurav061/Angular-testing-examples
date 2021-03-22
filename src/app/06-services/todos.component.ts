import { TodoService } from './todo.service';

export class TodosComponent {
  todos: any[] = [];
  message: string;

  constructor(private service: TodoService) {}

  /**
   * GET API call to get the list of initial todos list.
   */
  ngOnInit() {
    this.service.getTodos().subscribe((t: any) => (this.todos = [...t]));
  }

  /**
   * POST API call when a new todo is added.
   */
  add(): void {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  /**
   * DELETE API call to delete the todo.
   * @param id todo id to be deleted.
   */
  delete(id: number): void {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}
