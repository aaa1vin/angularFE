import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    // if component A is using in appComponent, then need to specify in exports + imports of app module
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule { }