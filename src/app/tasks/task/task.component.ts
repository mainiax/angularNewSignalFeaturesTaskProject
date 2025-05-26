import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../models/task.model';

import { TaskService } from '../../service/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  private taskService: TaskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
