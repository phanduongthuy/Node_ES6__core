import {Router} from "express";
import {asyncHandler} from "@/utils/handlers";
import {verifyToken} from "@/app/middleware/common";

const router = Router();

router.use(asyncHandler(verifyToken));
export default router;
