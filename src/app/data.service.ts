import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  newTask: any;
  listItems: Todo[] = [
    {
      task: 'fold clothes',
      completed: false,
    },
    {
      task: 'put clothes in dresser',
      completed: false,
    },
    {
      task: 'relax',
      completed: false,
    },
    {
      task: 'try to pet cat',
      completed: false,
    },
    {
      task: 'pet dog',
      completed: false,
    },
    {
      task: 'be awesome',
      completed: false,
    },
  ];

  getTodos() {
    return this.listItems;
  }

  addTask(newTask: string) {
    this.listItems?.push({
      task: newTask,
      completed: false,
    });
    this.newTask = '';
  }

  removeTask(todo: Todo) {
    this.listItems?.splice(this.listItems?.indexOf(todo), 1);
  }

  constructor() {}
}
