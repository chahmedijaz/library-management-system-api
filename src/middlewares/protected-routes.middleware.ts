import { NextFunction, Request, Response } from "express";
import { SessionStorage } from "../entities";

const PUBLIC_ROUTES = [
    '/login',
    '/signup',
    '/logout',
    '/seed-db'
];

export class ProtectedRoutesMiddleware {
    public protect(req: Request, res: Response, next: NextFunction) {
        const url = req.url;
        if (PUBLIC_ROUTES.includes(url)) {
            next();
            return;
        }

        const sessionId = req.headers['x-session-id'];
        const data = SessionStorage.getSessionData(String(sessionId));

        if (!data) {
            res.statusCode = 401;
            res.send({error: 'UNAUTHORIZED'});
            return;
        }

        next();
    }
};
