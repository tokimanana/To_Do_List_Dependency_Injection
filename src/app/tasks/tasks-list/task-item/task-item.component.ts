import { TASK_STATUS_OPTIONS, TaskStatusOption } from './../../task.model';
import { Component, computed, inject, input } from '@angular/core';


import { Task, TaskStatus } from '../../task.model';
import { TasksServiceToken } from '../../../app.module';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();
  tasksStatusOptions: TaskStatusOption = inject(TASK_STATUS_OPTIONS);
  private tasksService = inject(TasksServiceToken);

  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    this.tasksService.updateTaskStatus(taskId, newStatus);
  }
}
