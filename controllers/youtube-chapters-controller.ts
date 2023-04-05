import { BodyJson } from "https://deno.land/x/oak/mod.ts";

 const teste =  ({ response }: any) => {
  let chapters = [{ tese: "teste" }]
  response.status = 200;
  response.body = chapters;
};

export default {teste}