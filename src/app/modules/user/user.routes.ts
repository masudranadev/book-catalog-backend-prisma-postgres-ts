import { Router } from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { UserController } from "./user.controller";

const router = Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getUsers);

export const UserRoutes = router;