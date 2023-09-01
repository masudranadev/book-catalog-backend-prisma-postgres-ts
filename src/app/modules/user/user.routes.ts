import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/signup',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);
router.post(
  '/signin',
  validateRequest(UserValidation.signin),
  UserController.signin
);

export const UserRoutes = router;
