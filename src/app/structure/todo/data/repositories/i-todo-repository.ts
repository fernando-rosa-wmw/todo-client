import { Todo } from "../../domain/entity/todo";

export interface ITodoRepository {
    listAllTodo(): Promise<Array<Todo>>
}