import { createHTTPServer } from '@trpc/server/adapters/standalone';
import * as z from 'zod';

import { publicProcedure, router } from './trpc';

const apiRouter = router({
  userCreate: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    console.log(input);
  }),
});

export type ApiRouter = typeof apiRouter;

const server = createHTTPServer({
  router: apiRouter,
});

server.listen(3000);
