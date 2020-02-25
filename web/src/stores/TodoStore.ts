import {computed, observable} from 'mobx';

export interface Todo {
    task: string,
    isComplete: boolean
}

class TodoStore {
    @observable todoList: Todo[] = [{task: "test",isComplete:true}];
    @computed get finishedTodoList () {
        return this.todoList.filter((todo:Todo)=> todo.isComplete);
    }
}

export const todoStore = new TodoStore();