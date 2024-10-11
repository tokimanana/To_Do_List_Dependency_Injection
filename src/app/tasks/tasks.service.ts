import { inject, Injectable, signal } from '@angular/core';

import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks: Task[] = [];
  private loggingService = inject(LoggingService);

  get allTasks() {
    return this.tasks;
  }

  addTask(taskdata: { title: string; description: string }) {
    const newTask: Task = {
      ...taskdata,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    // this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.tasks = [...this.tasks, newTask];
    this.loggingService.log('New task added ' + taskdata.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    this.loggingService.log('Changed task status ' + newStatus);
  }
}
