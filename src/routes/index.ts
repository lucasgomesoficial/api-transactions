import { FastifyInstance } from "fastify";
import { transactions } from "../controller/transactions";
import { checkSessionIdExists } from "../middlewares/check-session-id-exist";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/", { preHandler: [checkSessionIdExists] }, async (req, reply) => {
    return await transactions.listTransitions(req, reply);
  });

  app.get(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.listTransitionById(req, reply);
    }
  );

  app.get(
    "/summary",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.summaryTransactions(req, reply);
    }
  );

  app.post("/", async (req, reply) => {
    return await transactions.createTransition(req, reply);
  });

  app.delete(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.deleteTransition(req, reply);
    }
  );
}
