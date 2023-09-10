import { gql } from "@apollo/client";

const CREATE_TASK_MUTATION = gql`
  mutation CreateTask(
    $title: String!
    $description: String!
    $dueDate: String
    $priority: String
    $status: String
  ) {
    createTask(
      createTaskInput: {
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
      dueDate
      priority
      status
    }
  }
`;

export default CREATE_TASK_MUTATION;
