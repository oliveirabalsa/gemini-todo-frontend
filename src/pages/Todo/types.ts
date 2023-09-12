import { TaskPriority, TaskStatus } from "@/components/task/types";

export type TaskColumn = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  original: {
    id: string;
  };
};

export type TaskColumns = {
  tasks: TaskColumn[];
};
