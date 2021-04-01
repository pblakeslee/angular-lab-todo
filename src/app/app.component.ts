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

  title = 'to-do-list';
}
