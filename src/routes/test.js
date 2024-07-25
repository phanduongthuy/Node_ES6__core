import {Router} from "express";
import * as TestController from "@/app/controllers/test.controller";

const router = Router();

router.get("", TestController.getData);

export default router;
