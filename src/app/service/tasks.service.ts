import {
  Injectable,
  signal,
  Signal,
  WritableSignal,
  computed,
  effect,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';
import { dummyTasks } from '../../dummy-task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  // Signal holding the list of tasks
  private tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  constructor() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        this.tasks.set(JSON.parse(stored));
      } catch {
        this.tasks.set(dummyTasks);
      }
    } else {
      this.tasks.set(dummyTasks);
    }

    // Persist to localStorage whenever tasks change
    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    });
  }

  /**
   * Returns a signal of all tasks
   */
  getTaskSignal(): Signal<Task[]> {
    return this.tasks;
  }

  /**
   * Returns a computed signal filtered by user ID
   */
  getUserTask(userIdSignal: Signal<string>): Signal<Task[]> {
    return computed(() =>
      this.tasks().filter((t) => t.userId === userIdSignal())
    );
  }

  /**
   * Adds a new task and persists changes via effect
   */
  onAddTask(form: FormGroup, userIdSignal: Signal<string>): void {
    const newTask: Task = {
      id: Date.now().toString(),
      userId: userIdSignal(),
      title: form.value.enteredTitle,
      summary: form.value.enteredSummary,
      dueDate: form.value.enteredDate,
    };
    this.tasks.update((tasks) => [newTask, ...tasks]);
  }

  /**
   * Removes a task by its ID
   */
  removeTask(id: string): void {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
}
