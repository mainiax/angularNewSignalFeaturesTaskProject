import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Signal,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../models/user.model';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = output<string>();
  user = input.required<User>();
  selected = input.required<boolean>();

  get userValue(): User {
    const value = this.user();
    if (!value) {
      throw new Error('User input not set.');
    }
    return value;
  }

  imagePath = computed(() => {
    return '../../assets/users/' + this.userValue?.avatar;
  });

  onSelectUser() {
    this.selectedUser.emit(this.userValue.id);
  }
}
