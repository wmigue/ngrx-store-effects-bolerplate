export interface TaskList {
  todos: Task[];
  total: number;
  skip: number;
  limit: number;
}

export interface Task {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const initialStateTask = {
  id: 0,
  todo: '',
  completed: false,
  userId: 0,
}


export const initialStateTaskList: TaskList = {
  todos: [],
  total: 0,
  skip: 0,
  limit: 0,
}