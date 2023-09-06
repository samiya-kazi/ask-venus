import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? '4000';

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port}`);
});