import CreateTaskDialog from "@/components/task/CreateTaskDialog";
import { DataTable } from "./DataTable";
import { TaskColumns, columns } from "./columns";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import GET_TASKS_QUERY from "@/services/graphql/queries/getTasks";
import logo from "@/assets/logo.png";

const Todo = () => {
  const { data, refetch } = useQuery<TaskColumns>(GET_TASKS_QUERY);

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
        <CreateTaskDialog onCreate={refetch} />
      </header>
      <main className="container mx-auto py-5">
        <DataTable columns={columns} data={data?.tasks || []} />
      </main>
    </>
  );
};

export default Todo;
