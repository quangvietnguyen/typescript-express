import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['vietsession'] }));
app.use(router);
app.use(controllerRouter);

// app.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//         <h1>Hi there</h1>
//     </div>
// `);
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
