import { ConnectMongo } from './database/mongo/connection.js';
import { factoryUser } from './factories/factory-user.js';
import { factoryPalette } from './factories/factory-palettes.js';
import express, { Router } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

await ConnectMongo.connect();

const port = process.env.PORT || 3000;
const app = express();
const router = Router();
const user = factoryUser(router);
const palette = factoryPalette(router);

app.use(cors());
app.use(express.json());
app.use('/user', user.Routes());
app.use('/palette', palette.Routes());

app.listen(port, () => {
  console.log('Server started');
});
