import dotenv from 'dotenv';

import express from 'express';

dotenv.config();

const app = express();

const host = process.env.SERVER_HOST;
const port = parseInt(process.env.SERVER_PORT);

app.listen(port, host, () => {
  console.log(`🚀Server running at http://${host}:${port}`);
});
