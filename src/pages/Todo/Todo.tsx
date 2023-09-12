import CreateTaskDialog from "@/components/task/CreateTaskDialog";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import GET_TASKS_QUERY from "@/services/graphql/queries/getTasks";
import logo from "@/assets/logo.png";
import { TaskColumns } from "./types";
import REMOVE_TASK_MUTATION from "@/services/graphql/mutations/removeTask";

const Todo = () => {
  const { data, refetch } = useQuery<TaskColumns>(GET_TASKS_QUERY);
  const [removeTask] = useMutation(REMOVE_TASK_MUTATION);
  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState<string>("");

  const onRemoveTask = async (id: string) => {
    await removeTask({ variables: { id } });
    refetch();
  };

  const onEditTask = async (id: string) => {
    setOpen(true);
    setTaskId(id);
  };

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <>
      <header className="container mx-auto py-5 flex justify-between">
        <section className="flex gap-5 items-center">
          <img src={logo} alt="Gemini Logo" className="w-20" />
          <h1 className="text-2xl font-bold">Gemini Sports Tasks</h1>
        </section>
        <CreateTaskDialog
          open={open}
          setOpen={setOpen}
          taskId={taskId}
          setTaskId={setTaskId}
          onCreate={refetch}
        />
      </header>
      <main className="container mx-auto py-5">
        <DataTable
          onRemoveTask={onRemoveTask}
          onEditTask={onEditTask}
          columns={columns}
          data={data?.tasks || []}
        />
      </main>
    </>
  );
};

export default Todo;
