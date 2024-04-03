import { createTRPCRouter, publicProcedure } from "pnpm/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getAllService: publicProcedure.query(({ ctx }) => {
    return ctx.db.salon.findMany();
  }),
});
