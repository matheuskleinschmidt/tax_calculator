import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple addition", () => {
  const result = 1 + 1;
  assertEquals(result, 2);
});
