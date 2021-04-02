import { Pipe, PipeTransform } from '@angular/core';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';
import { Todo } from '../app/todo';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(listItems: Todo[], searchText: string | null) {
    if (!searchText) {
      return listItems;
    }
    return listItems.filter((listItem: Todo) =>
      listItem.task.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
