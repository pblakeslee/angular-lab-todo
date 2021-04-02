import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoComponent } from './todo/todo.component';

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
      completed: true,
    },
    {
      task: 'relax',
      completed: false,
    },
    {
      task: 'try to pet cat',
      completed: true,
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

  title = 'to-do-list';

  // onRemove(event: any) {
  //   console.log('test');
  // }
}
