import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import teste from "./initialvalues.ts";

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

router.get("/teste", teste.teste);
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
    const result = await client.queryArray(
      "SELECT * FROM SimplesNacional WHERE id = $1",
      id
    );
    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Registro não encontrado" };
      return;
    }
    ctx.response.body = result.rows;
  } catch (error) {
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
  try {
    await client.connect();
    const result = await client.query(
      "INSERT INTO SimplesNacional (rBT12, nominalRate, deduction, IRPJ, CSLL, COFINS, PIS, CPP, ICMS) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      newRecord.rBT12,
      newRecord.nominalRate,
      newRecord.deduction,
      newRecord.IRPJ,
      newRecord.CSLL,
      newRecord.COFINS,
      newRecord.PIS,
      newRecord.CPP,
      newRecord.ICMS
    );
    ctx.response.body = result.rowsOfObjects()[0];
  } catch (error) {
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
  try {
    await client.connect();
    const result = await client.query(
      "UPDATE SimplesNacional SET rBT12 = $1, nominalRate = $2, deduction = $3, IRPJ = $4, CSLL = $5, COFINS = $6, PIS = $7, CPP = $8, ICMS = $9 WHERE id = $10 RETURNING *",
      updatedRecord.rBT12,
      updatedRecord.nominalRate,
      updatedRecord.deduction,
      updatedRecord.IRPJ,
      updatedRecord.CSLL,
      updatedRecord.COFINS,
      updatedRecord.PIS,
      updatedRecord.CPP,
      updatedRecord.ICMS,
      id
    );
    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Registro não encontrado" };
      return;
    }
    ctx.response.body = result.rowsOfObjects()[0];
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Erro ao atualizar registro" };
  } finally {
    await client.end();
  }
});

// Deletar um registro
router.delete("/simplesnacional/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await client.connect();
    const result = await client.query(
      "DELETE FROM SimplesNacional WHERE id = $1 RETURNING *",
      id
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

console.log("API rodando em http://localhost:8000");

await app.listen({ port: 8000 });
