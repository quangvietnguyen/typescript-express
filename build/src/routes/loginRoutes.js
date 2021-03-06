"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var AppRouter_1 = require("../AppRouter");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = AppRouter_1.AppRouter.router;
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <h1>You are logged in</h1>\n                <a href=\"/logout\">Logout</a>\n            </div>\n            ");
    }
    else {
        res.send("\n            <div>\n                <h1>You are not logged in</h1>\n                <a href=\"/login\">Login</a>\n            </div>\n            ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
