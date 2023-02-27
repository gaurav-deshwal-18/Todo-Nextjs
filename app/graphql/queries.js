import { gql } from "@apollo/client";

export const GET_TODOS = `
  query MyQuery {
    todo {
      id
      data
    }
  }
`;

export const ADD_TODO = (todo) => `
mutation MyMutation {
  insert_todo(objects: {data:"${todo}"}) {
    returning {
      data
      id
    }
  }
}
`;

export const REMOVE_TODO = (id) => `
mutation MyMutation {
  delete_todo_by_pk(id: ${id}) {
    data
    id
  }
}
`;
