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
import { useState } from "react";

const CreateTaskDialog = ({
  onCreate,
  open: externalOpen,
  setOpen: externalSetOpen,
  taskId,
  setTaskId,
}: {
  onCreate: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  setTaskId: (taskId: string) => void;
  taskId: string;
}) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    externalSetOpen(false);
    setTaskId("");
  };

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    externalSetOpen(open);
    setTaskId(!open ? "" : taskId);
  };

  return (
    <Dialog open={open || externalOpen} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new task:</DialogTitle>
          <DialogDescription>
            <CreateTaskForm
              taskId={taskId}
              onCreate={onCreate}
              onClose={onClose}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
