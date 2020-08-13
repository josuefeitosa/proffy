import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const host = process.env.SERVER_HOST;
const port = parseInt(process.env.SERVER_PORT);

app.listen(port, host, () => {
  console.log(`🚀Server running at http://${host}:${port}`);
});
