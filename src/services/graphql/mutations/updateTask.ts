import { gql } from "@apollo/client";

const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($id: String!, $title: String!) {
    updateTask(
      updateTaskInput: {
        title: $title
        description: $description
        dueDate: $dueDate
        priority: $priority
        status: $status
      }
    ) {
      id
      title
      description
      priority
      status
      dueDate
    }
  }
`;

export default UPDATE_TASK_MUTATION;
