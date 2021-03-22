import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo)
  }

  getTodos() { 
    return this.http.get('...')
  }

  getTodosWithPromise () {
    let result = new Promise<any>((resolve, reject) => {
      resolve(null)
    })

    return result;
  }

  delete(id) {
    return this.http.delete('...')
  }
}