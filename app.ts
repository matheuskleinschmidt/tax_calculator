import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
import teste from "./initialvalues.ts";

const config = {
  applicationName: "my_custom_app",
  connection: {
    attempts: 1,
  },
  database: "tax-calculator",
  hostname: "ep-damp-moon-409508.us-east-2.aws.neon.tech",
  host_type: "tcp",
  password: "YFbndf4ry1sE",
  port: 5432,
  user: "opa",
  tls: {
    enforce: false,
  },
};

const app = new Application();
const router = new Router();

const client = new Client(config);

router.get("/teste", teste.teste);
router.get("/", (context) => {
  context.response.body = "Welcome to the Dinosaur API!";
});

router.get("/simples-nacional", async (ctx: Context) => {
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM simples_nacional");
    ctx.response.body = result.rowsOfObjects();
  } catch (error) {
    console.log(error);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  } finally {
    await client.end();
  }
});

router.get("/simples-nacional/:id", async (ctx: Context) => {
  try {
    await client.connect();
    const { id } = ctx.params;
    const result = await client.query(
      "SELECT * FROM simples_nacional WHERE id = $1",
      id
    );

    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Resource not found" };
    } else {
      ctx.response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  } finally {
    await client.end();
  }
});

router.post("/simples-nacional", async (ctx: Context) => {
  try {
    await client.connect();
    const body = await ctx.request.body().value;
    const { rBT12, nominalRate, deduction, IRPJ, CSLL, COFINS, PIS, CPP, ICMS } = body;

    const result = await client.query(
      "INSERT INTO simples_nacional (rBT12, nominalRate, deduction, IRPJ, CSLL, COFINS, PIS, CPP, ICMS) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      rBT12,
      nominalRate,
      deduction,
      IRPJ,
      CSLL,
      COFINS,
      PIS,
      CPP,
      ICMS
    );

    ctx.response.status = 201;
    ctx.response.body = result.rowsOfObjects()[0];
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  } finally {
    await client.end();
  }
});

router.put("/simples-nacional/:id", async (ctx: Context) => {
  try {
    await client.connect();
    const { id } = ctx.params;
    const body = await ctx.request.body().value;
    const { rBT12, nominalRate, deduction, IRPJ, CSLL, COFINS, PIS, CPP, ICMS } = body;

    const result = await client.query(
      "UPDATE simples_nacional SET rBT12 = $2, nominalRate = $3, deduction = $4, IRPJ = $5, CSLL = $6, COFINS = $7, PIS = $8, CPP = $9, ICMS = $10 WHERE id = $1 RETURNING *",
      id,
      rBT12,
      nominalRate,
      deduction,
      IRPJ,
      CSLL,
      COFINS,
      PIS,
      CPP,
      ICMS
    );

    if (result.rows.length === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Resource not found" };
    } else {
      ctx.response.body = result.rowsOfObjects()[0];
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  } finally {
    await client.end();
  }
});

router.delete("/simples-nacional/:id", async (ctx: Context) => {
  try {
    await client.connect();
    const { id } = ctx.params;
    const result = await client.query(
      "DELETE FROM simples_nacional WHERE id = $1",
      id
    );

    if (result.rowCount === 0) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Resource not found" };
    } else {
      ctx.response.status = 204;
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  } finally {
    await client.end();
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 }); // replace with your desired port
