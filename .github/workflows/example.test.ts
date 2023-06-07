import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { superdeno } from "https://deno.land/x/superdeno/mod.ts";
import { app } from "./app.ts";

Deno.test("GET /api/users", async () => {
  const request = await superdeno(app)
    .get("/api/users")
    .expect(200)
    .expect("Content-Type", /json/);

  assertEquals(request.body.length, 2);
  assertEquals(request.body[0].name, "John");
});