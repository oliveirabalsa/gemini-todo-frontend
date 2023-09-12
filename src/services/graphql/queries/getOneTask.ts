import { gql } from "@apollo/client";

const GET_TASK_BY_ID_QUERY = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      id
      title
      description
      priority
      status
      dueDate
    }
  }
`;

export default GET_TASK_BY_ID_QUERY;
