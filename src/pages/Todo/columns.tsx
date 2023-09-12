import { TaskPriority, TaskStatus } from "@/components/task/types";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { TaskColumn } from "./types";

const priorityBadgeColors: Record<
  TaskPriority,
  "secondary" | "default" | "destructive" | "outline"
> = {
  [TaskPriority.LOW]: "secondary",
  [TaskPriority.MEDIUM]: "default",
  [TaskPriority.HIGH]: "destructive",
};

const statusBadgeColors: Record<
  TaskStatus,
  "secondary" | "default" | "outline" | "destructive"
> = {
  [TaskStatus.TODO]: "secondary",
  [TaskStatus.IN_PROGRESS]: "default",
  [TaskStatus.COMPLETED]: "outline",
};

export const columns: ColumnDef<TaskColumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const value: TaskPriority = row.getValue("priority");
      return <Badge variant={priorityBadgeColors[value]}>{value}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value: string = row
        .getValue<TaskStatus>("status")
        ?.split("_")
        ?.join(" ");
      return (
        <Badge variant={statusBadgeColors[value as TaskStatus]}>{value}</Badge>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => {
      const value: string = row.getValue("dueDate");
      return value !== "-" ? new Date(value).toLocaleDateString() : value;
    },
  },
];
