import express from 'express';
import path from 'path';

import { route } from './routes';
import { serverConfig } from './config/server';

const app = express();
const { port } = serverConfig;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(port, callback(port));

function callback(serverPort: number) {
   return () => {
      console.log(`
         ====Server is running on port:${serverPort}====
         Click here: http://localhost:${serverPort}
      `);
   };
};