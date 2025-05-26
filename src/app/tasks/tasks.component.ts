import {
  Component,
  computed,
  input,
  output,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../dummy-task';
import { Task } from '../models/task.model';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormGroup } from '@angular/forms';

import { TaskService } from '../service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  id = input.required<string>();
  showForm = signal(false);
  selectedTask!: Signal<Task[]>;
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.selectedTask = this.taskService.getUserTask(this.id);
  }

  onCompleteTask(id: string): void {
    console.log('click event triggered');

    this.taskService.removeTask(id);
  }

  onFormSubmit(event: FormGroup): void {
    this.taskService.onAddTask(event, this.id);
    this.onShowForm();
  }

  onShowForm(): void {
    this.showForm.update((prev) => !prev);
  }
}
