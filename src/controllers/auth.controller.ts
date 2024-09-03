import { Request, Response } from "express";
import { SessionStorage } from "../entities";
import { LibraryModel, UserModel } from "../lib/mongoose/models";
import { createHash } from 'crypto';
import { ISessionObject } from "../types";


export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = (await UserModel.find({ email, password }))[0];
        if(user) {
            const library = await LibraryModel.findOne({users: user._id});
            
            const sessionId = createHash('sha256')
                                .update(user.email)
                                .update(String(Date.now()))
                                .digest('hex');

            const sessionObject: ISessionObject = {
                currentUser: user,
                currentLibrary: library!
            }
            SessionStorage.setSessionData(sessionId, sessionObject);

            res.send({
                sessionId,
                library: {
                    name: library?.name
                }
            });
        }
        else {
            res.statusCode = 500;
            res.send({
                error: 'Invalid username or password',
            });
        }
    }

    async logout(req: Request, res: Response) {
        const sessionId = req.headers['x-session-id'];
        console.log('sessionId', sessionId)
        SessionStorage.removeSessionData(sessionId as string);

        res.statusCode = 200;
        res.send({
            success: true
        });
    }

    async signUp(req: Request, res: Response) {

    }
};

