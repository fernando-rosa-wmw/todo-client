import { Component, Input, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonList, IonItem, IonCheckbox } from "@ionic/angular/standalone";
import { Todo } from 'src/app/structure/todo/domain/entity/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [
    IonCheckbox, 
    IonItem, 
    IonList, 
    IonRow, 
    IonGrid
  ]
})
export class TodoListComponent  implements OnInit {

  @Input() todos!: Array<Todo>;
  pendingTodos: Array<Todo> = [];
  doneTodos: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
    this.buildTodoList();
  }

  private buildTodoList() {
    this.todos.forEach(item => {
      if (item.done) {
        this.doneTodos.push(item);
      } else {
        this.pendingTodos.push(item);
      }
    });
  }

}
