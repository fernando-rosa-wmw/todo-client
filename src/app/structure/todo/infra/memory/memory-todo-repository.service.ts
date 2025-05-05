import { Injectable } from '@angular/core';
import { TodoRepository } from '../../data/repositories/todo-repository';
import { ListAllTodoOutput } from '../../domain/dto/list-all-todo-output';
import { Todo } from '../../domain/entity/todo';

@Injectable({
  providedIn: 'root'
})
export class MemoryTodoRepositoryService implements TodoRepository {

  listOfTodo: Array<Todo> = [
    {
      id: '123',
      name: 'Cafezera top',
      limitDate: '2025-05-22',
      done: false
    },
    {
      id: '456',
      name: 'Bolaxa top',
      limitDate: '2025-05-27',
      done: true
    }
  ];

  constructor() { }

  listAllTodo(): Promise<ListAllTodoOutput> {
    return Promise.resolve({
      message: "Deu boa",
      todoList: this.listOfTodo
    });
  }
}