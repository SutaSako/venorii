import { createTRPCRouter, publicProcedure } from "pnpm/server/api/trpc";

export const salonRouter = createTRPCRouter({
  getSalonInfo: publicProcedure.query(({ ctx }) => {
    return ctx.db.salon.findFirst();
  }),
});
