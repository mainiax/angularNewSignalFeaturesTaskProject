import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../ui/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TaskComponent, TaskFormComponent, TasksComponent],
  bootstrap: [],
  exports: [TasksComponent],
  imports: [SharedModule, FormsModule, CommonModule, ReactiveFormsModule],
})
export class TaskModule {}
