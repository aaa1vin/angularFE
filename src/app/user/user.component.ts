import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //2. @Input({ required: true }) avatar !: string;
  //2. @Input({ required: true }) name !: string;
  //2. @Input({ required: true }) id !: string;

  // 2. Create an object instead of declaring an instance
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // 1.  select = output<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // SIGNAL METHOD
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(id : string) {
    this.select.emit(this.user.id);

    // 1. if using the latter method will be: this.select.emit();

    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  };
}