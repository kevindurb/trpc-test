/** Types generated for queries found in "src/queries/todos.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllTodos' parameters type */
export type IGetAllTodosParams = void;

/** 'GetAllTodos' return type */
export interface IGetAllTodosResult {
  id: number;
  name: string;
}

/** 'GetAllTodos' query type */
export interface IGetAllTodosQuery {
  params: IGetAllTodosParams;
  result: IGetAllTodosResult;
}

const getAllTodosIR: any = {"usedParamSet":{},"params":[],"statement":"select\n  id,\n  name\nfrom todos"};

/**
 * Query generated from SQL:
 * ```
 * select
 *   id,
 *   name
 * from todos
 * ```
 */
export const getAllTodos = new PreparedQuery<IGetAllTodosParams,IGetAllTodosResult>(getAllTodosIR);


/** 'CreateTodo' parameters type */
export interface ICreateTodoParams {
  todos: readonly ({
    name: string | null | void
  })[];
}

/** 'CreateTodo' return type */
export interface ICreateTodoResult {
  id: number;
  name: string;
}

/** 'CreateTodo' query type */
export interface ICreateTodoQuery {
  params: ICreateTodoParams;
  result: ICreateTodoResult;
}

const createTodoIR: any = {"usedParamSet":{"todos":true},"params":[{"name":"todos","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"name","required":false}]},"locs":[{"a":32,"b":37}]}],"statement":"insert into todos (name) values :todos returning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into todos (name) values :todos returning *
 * ```
 */
export const createTodo = new PreparedQuery<ICreateTodoParams,ICreateTodoResult>(createTodoIR);


