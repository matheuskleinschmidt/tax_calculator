import { Router } from "https://deno.land/x/oak/mod.ts";
import  teste  from "../controllers/youtube-chapters-controller.ts";
import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: "prisma://aws-us-east-1.prisma-data.com/?api_key=PsW3TLn4_WkZAKNLOYKZwK3GGNtPkoP0hbVRhTvN4iHSJGfjUL-IeCUtm1qbIHa7"
      },
    },
  });

const router = new Router();

router.get("/teste", teste.teste);
router.get("/", (context) => {
    context.response.body = "Welcome to the Dinosaur API!";
  })
  .get("/dinosaur", async (context) => {
    // Get all dinosaurs.
    const dinosaurs = await prisma.dinosaur.findMany();
    context.response.body = dinosaurs;
  }).get("/test", async (context) => {
    // Get all dinosaurs.
    const dinosaurs = await prisma.taxRanges.findMany();
    context.response.body = dinosaurs;
  }).get("/dinosaur/:id", async (context) => {
    // Get one dinosaur by id.
    const { id } = context.params;
    const dinosaur = await prisma.dinosaur.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = dinosaur;
  }).post("/dinosaur", async (context) => {
    // Create a new dinosaur.
    const { name, description } = await context.request.body(JSON).value;
    const result = await prisma.dinosaur.create({
      data: {
        name,
        description,
      },
    });
    context.response.body = result;
  }).delete("/dinosaur/:id", async (context) => {
    // Delete a dinosaur by id.
    const { id } = context.params;
    const dinosaur = await prisma.dinosaur.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = dinosaur;
  });

export default router;
