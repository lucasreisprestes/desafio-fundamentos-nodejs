import { Router } from 'express';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);

routes.post('/transactions', transactionRouter);


export default routes;
