import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  // imports: [TaskComponent, NewTaskComponent],
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!:string;
  // ? means that name is optional
  @Input({ required: true }) name!: string;
  isAddingTask =  false;

  // Dependency Injection
  // private tasksService: TasksService;
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   return this.tasksService.removeTask(this.userId);
  // }

  onStartAddTasks() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date
  //   // })
  //   this.isAddingTask = false;
  //   // return this.tasksService.addTask(this.userId);
  // }
}