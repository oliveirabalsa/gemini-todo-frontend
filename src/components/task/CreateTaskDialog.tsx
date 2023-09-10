import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateTaskForm from "./CreateTaskForm";

const CreateTaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new task:</DialogTitle>
          <DialogDescription>
            <CreateTaskForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
