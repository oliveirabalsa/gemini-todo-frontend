import { gql } from "@apollo/client";

const REMOVE_TASK_MUTATION = gql`
  mutation RemoveTask($id: ID!) {
    removeTask(id: $id)
  }
`;

export default REMOVE_TASK_MUTATION;
