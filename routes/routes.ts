import { Router } from "https://deno.land/x/oak/mod.ts";
import { teste } from "../controllers/youtube-chapters-controller.ts";

const router = new Router();

router.get("/", teste);

export default router;
