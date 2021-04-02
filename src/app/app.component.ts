import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  searchText: string | null = null;

  removeTask(event: any) {
    this.listItems?.splice(this.listItems?.indexOf(event), 1);
  }

  newTask: any;
  addTask() {
    this.listItems?.push({
      task: this.newTask,
      completed: false,
    });
    this.newTask = '';
  }

  title = 'to-do-list';

  // onRemove(event: any) {
  //   console.log('test');
  // }
}
