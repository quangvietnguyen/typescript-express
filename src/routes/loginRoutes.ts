import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'viet@vi.ca' && password === '123') {
    req.session = { loggedIn: true };
    res.redirect('/');
    //   }
    //     res.send(`
    //         <div>
    //             <h1>Hi there</h1>
    //         </div>
    //         `);
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
            <div>
                <h1>You are logged in</h1>
                <a href="/logout">Logout</a>
            </div>
            `);
  } else {
    res.send(`
            <div>
                <h1>You are not logged in</h1>
                <a href="/login">Login</a>
            </div>
            `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
