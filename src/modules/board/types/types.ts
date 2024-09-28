export type CreateColumnRequest = {
  name: string;
  board_id: number;
  seq: number;
};

export type Column = {
  id: number;
  board_id: number;
  name: string;
  seq: number;
  created_at: string;
  updated_at: string;
  tasks: Task[];
};

export type CreateTaskRequest = {
  name: string;
  column_id: number;
  seq: number;
};

export type Task = {
  id: number;
  column_id: number;
  title: string;
  seq: number;
  created_at: string;
  updated_at: string;
};

export type BoardResponse = {};
