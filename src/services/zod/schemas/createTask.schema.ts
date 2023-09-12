import * as z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.string().optional(),
  status: z.string().optional(),
});
