import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() listItems: Todo | null = null;
  @Input() listItem: Todo | null = null;
  @Input() i: number = 0;

  @Output() removed = new EventEmitter<Todo>();

  // // function to complete a task
  // removeItem(todo: Todo) {
  //   this.removed.emit(true);
  // }

  // @Output() deleteTask = new EventEmitter<listItem> ();

  // delete() {
  //   this.deleteTask.emit(this.listItem)
  // }
  constructor() {}

  ngOnInit(): void {}

  markComplete() {
    console.log('clicked');
    // this.listItem?.completed = true;
  }

  remove() {
    if (this.listItem) {
      this.removed.emit(this.listItem);
    }
  }
}
