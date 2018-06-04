import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Todo } from './todo-model';
import { AppConfig } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl: string;

  constructor(private _http: HttpClient, private appConfig: AppConfig) {
    this.apiUrl = this.appConfig.apiBaseUrl;
  }

  test(): string{
    return 'test 123...';
  }
  getAllTodos(): Observable<Todo[]>{
    console.log('TodoService.getAllTodos: url:', this.apiUrl);
    return this._http.get(this.apiUrl + '/todos')
      .pipe(
        map(res => res['data'])
        );
  }

  addTodo(todo: Todo) {
    console.log('TodoService.addTodo todo', todo);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const apiUrl = this.apiUrl + '/todos/add';
    return this._http.post(apiUrl, JSON.stringify(todo),  httpOptions)
      .pipe(
       catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
