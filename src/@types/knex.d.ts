import { Knex } from "knex";

declare module "knex/types/tables" {
  interface transaction {
    id: string;
    title: string;
    amount: number;
    created_at: string;
    session_id?: string;
  }

  export interface Tables {
    transactions: transaction;
  }
}
