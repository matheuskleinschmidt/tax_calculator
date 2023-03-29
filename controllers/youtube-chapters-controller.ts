import { IChapter, getChaptersData } from "../models/youtube-chapters-model.ts";

const getChapters = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  let chapters = await getChaptersData(params.id);
  chapters = [{tese:"teste"}]
  response.status = 200;
  response.body = chapters;
};

const teste = async (
  { response }
) => {
  let chapters = [{tese:"teste"}]
  response.status = 200;
  response.body = chapters;
};

export { getChapters,teste };
