// deps.ts
export { Application, Router, BodyJson } from "https://deno.land/x/oak@v12.1.0/mod.ts";
export { oakCors } from "https://deno.land/x/cors/mod.ts";
export { PrismaClient } from "../generated/client/deno/edge.ts";
export { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
