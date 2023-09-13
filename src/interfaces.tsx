export type Status = 'NotStarted' | 'InProgress' | 'Finished'

export interface Task {
  title: string;
  dir?: string;
  description: string;
  completed: boolean;
  id: string;
  status: Status
}
