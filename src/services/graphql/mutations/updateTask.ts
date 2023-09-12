import { gql } from "@apollo/client";

const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask(
    $id: ID!
    $title: String!
    $description: String
    $dueDate: String
    $priority: String
    $status: String
  ) {
    updateTask(
      updateTaskInput: {
        id: $id
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
