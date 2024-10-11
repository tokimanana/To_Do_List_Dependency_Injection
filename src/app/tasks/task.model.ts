import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TaskStatusOption = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOption>(
  'task-status-options'
);

export const TasksStatusOptions: TaskStatusOption = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export const tasksStatusOptionProvider: Provider = [{
  provide: TASK_STATUS_OPTIONS,
  useValue: TasksStatusOptions,
}]


export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
