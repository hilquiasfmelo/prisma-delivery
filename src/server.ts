import express from 'express';
import 'express-async-errors';
import 'dotenv/config';

import { router } from './routes';
import { AppError } from './error/AppError';

const app = express();

app.use(express.json());
app.use(router);
app.use(AppError);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on PORT ${process.env.PORT}`);
});
