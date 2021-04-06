import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchText: string | null = null;
  title = 'to-do-list';
  newTask: any;
  listItems: Todo[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.listItems = this.data.getTodos();
  }
  addTask(newTask: string) {
    this.data.addTask(newTask);
  }
  removeTask(todo: Todo) {
    this.data.removeTask(todo);
  }
}
