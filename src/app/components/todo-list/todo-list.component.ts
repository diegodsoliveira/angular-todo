import { Component, ElementRef, ViewChild } from '@angular/core';

interface Task {
  name: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  tasks: Task[] = [];

  @ViewChild('todoName') todoInputRef: ElementRef<HTMLInputElement> = null!;

  addTask(name: string) {
    if (name) {
      this.tasks.push({ name });
      console.log(name);
      this.todoInputRef.nativeElement.value = '';
    }
  }

  removeTask() {
    this.tasks.pop();
  }
}
