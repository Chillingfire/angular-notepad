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
    this.tasks.push({"text": taskText, "completed" : false, "id" : this.taskCount});
    this.taskCount++;
  }

  completeTask(id:number) {
    this.tasks.map((t, i) => {
      if (i == id) {
        t.completed = !t.completed;
        console.log(t.text + " completed");
        return t;
      }
      return t;
    })
  }

  deleteTask(id:number) {
    this.tasks.map((t, i) => {
      if (i == id) {
        this.tasks.splice(i, 1);
      }
    })
  }
}
