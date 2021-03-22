import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t: any) => (this.todos = [...t]));
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }

  getTodosByPromise() {
    this.service.getTodosWithPromise().then((data) => (this.todos = data));
  }
}
