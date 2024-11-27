"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/env/index.ts
var import_zod = require("zod");
var import_dotenv = require("dotenv");
var envConfigTest = { path: ".env.test" };
process.env.NODE_ENV === "test" ? (0, import_dotenv.config)(envConfigTest) : (0, import_dotenv.config)();
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: import_zod.z.string(),
  PORT: import_zod.z.number().default(3333)
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("Invalid environment variables!", _env.error.format());
  throw new Error("Invalid environment variables.");
}
var env = _env.data;

// src/app.ts
var import_cookie = __toESM(require("@fastify/cookie"));
var import_fastify = __toESM(require("fastify"));

// src/database.ts
var import_knex = require("knex");
var config2 = {
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations"
  }
};
var knex = (0, import_knex.knex)(config2);

// src/controller/transactions.ts
var import_zod2 = require("zod");
var import_node_crypto = require("crypto");
async function listTransitions(req, reply) {
  const { sessionId } = req.cookies;
  const transactions2 = await knex("transactions").where("session_id", sessionId).select();
  return reply.status(200).send(transactions2);
}
async function listTransitionById(req, reply) {
  const paramsSchema = import_zod2.z.object({
    id: import_zod2.z.string().uuid()
  });
  const { id } = paramsSchema.parse(req.params);
  const { sessionId } = req.cookies;
  const transaction = await knex("transactions").where({ session_id: sessionId, id }).first();
  return reply.status(200).send(transaction);
}
async function summaryTransactions(req, reply) {
  const { sessionId } = req.cookies;
  const summary = await knex("transactions").where("session_id", sessionId).sum("amount", { as: "amount" }).first();
  return reply.status(200).send(summary);
}
async function createTransition(req, reply) {
  const bodySchema = import_zod2.z.object({
    title: import_zod2.z.string(),
    amount: import_zod2.z.number(),
    type: import_zod2.z.enum(["credit", "debit"])
  });
  const { title, amount, type } = bodySchema.parse(req.body);
  let sessionId = req.cookies.sessionId;
  if (!sessionId) {
    sessionId = (0, import_node_crypto.randomUUID)();
    reply.setCookie("sessionId", sessionId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    });
  }
  await knex("transactions").insert({
    id: (0, import_node_crypto.randomUUID)(),
    title,
    amount: type === "credit" ? amount : amount * -1,
    session_id: sessionId
  });
  return reply.status(201).send();
}
async function deleteTransition(req, reply) {
  const paramsSchema = import_zod2.z.object({
    id: import_zod2.z.string().uuid()
  });
  const { id } = paramsSchema.parse(req.params);
  const { sessionId } = req.cookies;
  await knex("transactions").where({ session_id: sessionId, id }).del();
  return reply.status(200).send();
}
var transactions = {
  listTransitions,
  listTransitionById,
  summaryTransactions,
  createTransition,
  deleteTransition
};

// src/middlewares/check-session-id-exist.ts
async function checkSessionIdExists(req, reply) {
  const sessionId = req.cookies.sessionId;
  if (!sessionId) return reply.status(401).send({ error: "Unauthorized" });
}

// src/routes/index.ts
async function transactionsRoutes(app2) {
  app2.get("/", { preHandler: [checkSessionIdExists] }, async (req, reply) => {
    return await transactions.listTransitions(req, reply);
  });
  app2.get(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.listTransitionById(req, reply);
    }
  );
  app2.get(
    "/summary",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.summaryTransactions(req, reply);
    }
  );
  app2.post("/", async (req, reply) => {
    return await transactions.createTransition(req, reply);
  });
  app2.delete(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      return await transactions.deleteTransition(req, reply);
    }
  );
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(import_cookie.default);
app.addHook("preHandler", async (req, res) => {
  console.log(`[${req.method}] ${req.url}`);
});
app.register(transactionsRoutes, {
  prefix: "transactions"
});

// src/index.ts
app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP Server Running in ${env.NODE_ENV}!`);
});
