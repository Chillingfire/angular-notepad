import { Component, NgModule } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  taskCount: number = 1;
  taskInput:string = "";

  addTask() {
    if (this.taskInput.length > 0) {
      console.log("Added task" + this.taskInput);
      this.tasks.push({"text": this.taskInput, "completed" : false, "id" : this.taskCount});
      this.taskCount++;
      this.taskInput = "";
    }
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
