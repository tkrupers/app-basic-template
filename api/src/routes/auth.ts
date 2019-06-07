import { Router } from 'express';
import AuthController from '../controllers/auth-controller';
import { checkJwt } from  '../middleware/jwt';

const router = Router();

router.post('/login', AuthController.login);

export default router;
