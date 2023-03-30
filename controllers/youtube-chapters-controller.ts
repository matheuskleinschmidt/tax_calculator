export const teste = async ({ response }) => {
  let chapters = [{ tese: "teste" }]
  response.status = 200;
  response.body = chapters;
};
