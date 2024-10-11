import { Component, computed, inject, signal } from '@angular/core';


import { TASK_STATUS_OPTIONS, tasksStatusOptionProvider } from '../task.model';
import { TasksServiceToken } from '../../app.module';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: [tasksStatusOptionProvider],
})
export class TasksListComponent {
  private TasksService = inject(TasksServiceToken);
  // private selectedFilter = signal<string>('all');
  private selectedFilter: string = 'all';
  tasksStatusOptions = inject(TASK_STATUS_OPTIONS);
  get tasks () {
    switch (this.selectedFilter) {
      case 'open':
        return this.TasksService.allTasks.filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.TasksService.allTasks.filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.TasksService.allTasks.filter((task) => task.status === 'DONE');
      default:
        return this.TasksService.allTasks;
    }
  };

  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
