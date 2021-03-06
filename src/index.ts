import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['vietsession'] }));
app.use(AppRouter.router);

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
