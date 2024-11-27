import fastifyCookie from "@fastify/cookie";
import Fastify from "fastify";
import { transactionsRoutes } from "./routes";

export const app = Fastify();

app.register(fastifyCookie);

app.addHook("preHandler", async (req, res) => {
  console.log(`[${req.method}] ${req.url}`);
});

app.register(transactionsRoutes, {
  prefix: "transactions",
});
