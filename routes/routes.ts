import { Router } from "https://deno.land/x/oak/mod.ts";
import { teste } from "../controllers/youtube-chapters-controller.ts";

const router = new Router();

router.get("/api", teste);

export default router;
