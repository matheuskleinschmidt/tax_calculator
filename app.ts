import { Application, Router, BodyJson, config } from "./deps.ts";
import { oakCors } from "./deps.ts";
import router from "./routes/routes.ts";



const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
const port = 8000;

console.log("rodando na porta em alguma porta");
await app.listen({ port: port });
