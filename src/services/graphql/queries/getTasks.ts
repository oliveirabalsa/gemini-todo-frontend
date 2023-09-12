import { gql } from "@apollo/client";

const GET_TASKS_QUERY = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      priority
      status
      dueDate
    }
  }
`;

export default GET_TASKS_QUERY;
