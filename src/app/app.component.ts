import { HeaderComponentComponent } from './header-component/header-component.component';
import { Component, computed, Signal, signal } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId = signal<String>('');
  UserSelected = computed(() =>
    this.users.find((i) => i.id == this.selectedUserId())
  );

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
