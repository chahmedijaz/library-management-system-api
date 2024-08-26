import { Request, Response } from "express";
import { SessionStorage } from "../entities";
import { UserModel } from "../lib/mongoose/models";
import { createHash } from 'crypto';


export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = (await UserModel.find({ email, password }))[0];
        
        if(user) {
            const sessionId = createHash('sha256')
                                .update(user.email)
                                .update(String(Date.now()))
                                .digest('hex');
            SessionStorage.setSessionData(sessionId, user);
            res.send({
                sessionId,
            });
        }
        else {
            res.send({
                error: 'Invalid username or password',
            });
        }
    }

    async logout(req: Request, res: Response) {
        const { sessionId } = req.body;
        SessionStorage.removeSessionData(sessionId);

        res.statusCode = 200;
        res.send({
            success: true
        });
    }

    async signUp(req: Request, res: Response) {

    }
};
