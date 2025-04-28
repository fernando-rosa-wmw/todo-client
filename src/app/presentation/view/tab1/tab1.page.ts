import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { Todo } from 'src/app/structure/todo/domain/entity/todo';
import { IListAllTodo } from 'src/app/structure/todo/domain/usecases/i-list-all-todo';
import { ListAllTodo } from 'src/app/structure/todo/data/usecase/list-all-todo';
import { HttpTodoRepositoryService } from 'src/app/structure/todo/infra/http/repositories/http-todo-repository.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TodoListComponent],
})
export class Tab1Page implements OnInit {

  readonly listTodoUsecase: IListAllTodo;

  todos: WritableSignal<Array<Todo>> = signal([]);
  statusMessage: WritableSignal<string> = signal("");

  constructor(
    readonly iTodoRepository: HttpTodoRepositoryService
  ) {
    this.listTodoUsecase = new ListAllTodo(iTodoRepository);
  }

  ngOnInit(): void {
    this.listTodoUsecase.listAllTodo().then(todos => {
      if (todos) {
        this.todos.set(todos);
      } else {
        this.statusMessage.set("Nehuma todo encontrado")
      }
    });
  }

}
