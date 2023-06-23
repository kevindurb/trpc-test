import { createHTTPServer } from '@trpc/server/adapters/standalone';
import * as z from 'zod';

import { client } from './db';
import { createTodo } from './queries/todos.queries';
import { publicProcedure, router } from './trpc';

const apiRouter = router({
  userCreate: publicProcedure
    .input(z.string())
    .mutation(async ({ input: name }) => {
      const todo = await createTodo.run({ todos: [{ name }] }, client);
      console.log(todo);
    }),
});

export type ApiRouter = typeof apiRouter;

const server = createHTTPServer({
  router: apiRouter,
});

server.listen(3000);
