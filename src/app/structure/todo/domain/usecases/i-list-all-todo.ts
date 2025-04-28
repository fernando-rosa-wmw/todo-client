import { Todo } from "../entity/todo";

export interface IListAllTodo {
    listAllTodo(): Promise<Array<Todo>>;
}