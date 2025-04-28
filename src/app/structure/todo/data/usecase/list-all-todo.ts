import { Todo } from "../../domain/entity/todo";
import { IListAllTodo } from "../../domain/usecases/i-list-all-todo";
import { ITodoRepository } from "../repositories/i-todo-repository";

export class ListAllTodo implements IListAllTodo {
    constructor(readonly iTodoRepository: ITodoRepository) {}
    
    async listAllTodo(): Promise<Array<Todo>> {
        const todos: Array<Todo> = await this.iTodoRepository.listAllTodo();

        if (todos!) {
            return todos;
        } else {
            return [];
        }
    }
}