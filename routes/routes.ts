import {  Router, config } from "./deps.ts";
import { PrismaClient } from "./deps.ts";
import router from "./routes/routes.ts";
import teste from "../controllers/youtube-chapters-controller.ts";


const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "prisma://aws-us-east-1.prisma-data.com/?api_key=bVh4IUeLotqTc_36VLug4pwnAe9p60ArKuU6JcuH3mAsM_DzHBlxPI9VTnJL5cTo",
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
  }).post("/type", async (context) => {
    const { name, description } = await context.request.body("json").value;
    const result = await prisma.type.create({
      data: {
        name,
        description,
      },
    });
    context.response.body = result;
  }).get("/types", async (context) => {
    const result = await prisma.type.findMany({
      select: {
        name: true,
        typeRange: {
          select: {
            range: {
              select: {
                name: true,
                rangeTaxation: {
                  select: {
                    taxation: {
                      select: {
                        name: true,
                        value: true,
                        isPercentage: true,
                        isDividedOneHundred: true,
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    context.response.body = result;
  }).get("/dinosaur/:id", async (context) => {
    // Get one dinosaur by id.
    const { id } = context.params;
    const dinosaur = await prisma.dinosaur.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = dinosaur;
  })
  .post("/dinosaur", async (context) => {
    // Create a new dinosaur.
    const { name, description } = await context.request.body("json").value;
    const result = await prisma.dinosaur.create({
      data: {
        name,
        description,
      },
    });
    context.response.body = result;
  })
  .post("/type", async (context) => {
    try {
      const { name, description } = await context.request.body().value;
      const result = await prisma.type.create({
        data: {
          name,
          description,
        },
      });
      context.response.body = result;
    } catch (error) {
      console.error("Error creating type:", error);
      context.response.status = 500;
      context.response.body = { error: "Internal Server Error" };
    } finally {
      await prisma.$disconnect();
    }
  }).post("/range", async (context) => {
    try {
      const { rangeName, rangeDescription, typeId } = await context.request.body().value;
  
      const range = await prisma.range.create({
        data: {
          name: rangeName,
          description: rangeDescription,
        },
      });
  
      const typeRange = await prisma.typeRange.create({
        data: {
          typeId: typeId,
          rangeId: range.id,
        },
      });
  
      context.response.body = { range, typeRange };
    } catch (error) {
      console.error("Error filling tables:", error);
      context.response.status = 500;
      context.response.body = { error: "Internal Server Error" };
    } finally {
      await prisma.$disconnect();
    }
  }).post("/taxation", async (context) => {
    try {
      const { taxationName, taxationValue, isPercentage, isDividedOneHundred,rangeId } = await context.request.body().value;
  
      // Criação da Taxation
      const taxation = await prisma.taxation.create({
        data: {
          name: taxationName,
          value: taxationValue,
          isPercentage,
          isDividedOneHundred,
        },
      });
  
      // Criação do RangeTaxation
      const rangeTaxation = await prisma.rangeTaxation.create({
        data: {
          rangeId: rangeId,
          taxationId: taxation.id,
        },
      });
  
      context.response.body = {  taxation, rangeTaxation };
    } catch (error) {
      console.error("Error filling tables:", error);
      context.response.status = 500;
      context.response.body = { error: "Internal Server Error" };
    } finally {
      await prisma.$disconnect();
    }
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
