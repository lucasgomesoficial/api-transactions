import { env } from "./env";
import { app } from "./app";

const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

app.listen({ host, port: env.PORT }).then(() => {
  console.log(`HTTP Server Running in ${env.NODE_ENV}!`);
});
