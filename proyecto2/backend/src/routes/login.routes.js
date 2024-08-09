import { Router } from "express";
import { loginService } from "../service/login.service.js";

const loginRouter = Router();

loginRouter.post('/', loginService);

export default loginRouter;