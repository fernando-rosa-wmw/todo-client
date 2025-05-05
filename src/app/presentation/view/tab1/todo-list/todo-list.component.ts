import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonGrid, IonCol, IonCheckbox } from "@ionic/angular/standalone";
import { Todo } from 'src/app/structure/todo/domain/entity/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [
    IonCheckbox,
    IonCol,
    IonGrid
  ]
})
export class TodoListComponent implements OnChanges {

  @Input() todoList?: Array<Todo>;
  doneTodoList: Array<Todo> = [];
  penddingTodoList: Array<Todo> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildTodoList();
  }

  private buildTodoList() {
    this.todoList!.forEach(todo => {
      if (todo.done) {
        this.doneTodoList.push(todo);
      } else {
        this.penddingTodoList.push(todo);
      }
    });
  }

}
