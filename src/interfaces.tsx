export type Status = 'Not Started' | 'In Progress' | 'Finished'

export interface Task {
  title: string;
  dir?: string;
  description: string;
  completed: boolean;
  id: string;
  status: Status
}
