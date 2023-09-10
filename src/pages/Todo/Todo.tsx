import CreateTaskDialog from "@/components/task/CreateTaskDialog";
import { DataTable } from "./DataTable";
import { Payment, columns } from "./columns";

const Todo = () => {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <>
      <header className="container mx-auto py-5 flex justify-between">
        <h1 className="text-2xl font-bold">Gemini Sports Tasks</h1>
        <CreateTaskDialog />
      </header>
      <main className="container mx-auto py-5">
        <DataTable columns={columns} data={data} />
      </main>
    </>
  );
};

export default Todo;
