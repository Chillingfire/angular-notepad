import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  taskCount: number = 1;
  taskInput = " ";

  addTask(taskText:string) {
    console.log("Added task" + taskText);
    this.tasks.push({"text": taskText});
    this.taskCount++;
  }
}
