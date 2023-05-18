import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import router from "./routes/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
const port = 8000;

console.log("rodando na porta em alguma porta");
await app.listen({ port: port });
