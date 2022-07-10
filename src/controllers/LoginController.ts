import { NextFunction, Request, Response } from 'express';
import { get, controller, validator, post } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class LoginController {
  // @get('/')
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
    </form>`);
  }

  @post('/login')
  @validator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === 'viet@vi.ca' && password === '123') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}
