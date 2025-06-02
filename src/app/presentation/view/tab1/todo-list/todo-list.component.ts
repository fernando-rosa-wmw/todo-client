import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';
import { IonGrid, IonCol, IonCheckbox, IonRow } from "@ionic/angular/standalone";
import { CheckboxChangeEventDetail } from '@ionic/angular';
import { Todo } from 'src/app/structure/todo/domain/entity/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [IonRow, 
    IonCheckbox,
    IonCol,
    IonGrid
  ]
})
export class TodoListComponent {

  @Input() todoList: WritableSignal<Array<Todo>> = signal([]);

  doneTodoList: Signal<Todo[]> = computed(() => this.todoList().filter(todo => todo.done));
  penddingTodoList: Signal<Todo[]> = computed(() => this.todoList().filter(todo => ! todo.done));

  constructor() { }

  toggleTodo(done: boolean, todoId: string) {
    this.todoList.update(todos =>
      todos.map(todo =>{        
        if (todo.id === todoId) {
          return { ...todo, done: done } 
        } else {
          return todo;
        }
      })
    );
  }

  handleCheckBox(event: CheckboxChangeEventDetail<boolean>, todoId: string) {
    this.toggleTodo(event.checked, todoId);
  }
}
