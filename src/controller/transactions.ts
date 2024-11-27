import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

async function listTransitions(req: FastifyRequest, reply: FastifyReply) {
  const { sessionId } = req.cookies;

  const transactions = await knex("transactions")
    .where("session_id", sessionId)
    .select();

  return reply.status(200).send(transactions);
}

async function listTransitionById(req: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(req.params);
  const { sessionId } = req.cookies;

  const transaction = await knex("transactions")
    .where({ session_id: sessionId, id })
    .first();

  return reply.status(200).send(transaction);
}

async function summaryTransactions(req: FastifyRequest, reply: FastifyReply) {
  const { sessionId } = req.cookies;

  const summary = await knex("transactions")
    .where("session_id", sessionId)
    .sum("amount", { as: "amount" })
    .first();

  return reply.status(200).send(summary);
}

async function createTransition(req: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    title: z.string(),
    amount: z.number(),
    type: z.enum(["credit", "debit"]),
  });

  const { title, amount, type } = bodySchema.parse(req.body);

  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = randomUUID();
    reply.setCookie("sessionId", sessionId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  await knex("transactions").insert({
    id: randomUUID(),
    title,
    amount: type === "credit" ? amount : amount * -1,
    session_id: sessionId,
  });

  return reply.status(201).send();
}

async function deleteTransition(req: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(req.params);
  const { sessionId } = req.cookies;

  await knex("transactions").where({ session_id: sessionId, id }).del();

  return reply.status(200).send();
}

export const transactions = {
  listTransitions,
  listTransitionById,
  summaryTransactions,
  createTransition,
  deleteTransition,
};
