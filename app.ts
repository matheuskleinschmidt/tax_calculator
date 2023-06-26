import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
    database: "tax-calculator",
    hostname: "ep-damp-moon-409508.us-east-2.aws.neon.tech",
    host_type: "tcp",
    password: "YFbndf4ry1sE",
    port: 5432,
    user: "opa",
});

interface SimplesNacional {
  id?: number;
  rBT12: number;
  nominalRate: number;
  deduction: number;
  IRPJ: number;
  CSLL: number;
  COFINS: number;
  PIS: number;
  CPP: number;
  ICMS: number;
}

const router = new Router();

// Listar todos os registros
router.get("/simplesnacional", async (ctx: Context) => {
  try {
    await client.connect();
    const result = await client.queryObject("SELECT * FROM SimplesNacional");
    ctx.response.body = result.rows;
  } catch (error) {
    console.log(error)
    ctx.response.status = 500;
    ctx.response.body = { error: "Erro ao listar registros" };
  } finally {
    await client.end();
  }
});

// Obter um registro por ID
router.get("/simplesnacional/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await client.connect();
    console.log(id)
    const result = await client.queryObject(
      "SELECT * FROM simplesnacional WHERE id = $1",
      id
    );
    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Registro não encontrado" };
      return;
    }
    ctx.response.body = result.rows;
  } catch (error) {
    console.log(error)
    ctx.response.status = 500;
    ctx.response.body = { error: "Erro ao obter registro" };
  } finally {
    await client.end();
  }
});

// Criar um registro
router.post("/simplesnacional", async (ctx: Context) => {
    const { value } = await ctx.request.body();
    const newRecord: SimplesNacional = value;
    console.log(await ctx.request.body().value)
    let teste = await ctx.request.body().value
    try {
      await client.connect();
        const result = await client.queryObject(
          `INSERT INTO SimplesNacional ("rBT12", "nominalRate", deduction, "IRPJ", "CSLL", "COFINS", "PIS", "CPP", "ICMS")
          VALUES (${teste.rBT12}, ${teste.nominalRate}, ${teste.deduction}, ${teste.IRPJ}, ${teste.CSLL},
             ${teste.COFINS}, ${teste.PIS}, ${teste.CPP}, ${teste.ICMS}) RETURNING *`,
          teste.rBT12,
          teste.nominalRate,
          teste.deduction,
          teste.IRPJ,
          teste.CSLL,
          teste.COFINS,
          teste.PIS,
          teste.CPP,
          teste.ICMS
        );
        ctx.response.body = result.rows;    
    } catch (error) {
      console.log(error);
      ctx.response.status = 500;
      ctx.response.body = { error: "Erro ao criar registro" };
    } finally {
      await client.end();
    }
  });
  
  
  
  

// Atualizar um registro
router.put("/simplesnacional/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  const { value } = await ctx.request.body();
  const updatedRecord: SimplesNacional = value;
  let teste = await ctx.request.body().value
  let param = ctx.params
  console.log(param )
  try {
    await client.connect();
    const result = await client.queryObject(
      `UPDATE SimplesNacional SET "rBT12" = ${teste.rBT12}, "nominalRate" = ${teste.nominalRate}, "deduction" =  ${teste.deduction}, 
      "IRPJ" = ${teste.IRPJ}, "CSLL" = ${teste.CSLL}, "COFINS" = ${teste.COFINS}, "PIS" = ${teste.PIS}, "CPP" = ${teste.CPP}, "ICMS" = ${teste.ICMS} WHERE id = ${param.id} RETURNING *`,
    );
    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Registro não encontrado" };
      return;
    }
    ctx.response.body = result.rows;
  } catch (error) {
    console.log(error)
    ctx.response.status = 500;
    ctx.response.body = { error: "Erro ao atualizar registro" };
  } finally {
    await client.end();
  }
});

// Deletar um registro
router.delete("/simplesnacional/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  let param = ctx.params
  try {
    await client.connect();
    const result = await client.queryObject(
      `DELETE FROM SimplesNacional WHERE id = ${param.id} RETURNING *`,
    );
    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Registro não encontrado" };
      return;
    }
    ctx.response.body = { message: "Registro deletado com sucesso" };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Erro ao deletar registro" };
  } finally {
    await client.end();
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("API rodando ");

await app.listen({ port: 8000 });
