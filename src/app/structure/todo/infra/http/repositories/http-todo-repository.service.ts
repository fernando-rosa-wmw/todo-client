import { Injectable } from '@angular/core';
import { ITodoRepository } from '../../../data/repositories/i-todo-repository';
import { Todo } from '../../../domain/entity/todo';
import { HttpHeader, HttpResponse, HttpServiceService } from 'src/app/shared/services/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpTodoRepositoryService implements ITodoRepository {

  constructor(
    readonly httpService: HttpServiceService
  ) {} 

  async listAllTodo(): Promise<Array<Todo>> {
    const headers: HttpHeader = {
      contentType: 'application/json',
      AcessControlAllowOrigin: "*"
    };

    const response: HttpResponse  = await this.httpService.post(environment.apiUrl + "/todo/listAll", headers, "");

    if (response.body! && response.body.todoList!) {
      const todoList: Array<Todo> = response.body.todoList;

      return todoList;
    } else {
      return []
    }
  }
}
