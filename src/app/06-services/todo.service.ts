import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class TodoService {
  constructor(private http: HttpClient) {}

  /**
   * Mock post request
   * @param todo : instance of todo added by user.
   * @returns Observable
   */
  add(todo): Observable<any> {
    return this.http.post('...', todo);
  }

  /**
   * Mock get request for todos list object.
   * @returns Observable
   */
  getTodos(): Observable<any> {
    return this.http.get('...');
  }

  /**
   * Mock delete request.
   * @param id id of todo
   * @returns Observable
   */
  delete(id: number): Observable<any> {
    return this.http.delete('...');
  }
}
