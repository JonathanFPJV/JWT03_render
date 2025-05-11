// Primer archivo: auth.routes.js
import express from "express";
import { signup, signIn } from "../controllers/auth.controller.js";
import { 
    checkDuplicateUsernameOrEmail,
    checkRolesExisted 
} from "../middlewares/verifySignUp.js";

const router = express.Router();

router.post('/signup', [checkDuplicateUsernameOrEmail, checkRolesExisted], signup);
router.post('/signin', signIn);

export default router;