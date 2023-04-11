import { Router } from "https://deno.land/x/oak/mod.ts";
import  teste  from "../controllers/youtube-chapters-controller.ts";
import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});


const router = new Router();

router.get("/teste", teste.teste);
router.get("/", (context) => {
    context.response.body = "Welcome to the Dinosaur API!";
  }).get("/dinosaur", async (context) => {
    // Get all dinosaurs.
    const dinosaurs = await prisma.dinosaur.findMany();
    context.response.body = dinosaurs;
  })
export default router;
