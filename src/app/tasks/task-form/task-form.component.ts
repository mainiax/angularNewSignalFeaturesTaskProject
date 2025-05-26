import { Component, output, signal, Type } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  cancel = output<void>({ alias: 'taskCancel' });
  data = output<FormGroup>({ alias: 'formData' });

  taskForm = new FormGroup({
    enteredTitle: new FormControl('', Validators.required),
    enteredSummary: new FormControl('', Validators.required),
    enteredDate: new FormControl('', Validators.required),
  });

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.data.emit(this.taskForm);
  }
}
