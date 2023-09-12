import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import CREATE_TASK_MUTATION from "@/services/graphql/mutations/createTask";
import { useLazyQuery, useMutation } from "@apollo/client";
import { createTaskSchema } from "@/services/zod/schemas/createTask.schema";
import { TaskPriority, TaskStatus } from "./types";
import GET_TASK_BY_ID_QUERY from "@/services/graphql/queries/getOneTask";
import { useEffect } from "react";
import UPDATE_TASK_MUTATION from "@/services/graphql/mutations/updateTask";

const CreateTaskForm = ({
  onCreate,
  onClose,
  taskId,
}: {
  onCreate: () => void;
  onClose: () => void;
  taskId: string;
}) => {
  const [fetch, { data }] = useLazyQuery(GET_TASK_BY_ID_QUERY, {
    variables: { id: taskId },
  });

  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
  });
  const [createTaskMutation] = useMutation(CREATE_TASK_MUTATION);
  const [updateTaskMutation] = useMutation(UPDATE_TASK_MUTATION);

  const onSubmit = async (data: z.infer<typeof createTaskSchema>) => {
    try {
      taskId
        ? await updateTaskMutation({
            variables: {
              id: taskId,
              title: data.title,
              description: data.description || "-",
              dueDate: data.dueDate || "-",
              priority: data.priority,
              status: data.status,
            },
          })
        : await createTaskMutation({
            variables: {
              title: data.title,
              description: data.description || "-",
              dueDate: data.dueDate || "-",
              priority: data.priority,
              status: data.status,
            },
          });
      onCreate();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (taskId) {
      fetch();
      const dataValues = {
        title: data?.task?.title || "",
        description: data?.task?.description,
        dueDate:
          data?.task?.dueDate && data?.task?.dueDate !== "-"
            ? new Date(data?.task?.dueDate)
            : new Date(),
        priority: data?.task?.priority,
        status: data?.task?.status,
      };
      form.reset(dataValues);
    }
  }, [fetch, taskId, data, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Task Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Task Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a priority to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={TaskPriority.LOW}>Low</SelectItem>
                  <SelectItem value={TaskPriority.MEDIUM}>Medium</SelectItem>
                  <SelectItem value={TaskPriority.HIGH}>High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={TaskStatus.TODO}>To do</SelectItem>
                  <SelectItem value={TaskStatus.IN_PROGRESS}>
                    In progress
                  </SelectItem>
                  <SelectItem value={TaskStatus.COMPLETED}>
                    Completed
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{taskId ? "Save" : "Submit"}</Button>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
