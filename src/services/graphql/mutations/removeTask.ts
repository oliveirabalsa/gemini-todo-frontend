import { gql } from "@apollo/client";

const REMOVE_TASK_MUTATION = gql`
  mutation RemoveTask($id: String!) {
    removeTask(id: $id)
  }
`;

export default REMOVE_TASK_MUTATION;
